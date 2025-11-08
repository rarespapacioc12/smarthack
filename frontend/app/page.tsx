import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Shield, TrendingUp, Sparkles, Lock, Eye, Heart } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Teachers and students work together with AI assistance in real-time",
      color: "text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Stake & Earn",
      description: "Fair incentive system where reputation is earned through participation",
      color: "text-green-600"
    },
    {
      icon: Sparkles,
      title: "AI-Powered Recommendations",
      description: "Get personalized task suggestions with transparent explanations",
      color: "text-purple-600"
    },
    {
      icon: Shield,
      title: "Ethical by Design",
      description: "Privacy-first with full data control and algorithmic transparency",
      color: "text-orange-600"
    }
  ];

  const stats = [
    { label: "Tasks Created", value: "1,234" },
    { label: "Active Students", value: "5,678" },
    { label: "Rewards Earned", value: "89K EDU" },
    { label: "Success Rate", value: "78%" }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-zinc-950 dark:via-purple-950/20 dark:to-blue-950/20 border-b border-zinc-200 dark:border-zinc-800">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-pink-400/30 to-orange-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        </div>

        <div className="container relative mx-auto px-4 py-24 sm:py-32 z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-none shadow-lg hover:shadow-xl smooth-transition animate-bounce-in">
              <Sparkles className="w-4 h-4 mr-1 animate-pulse" />
              Education in the Era of Technology
            </Badge>

            <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 animate-scale-in">
              Learn, Stake, and Earn in Web3
            </h1>

            <p className="text-xl text-zinc-700 dark:text-zinc-300 mb-10 leading-relaxed font-medium animate-fade-in">
              A decentralized platform where teachers create educational tasks and students solve them.
              Fair incentives through staking, AI-powered personalization, and complete transparency. ✨
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in">
              <Link href="/dashboard">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl smooth-transition hover:scale-105 group">
                  <BookOpen className="w-5 h-5 mr-2 group-hover:rotate-12 smooth-transition" />
                  Get Started
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950/20 smooth-transition hover:scale-105">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center card-hover p-4 rounded-lg bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose EduChain?</h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Built with ethics, transparency, and the future of education in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-green-500 to-emerald-500',
                'from-purple-500 to-pink-500',
                'from-orange-500 to-red-500'
              ];
              return (
                <Card key={feature.title} className="border-2 border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 card-hover shadow-lg bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 animate-scale-in relative overflow-hidden group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${gradients[index]} opacity-0 group-hover:opacity-5 smooth-transition`} />
                  <CardHeader className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${gradients[index]} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 smooth-transition`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 smooth-transition">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-base text-zinc-600 dark:text-zinc-400">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Three simple steps to start learning or teaching
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-xl group hover:scale-110 smooth-transition">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-50 group-hover:opacity-75 smooth-transition" />
                <span className="relative z-10">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Connect Wallet</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Connect your MetaMask or any Web3 wallet to get started
              </p>
            </div>

            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-xl group hover:scale-110 smooth-transition">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-50 group-hover:opacity-75 smooth-transition" />
                <span className="relative z-10">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Choose Your Role</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Be a teacher creating tasks or a student solving challenges
              </p>
            </div>

            <div className="text-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-xl group hover:scale-110 smooth-transition">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur opacity-50 group-hover:opacity-75 smooth-transition" />
                <span className="relative z-10">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Stake & Learn</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Stake tokens, complete tasks, and earn rewards through learning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics & Transparency */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Ethics & Transparency</h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400">
                Your data, your control. Always.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Eye className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Full Transparency</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Every algorithmic decision is explained in plain language
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Lock className="w-8 h-8 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Data Privacy</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    View, export, or delete your data anytime. No questions asked.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Heart className="w-8 h-8 text-red-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Fair System</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Reputation earned through participation, not purchased
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        </div>
        <div className="container relative mx-auto px-4 text-center z-10">
          <h2 className="text-5xl font-extrabold mb-6 animate-fade-in">Ready to Start Learning? 🚀</h2>
          <p className="text-2xl mb-10 opacity-95 font-medium animate-scale-in">
            Join thousands of students and teachers already on the platform
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-zinc-100 shadow-2xl hover:shadow-white/50 smooth-transition hover:scale-110 text-lg px-8 py-6 font-bold animate-bounce-in">
              <Sparkles className="w-5 h-5 mr-2" />
              Launch App Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
