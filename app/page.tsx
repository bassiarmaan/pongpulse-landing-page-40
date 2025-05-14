import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Download, Smartphone, Activity, Map, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="PongPulse Logo" width={40} height={40} className="rounded-md" />
            <span className="text-xl font-bold">PongPulse</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="#coming-soon" className="text-sm font-medium hover:text-primary">
              Coming Soon
            </Link>
          </nav>
          <Button>Download App</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
          <div className="container flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
                Train Smarter, <span className="text-blue-600">Not Harder</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                PongPulse analyzes your table tennis game using just your iPhone camera — no special hardware needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2">
                  <Download className="h-5 w-5" />
                  Download on iOS
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <ArrowRight className="h-5 w-5" />
                  See How It Works
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border">
                <Image
                  src="/app-preview.png"
                  alt="PongPulse App Preview"
                  width={400}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                PongPulse makes table tennis training accessible and data-driven — so players can stop guessing and
                start improving.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-xl p-8 transition-all hover:shadow-lg">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Ball Speed Tracking</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Records rallies using iPhone's camera</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Tracks ball movement frame-by-frame</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Calculates average and maximum speeds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Provides shot-by-shot breakdowns</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-8 transition-all hover:shadow-lg">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Map className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Shot Placement Heatmaps</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Estimates where shots land on the table</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Generates interactive heatmaps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Identifies patterns and inconsistencies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Visualizes your strengths and weaknesses</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-xl p-8 transition-all hover:shadow-lg">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Session Summaries</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Visual breakdown after each session</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Total shots and speed statistics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Heatmap visualization of your game</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Save sessions to track progress over time</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                PongPulse is designed to be simple and effective, with no special hardware required.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Smartphone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Set Up Your Phone</h3>
                <p className="text-muted-foreground">
                  Position your iPhone at a consistent angle with a clear view of the table.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Activity className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Record Your Rally</h3>
                <p className="text-muted-foreground">
                  Start recording in the app and play your normal game. The app works with any standard table tennis
                  ball.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Get Insights</h3>
                <p className="text-muted-foreground">
                  Review your session summary with speed stats, shot placement, and actionable insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* App Preview Section */}
        <section className="py-20 bg-blue-50">
          <div className="container">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-6">Lightweight Setup, Powerful Results</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    PongPulse requires no proprietary equipment or special balls. Just your iPhone, a ping pong table,
                    and a consistent recording angle.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">No special hardware</span>
                        <p className="text-sm text-muted-foreground">Works with your existing equipment</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Standard balls</span>
                        <p className="text-sm text-muted-foreground">No need for special patterned balls</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Simple setup</span>
                        <p className="text-sm text-muted-foreground">Ready to use in under a minute</p>
                      </div>
                    </li>
                  </ul>
                  <Button size="lg" className="w-fit">
                    Get Started
                  </Button>
                </div>
                <div className="relative">
                  <Image
                    src="/app-in-use.png"
                    alt="PongPulse App In Use"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section id="coming-soon" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Coming Soon</h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                We're constantly improving PongPulse with new features to help you take your game to the next level.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-blue-100 rounded-xl p-8 transition-all hover:border-blue-300 hover:shadow-md">
                <h3 className="text-xl font-bold mb-3">Spin Tracking</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced vision models to detect and analyze ball spin using patterned balls.
                </p>
                <div className="text-sm text-blue-600 font-medium">Coming Q3 2025</div>
              </div>

              <div className="border border-blue-100 rounded-xl p-8 transition-all hover:border-blue-300 hover:shadow-md">
                <h3 className="text-xl font-bold mb-3">AI-Powered Coaching</h3>
                <p className="text-muted-foreground mb-4">
                  Get personalized drill suggestions based on your weak zones and improvement areas.
                </p>
                <div className="text-sm text-blue-600 font-medium">Coming Q4 2025</div>
              </div>

              <div className="border border-blue-100 rounded-xl p-8 transition-all hover:border-blue-300 hover:shadow-md">
                <h3 className="text-xl font-bold mb-3">Team Dashboards</h3>
                <p className="text-muted-foreground mb-4">
                  Special features for club coaches and training academies to track multiple players.
                </p>
                <div className="text-sm text-blue-600 font-medium">Coming Q1 2026</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-blue-600 to-blue-800 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stop Guessing, Start Improving</h2>
            <p className="text-xl max-w-[800px] mx-auto mb-8 opacity-90">
              Join thousands of table tennis players who are using data to take their game to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2">
                <Download className="h-5 w-5" />
                Download on iOS
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="PongPulse Logo" width={32} height={32} className="rounded-md" />
              <span className="font-bold">PongPulse</span>
            </div>
            <div className="flex gap-8">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Contact Us
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">© 2025 PongPulse. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
