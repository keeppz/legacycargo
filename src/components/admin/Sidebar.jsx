'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  LayoutDashboard, 
  Truck, 
  Users, 
  Bell, 
  Warehouse,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const menuItems = [
  { title: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/admin' },
  { title: 'Envíos', icon: <Truck size={20} />, path: '/admin/shippings' },
  { title: 'Prealertas', icon: <Bell size={20} />, path: '/admin/prealerts' },
  { title: 'Almacén', icon: <Warehouse size={20} />, path: '/admin/warehouse' },
  { title: 'Usuarios', icon: <Users size={20} />, path: '/admin/users' },
  { title: 'Configuración', icon: <Settings size={20} />, path: '/admin/settings' },
];

export default function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/admin/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <aside 
      className={`admin-sidebar ${collapsed ? 'collapsed' : ''}`}
    >
      <div className="sidebar-header">
        {!collapsed && (
          <Link href="/admin" className="logo-link">
            <Image 
              src="/assets/img/logo/white-logo.png" 
              alt="Legacy Cargo" 
              width={150} 
              height={45}
            />
            {/* <span>Legacy Cargo</span> */}
          </Link>
        )}
        {collapsed && (
          <div className="logo-small">
            <Image 
              src="/assets/img/logo/logo.png" 
              alt="Legacy Cargo" 
              width={40} 
              height={25}
            />
          </div>
        )}
        <button 
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      <div className="sidebar-content">
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`nav-item ${pathname === item.path ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              {!collapsed && <span>{item.title}</span>}
            </Link>
          ))}
        </nav>
      </div>

      <div className="sidebar-footer">
        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          <LogOut size={20} />
          {!collapsed && <span>Cerrar Sesión</span>}
        </button>
      </div>
    </aside>
  );
} 