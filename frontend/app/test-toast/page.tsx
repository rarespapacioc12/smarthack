'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/toast';

export default function TestToastPage() {
  const toast = useToast();

  return (
    <div className="container mx-auto py-8 px-4 min-h-screen bg-gradient-to-br from-zinc-50 via-white to-blue-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-blue-950/20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl font-extrabold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Toast Notifications Test
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Test all types of toast notifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="card-hover shadow-lg animate-scale-in">
            <CardHeader>
              <CardTitle className="text-green-600">Success Toast</CardTitle>
              <CardDescription>Shows a success message with green gradient</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => toast.success('Success!', 'Your action was completed successfully.')}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              >
                Show Success Toast
              </Button>
            </CardContent>
          </Card>

          <Card className="card-hover shadow-lg animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="text-red-600">Error Toast</CardTitle>
              <CardDescription>Shows an error message with red gradient</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => toast.error('Error!', 'Something went wrong. Please try again.')}
                className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700"
              >
                Show Error Toast
              </Button>
            </CardContent>
          </Card>

          <Card className="card-hover shadow-lg animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="text-orange-600">Warning Toast</CardTitle>
              <CardDescription>Shows a warning message with orange gradient</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => toast.warning('Warning!', 'Please check your input before continuing.')}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700"
              >
                Show Warning Toast
              </Button>
            </CardContent>
          </Card>

          <Card className="card-hover shadow-lg animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle className="text-blue-600">Info Toast</CardTitle>
              <CardDescription>Shows an info message with blue gradient</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => toast.info('Information', 'Here is some useful information for you.')}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                Show Info Toast
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 card-hover shadow-lg animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <CardHeader>
            <CardTitle className="text-purple-600">All Toasts at Once</CardTitle>
            <CardDescription>Test multiple toasts appearing simultaneously</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => {
                toast.success('Task 1 Complete', 'First task finished successfully!');
                setTimeout(() => toast.info('Processing...', 'Working on task 2...'), 200);
                setTimeout(() => toast.warning('Attention Needed', 'Please review task 3.'), 400);
                setTimeout(() => toast.error('Task 4 Failed', 'Something went wrong with task 4.'), 600);
              }}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Show Multiple Toasts
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
