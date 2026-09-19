import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { LoginForm } from '@/components/auth/login-form';
import { Loader2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sign In | TruGlow Clinic Management Portal',
  description: 'Secure staff and administrator login for TruGlow Hair & Skin Clinic management systems.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#f7f3ed] flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle warm ambient clinic glow */}
      <div 
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#8f5323]/10 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Main Container */}
      <div className="w-full relative z-10">
        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center p-12 text-[#8f5323]">
              <Loader2 className="h-8 w-8 animate-spin" />
              <p className="mt-3 text-sm font-medium text-[#5f493c]">Loading Portal...</p>
            </div>
          }
        >
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
