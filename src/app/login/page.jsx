'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword, GoogleAuthProvider, OAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { FaLock, FaEnvelope, FaGoogle, FaApple } from 'react-icons/fa';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Si el login es exitoso, redirigimos al usuario
      router.push('/admin');
    } catch (error) {
      console.error('Error en login:', error);
      setError('Credenciales inválidas. Por favor, intente nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setIsLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/admin');
    } catch (error) {
      console.error('Error en login con Google:', error);
      setError('Error al iniciar sesión con Google. Por favor, intente nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAppleLogin = async () => {
    setError('');
    setIsLoading(true);
    try {
      const provider = new OAuthProvider('apple.com');
      await signInWithPopup(auth, provider);
      router.push('/admin');
    } catch (error) {
      console.error('Error en login con Apple:', error);
      setError('Error al iniciar sesión con Apple. Por favor, intente nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <Image
            src="/assets/img/logo/black-logo.png"
            alt="Legacy Cargo"
            width={170}
            height={50}
            className="login-logo"
          />
          <h2>¡Bienvenido de nuevo!</h2>
          <p>Ingresa tus credenciales para acceder</p>
        </div>

        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}

        <div className="social-login">
          <Button
            type="button"
            variant="outline"
            className={cn("social-btn", "google-btn", "shadcn-button")}
            onClick={handleGoogleLogin}
            disabled={isLoading}
          >
            <FaGoogle />
            <span>Continuar con Google</span>
          </Button>
          <Button
            type="button"
            className={cn("social-btn", "apple-btn", "shadcn-button")}
            onClick={handleAppleLogin}
            disabled={isLoading}
          >
            <FaApple />
            <span>Continuar con Apple</span>
          </Button>
        </div>

        <div className="login-divider">
          <span>o</span>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope className="input-icon" />
              Correo Electrónico
            </label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ejemplo@legacycargove.com"
              required
              className={cn("login-input", "shadcn-input")}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <FaLock className="input-icon" />
              Contraseña
            </label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className={cn("login-input", "shadcn-input")}
            />
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="rememberMe" 
                checked={rememberMe} 
                onCheckedChange={setRememberMe}
              />
              <label 
                htmlFor="rememberMe" 
                className="text-sm font-medium leading-none cursor-pointer"
              >
                Recordarme
              </label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <Button
            type="submit"
            className={cn("login-btn", "shadcn-button", isLoading && "opacity-70")}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loading-spinner"></span>
            ) : (
              'Iniciar Sesión'
            )}
          </Button>
        </form>

        <div className="login-footer">
          <p>¿No tienes una cuenta? <a href="/register">Regístrate</a></p>
        </div>
      </div>
    </div>
  );
} 