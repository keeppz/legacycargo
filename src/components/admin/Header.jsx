'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Bell, User, Search, Menu } from 'lucide-react';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export default function AdminHeader() {
  const user = auth.currentUser;
  const pathname = usePathname();
  const router = useRouter();
  const pageTitle = getPageTitle(pathname);
  
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/admin/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };
  
  return (
    <header className="admin-header">
      <h1 className="page-title">{pageTitle}</h1>
      <div className="header-right">
        <div className="search-container">
          <Search className="search-icon" />
          <input
            type="search"
            placeholder="Buscar..."
            className="search-input"
          />
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger className="icon-btn">
            <Bell className="icon-bell" />
            <span className="notification-badge"></span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="notifications-dropdown">
            <DropdownMenuLabel>Notificaciones</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="notification-list">
              {Array(3).fill(0).map((_, i) => (
                <DropdownMenuItem key={i} className="notification-item">
                  <div className="notification-content">
                    <p className="notification-title">{
                      i === 0 ? "Nuevo envío registrado" :
                      i === 1 ? "Actualización de estado" :
                      "Nuevo usuario registrado"
                    }</p>
                    <p className="notification-time">{
                      i === 0 ? "Hace 5 minutos" :
                      i === 1 ? "Hace 15 minutos" :
                      "Hace 1 hora"
                    }</p>
                  </div>
                </DropdownMenuItem>
              ))}
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="view-all">
              Ver todas
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger className="avatar-trigger">
            <Avatar>
              <AvatarImage src="" alt={user?.email} />
              <AvatarFallback>{getUserInitials(user?.email)}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="profile-dropdown">
            <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
            <div className="profile-info">
              <p className="profile-email">{user?.email}</p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="profile-link">
              <User className="profile-icon" />
              <span>Perfil</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="logout-link" onClick={handleLogout}>
              Cerrar sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

function getPageTitle(pathname) {
  if (pathname === '/admin') return 'Dashboard';
  if (pathname === '/admin/shippings') return 'Envíos';
  if (pathname === '/admin/prealerts') return 'Prealertas';
  if (pathname === '/admin/warehouse') return 'Almacén';
  if (pathname === '/admin/users') return 'Usuarios';
  if (pathname === '/admin/settings') return 'Configuración';
  
  // Fallback
  return 'Admin Panel';
}

function getUserInitials(email) {
  if (!email) return 'U';
  return email.charAt(0).toUpperCase();
} 