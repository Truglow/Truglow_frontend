'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Eye, EyeOff, Lock, User, ShieldCheck, AlertCircle, Loader2, KeyRound } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectParam = searchParams.get('redirect');
  const { login } = useAuth();

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isForgotOpen, setIsForgotOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!identifier.trim()) {
      setErrorMessage('Please enter your email or username.');
      return;
    }

    if (!password) {
      setErrorMessage('Please enter your password.');
      return;
    }

    setIsLoading(true);

    try {
      const result = await login({
        identifier: identifier.trim(),
        password,
        rememberMe,
      });

      if (!result.success) {
        setErrorMessage(result.error || 'Authentication failed. Please check your credentials.');
        setIsLoading(false);
        return;
      }

      // Navigate to /dashboard or requested target URL. Proxy routing will redirect to specific role dashboard.
      const targetUrl = redirectParam && redirectParam.startsWith('/dashboard') 
        ? redirectParam 
        : '/dashboard';

      router.push(targetUrl);
    } catch (err) {
      console.error('Login submit error:', err);
      setErrorMessage('An unexpected authentication error occurred. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Main Login Card */}
      <div className="bg-white/95 backdrop-blur-sm border border-[#e5ddd3] rounded-2xl shadow-xl p-8 md:p-10 transition-all duration-300">
        
        {/* TruGlow Clinic Logo */}
        <div className="flex justify-center mb-6">
          <Link 
            href="/" 
            className="inline-block transition-transform duration-300 hover:scale-105" 
            title="Return to TruGlow Clinic Homepage"
          >
            <div className="relative h-14 w-44">
              <Image
                src="/Asset_logo_2.svg"
                alt="TruGlow Clinic"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Heading & Portal Subtitle */}
        <div className="text-center mb-8">
          <div className="inline-block px-3 py-1 rounded-full bg-amber-100/70 border border-amber-200/80 text-[11px] font-semibold text-[#8f5323] uppercase tracking-wider mb-2">
            Truglow Staff Portal
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#2a1d17]">
            Welcome back
          </h1>
          <p className="text-xs md:text-sm text-[#7a6759] mt-2 font-normal">
            Sign in to securely access your clinic workspace.
          </p>
        </div>

        {/* Validation & Error Alert Area */}
        {errorMessage && (
          <Alert variant="destructive" className="mb-6 bg-red-50/90 border-red-200 text-red-800 animate-fade-in py-3">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
              <AlertDescription className="text-xs md:text-sm font-medium leading-snug">
                {errorMessage}
              </AlertDescription>
            </div>
          </Alert>
        )}

        {/* Credentials Form */}
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          
          {/* Email / Username Input */}
          <div className="space-y-1.5">
            <Label 
              htmlFor="identifier" 
              className="text-xs font-semibold uppercase tracking-wider text-[#4a3428]"
            >
              Email or Username
            </Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8f796a]">
                <User className="h-4 w-4" />
              </div>
              <Input
                id="identifier"
                name="identifier"
                type="text"
                autoComplete="username"
                disabled={isLoading}
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="staff@truglow.com or username"
                className="pl-10 h-11 bg-[#fcfaf7] border-[#d7cec7] text-[#2a1d17] placeholder:text-[#a8998d] focus-visible:ring-2 focus-visible:ring-[#8f5323] focus-visible:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Password Input with Visibility Toggle */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Label 
                htmlFor="password" 
                className="text-xs font-semibold uppercase tracking-wider text-[#4a3428]"
              >
                Password
              </Label>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8f796a]">
                <Lock className="h-4 w-4" />
              </div>
              <Input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                disabled={isLoading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="pl-10 pr-10 h-11 bg-[#fcfaf7] border-[#d7cec7] text-[#2a1d17] placeholder:text-[#a8998d] focus-visible:ring-2 focus-visible:ring-[#8f5323] focus-visible:border-transparent transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#8f796a] hover:text-[#4a3428] focus:outline-none transition-colors cursor-pointer"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Remember me & Password Reset */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="rememberMe"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked === true)}
                disabled={isLoading}
                className="border-[#8f796a] data-[state=checked]:bg-[#8f5323] data-[state=checked]:border-[#8f5323]"
              />
              <label
                htmlFor="rememberMe"
                className="text-xs text-[#5f493c] cursor-pointer select-none font-medium"
              >
                Remember me
              </label>
            </div>

            {/* Forgot password dialog trigger */}
            <Dialog open={isForgotOpen} onOpenChange={setIsForgotOpen}>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="text-xs font-semibold text-[#8f5323] hover:text-[#6e3e18] hover:underline focus:outline-none transition-colors cursor-pointer"
                >
                  Forgot password?
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-white border-[#e5ddd3]">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold text-[#2a1d17] flex items-center gap-2">
                    <KeyRound className="h-5 w-5 text-[#8f5323]" />
                    Password Reset Assistance
                  </DialogTitle>
                  <DialogDescription className="text-sm text-[#695447] pt-2">
                    For patient privacy and clinical security, staff portal credentials are managed centrally by TruGlow Clinic IT Operations.
                  </DialogDescription>
                </DialogHeader>
                <div className="bg-[#fcfaf7] border border-[#e8dfd6] rounded-lg p-4 text-xs space-y-2 text-[#4a3428]">
                  <p className="font-semibold text-sm text-[#2a1d17]">Internal Support Contacts:</p>
                  <p>• Operations Helpdesk: <span className="font-medium">ops@truglowclinic.com</span></p>
                  <p>• Administration Hotline: <span className="font-medium">+91 7799427273</span></p>
                  <p className="text-[11px] text-[#7a6759] pt-1">
                    Please provide your staff badge number and branch location when requesting credential assistance.
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <Button
                    type="button"
                    onClick={() => setIsForgotOpen(false)}
                    className="bg-[#8f5323] hover:bg-[#744119] text-white text-xs h-9 px-4 cursor-pointer"
                  >
                    Close
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-11 bg-[#8f5323] hover:bg-[#764319] active:bg-[#5f3513] text-[#fbf9f5] font-semibold text-sm shadow-md transition-all duration-200 mt-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin text-[#fbf9f5]" />
                Authenticating...
              </span>
            ) : (
              'Sign In to Portal'
            )}
          </Button>

        </form>

        {/* Security & Compliance Footer */}
        <div className="mt-8 pt-6 border-t border-[#eee7e0] flex items-center justify-center gap-2 text-center text-[#7e6c60]">
          <ShieldCheck className="h-4 w-4 text-[#8f5323] flex-shrink-0" />
          <span className="text-[11px] font-medium tracking-wide">
            Encrypted Session • Authorized Staff Only
          </span>
        </div>

      </div>

      {/* Return link to public website */}
      <div className="mt-6 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-[#7a6759] hover:text-[#8f5323] hover:underline transition-colors font-medium"
        >
          <span>←</span> Return to TruGlow Public Website
        </Link>
      </div>

    </div>
  );
}

