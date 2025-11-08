'use client';

import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12',
};

export function LoadingSpinner({ className, size = 'md' }: LoadingSpinnerProps) {
  return (
    <Loader2 className={cn('animate-spin', sizeClasses[size], className)} />
  );
}

export function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-zinc-50 via-white to-blue-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-blue-950/20">
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <LoadingSpinner size="xl" className="text-blue-600 dark:text-blue-500 relative z-10" />
      </div>
      <p className="mt-6 text-lg font-medium text-zinc-600 dark:text-zinc-400 animate-pulse">
        Loading...
      </p>
    </div>
  );
}

export function LoadingCard() {
  return (
    <div className="animate-pulse">
      <div className="bg-zinc-200 dark:bg-zinc-800 rounded-lg h-48 skeleton" />
    </div>
  );
}

export function LoadingSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
          <div className="bg-zinc-200 dark:bg-zinc-800 rounded-lg h-24 skeleton" />
        </div>
      ))}
    </div>
  );
}
