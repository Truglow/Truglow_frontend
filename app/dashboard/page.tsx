'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { getRoleDashboardRoute } from '@/lib/auth/roles';
import { Loader2 } from 'lucide-react';

export default function DashboardGatewayPage() {
  const router = useRouter();
  const { user, role, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading) {
      if (!user || !role) {
        router.replace('/login');
      } else {
        const targetRoute = getRoleDashboardRoute(role);
        router.replace(targetRoute);
      }
    }
  }, [user, role, isLoading, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <Loader2 className="h-8 w-8 animate-spin text-[#8f5323] mb-4" />
      <h2 className="text-lg font-semibold text-[#2a1d17]">Directing to your authorized workspace...</h2>
      <p className="text-xs text-[#7a6759] mt-1">Verifying clinic credentials and permissions</p>
    </div>
  );
}
