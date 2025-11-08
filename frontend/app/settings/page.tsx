'use client';

import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DataPrivacyPanel } from '@/components/DataPrivacyPanel';
import { getProfile, updateProfile } from '@/lib/supabase/queries';
import type { Profile } from '@/lib/types/database';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { User, Settings as SettingsIcon } from 'lucide-react';
import { createSupabaseBrowserClient } from '@/lib/supabase/client';
import { useToast } from '@/components/ui/toast';

const supabase = createSupabaseBrowserClient();

export default function SettingsPage() {
  const { address } = useAccount();
  const toast = useToast();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    role: 'student' as 'teacher' | 'student',
  });

  useEffect(() => {
    async function loadProfile() {
      if (!address) return;

      try {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('wallet_address', address.toLowerCase())
          .single();

        if (data) {
          setProfile(data);
          setFormData({
            username: data.username || '',
            role: data.role || 'student',
          });
        }
      } catch (error) {
        console.error('Error loading profile:', error);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [address]);

  async function handleSave() {
    if (!profile) return;

    setSaving(true);
    try {
      await updateProfile(profile.id, formData);
      toast.success('Profile updated successfully!', 'Your changes have been saved.');
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Error updating profile', 'Please try again later.');
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!profile) {
    return (
      <div className="container mx-auto py-8 px-4">
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-zinc-600">Please connect your wallet to access settings.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-zinc-950 dark:via-purple-950/20 dark:to-blue-950/20 relative">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      </div>

      <div className="mb-8 relative z-10 animate-fade-in">
        <h1 className="text-5xl font-extrabold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Settings
        </h1>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 font-medium">
          Manage your profile, privacy settings, and understand how your data is used ⚙️
        </p>
      </div>

      <div className="space-y-6 relative z-10">
        {/* Profile Settings */}
        <Card className="card-hover border-2 border-blue-500/20 bg-gradient-to-br from-white to-blue-50/50 dark:from-zinc-900 dark:to-blue-950/20 shadow-lg animate-scale-in">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-md">
                <User className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Profile Settings</CardTitle>
            </div>
            <CardDescription>Update your personal information and preferences</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Wallet Address</label>
              <input
                type="text"
                value={profile.wallet_address}
                disabled
                className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Username</label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                placeholder="Enter your username"
                className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-500 smooth-transition hover:border-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Role</label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value as any })}
                className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-500 smooth-transition hover:border-blue-400"
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                onClick={handleSave}
                disabled={saving}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg smooth-transition hover:scale-105"
              >
                {saving ? 'Saving...' : 'Save Changes'}
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setFormData({
                    username: profile.username || '',
                    role: profile.role || 'student',
                  });
                }}
                className="border-2 hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950/20 smooth-transition hover:scale-105"
              >
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Overview */}
        <Card className="card-hover border-2 border-green-500/20 bg-gradient-to-br from-white to-green-50/50 dark:from-zinc-900 dark:to-green-950/20 shadow-lg animate-scale-in" style={{ animationDelay: '0.1s' }}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center shadow-md">
                <SettingsIcon className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Your Statistics</CardTitle>
            </div>
            <CardDescription>Overview of your activity and reputation</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 border-2 border-blue-500/20 rounded-lg bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-zinc-900 card-hover shadow-md">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">{profile.rating.toFixed(1)}</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 font-medium mt-1">Rating</div>
              </div>
              <div className="text-center p-4 border-2 border-green-500/20 rounded-lg bg-gradient-to-br from-green-50 to-white dark:from-green-950/20 dark:to-zinc-900 card-hover shadow-md">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">{profile.completed_count}</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 font-medium mt-1">Completed</div>
              </div>
              <div className="text-center p-4 border-2 border-purple-500/20 rounded-lg bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-zinc-900 card-hover shadow-md">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">{profile.total_reviews}</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 font-medium mt-1">Total Reviews</div>
              </div>
              <div className="text-center p-4 border-2 border-orange-500/20 rounded-lg bg-gradient-to-br from-orange-50 to-white dark:from-orange-950/20 dark:to-zinc-900 card-hover shadow-md">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">{profile.token_balance}</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 font-medium mt-1">Tokens</div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200/50 dark:border-blue-800/50">
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                <strong className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">How your rating grows:</strong> Your rating increases through active participation,
                receiving positive reviews, and helping other students. Earn tokens by answering questions
                and completing tasks.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Data Privacy Panel */}
        <DataPrivacyPanel userId={profile.id} />
      </div>
    </div>
  );
}
