'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { createSupabaseBrowserClient } from '@/lib/supabase/client';
import { BookOpen, GraduationCap, Loader2 } from 'lucide-react';
import Link from 'next/link';

const supabase = createSupabaseBrowserClient();

export default function DashboardPage() {
  const { address, isConnected } = useAccount();
  const router = useRouter();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isConnected) {
      router.push('/');
      return;
    }

    async function loadProfile() {
      if (!address) return;

      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('wallet_address', address.toLowerCase())
          .single();

        if (error && error.code === 'PGRST116') {
          // Profile doesn't exist, redirect to setup
          router.push('/dashboard/setup');
          return;
        }

        setProfile(data);
      } catch (error) {
        console.error('Error loading profile:', error);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [address, isConnected, router]);

  // Redirect based on role
  useEffect(() => {
    if (!profile) return;

    if (profile.role === 'teacher') {
      router.push('/dashboard/teacher');
    } else if (profile.role === 'student') {
      router.push('/dashboard/student');
    }
  }, [profile, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-zinc-950 dark:via-purple-950/20 dark:to-blue-950/20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        </div>
        <div className="relative z-10">
          <div className="relative">
            <Loader2 className="w-16 h-16 animate-spin text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text" />
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
          </div>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 font-medium">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return null; // Will redirect to setup
  }

  // Show loading while redirecting
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-zinc-950 dark:via-purple-950/20 dark:to-blue-950/20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      </div>
      <div className="relative z-10">
        <div className="relative">
          <Loader2 className="w-16 h-16 animate-spin text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text" />
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
        </div>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400 font-medium">Redirecting...</p>
      </div>
    </div>
  );
}
