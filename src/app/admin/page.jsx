'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
  Timestamp
} from 'firebase/firestore';
import {
  Truck,
  Package,
  Users,
  BarChart3,
  CheckCircle2,
  Clock,
  XCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

function getPeriodRange(period) {
  const now = new Date();
  let start;
  if (period === 'day') {
    start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  } else if (period === 'week') {
    const day = now.getDay();
    start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - day);
  } else {
    start = new Date(now.getFullYear(), now.getMonth(), 1);
  }
  return Timestamp.fromDate(start);
}

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    total: 0,
    activos: 0,
    entregados: 0,
    pendientes: 0,
    cancelados: 0,
    usuarios: 0,
    productos: 0
  });
  const [period, setPeriod] = useState('month');
  const [chartData, setChartData] = useState({
    categories: [],
    series: []
  });

  useEffect(() => {
    const fetchStats = async () => {
      // Estadísticas generales
      const shippingsQuery = query(collection(db, 'shippings'));
      const shippingsSnapshot = await getDocs(shippingsQuery);
      let activos = 0, entregados = 0, pendientes = 0, cancelados = 0;
      shippingsSnapshot.forEach(doc => {
        const s = doc.data();
        if (s.status === 'active') activos++;
        else if (s.status === 'delivered') entregados++;
        else if (s.status === 'pending') pendientes++;
        else if (s.status === 'cancelled') cancelados++;
      });
      // Usuarios y productos
      const usersSnapshot = await getDocs(collection(db, 'users'));
      const productsSnapshot = await getDocs(collection(db, 'products'));
      setStats({
        total: shippingsSnapshot.size,
        activos,
        entregados,
        pendientes,
        cancelados,
        usuarios: usersSnapshot.size,
        productos: productsSnapshot.size
      });
    };
    fetchStats();
  }, []);

  useEffect(() => {
    // Gráfica de evolución de envíos
    const fetchChart = async () => {
      const start = getPeriodRange(period);
      const q = query(
        collection(db, 'shipments'),
        where('createdAt', '>=', start),
        orderBy('createdAt', 'asc')
      );
      const snapshot = await getDocs(q);
      // Agrupar por día, semana o mes
      const counts = {};
      snapshot.forEach(doc => {
        const d = doc.data();
        // Filtrar solo los envíos que NO estén en warehouse ni entregados
        if (d.status !== 'En Warehouse' && d.status !== 'Entregado') {
          const date = d.createdAt?.toDate?.() || new Date();
          let key = '';
          if (period === 'day') {
            key = date.toLocaleDateString();
          } else if (period === 'week') {
            const week = `${date.getFullYear()}-W${Math.ceil((date.getDate() + 6 - date.getDay()) / 7)}`;
            key = week;
          } else {
            key = `${date.getFullYear()}-${date.getMonth() + 1}`;
          }
          counts[key] = (counts[key] || 0) + 1;
        }
      });
      const categories = Object.keys(counts).sort();
      const series = [{ name: 'Envíos en tránsito', data: categories.map(k => counts[k]) }];
      setChartData({ categories, series });
    };
    fetchChart();
  }, [period]);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Bienvenido al panel de administración de Legacy Cargo</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <Truck size={24} />
          </div>
          <div className="stat-info">
            <h3>Total Envíos</h3>
            <p>{stats.total}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <CheckCircle2 size={24} />
          </div>
          <div className="stat-info">
            <h3>Entregados</h3>
            <p>{stats.entregados}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Clock size={24} />
          </div>
          <div className="stat-info">
            <h3>Pendientes</h3>
            <p>{stats.pendientes}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <XCircle size={24} />
          </div>
          <div className="stat-info">
            <h3>Cancelados</h3>
            <p>{stats.cancelados}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Users size={24} />
          </div>
          <div className="stat-info">
            <h3>Usuarios</h3>
            <p>{stats.usuarios}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Package size={24} />
          </div>
          <div className="stat-info">
            <h3>Productos</h3>
            <p>{stats.productos}</p>
          </div>
        </div>
      </div>
      
      <div className="chart-card">
        <div className="chart-header">
          <h3>Evolución de Envíos en Tránsito</h3>
          <div className="chart-controls">
            <button
              className={`chart-btn ${period === 'day' ? 'active' : ''}`}
              onClick={() => setPeriod('day')}
            >
              Diario
            </button>
            <button
              className={`chart-btn ${period === 'week' ? 'active' : ''}`}
              onClick={() => setPeriod('week')}
            >
              Semanal
            </button>
            <button
              className={`chart-btn ${period === 'month' ? 'active' : ''}`}
              onClick={() => setPeriod('month')}
            >
              Mensual
            </button>
          </div>
        </div>
        <div className="chart-content">
          {chartData.series.length > 0 && (
            <Chart
              options={{
                chart: { id: 'envios-chart', toolbar: { show: false }, fontFamily: 'inherit' },
                xaxis: { 
                  categories: chartData.categories,
                  axisBorder: { show: false },
                  axisTicks: { show: false },
                  labels: { style: { colors: '#64748b', fontSize: '12px' } }
                },
                colors: ['#DF1119'],
                dataLabels: { enabled: false },
                stroke: { curve: 'smooth', width: 3 },
                grid: { borderColor: '#f1f5f9', strokeDashArray: 5 },
                tooltip: { theme: 'light' },
                yaxis: {
                  labels: { style: { colors: '#64748b', fontSize: '12px' } }
                }
              }}
              series={chartData.series}
              type="line"
              height={350}
            />
          )}
        </div>
      </div>
    </div>
  );
} 