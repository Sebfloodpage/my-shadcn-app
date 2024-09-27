'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Brain, Clock, BarChart, Award } from "lucide-react"
import Link from "next/link"

export function SatPrepAiTutor() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="#">
          <Brain className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
          <span className="ml-2 text-2xl font-bold text-gray-900 dark:text-white">SAT Ace</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                  Ace Your SAT with AI-Powered Prep
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-400">
                  Personalized SAT tutoring powered by cutting-edge AI. Boost your scores and confidence with adaptive learning tailored just for you.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Start Free Trial</Button>
                <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-100 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Why Choose SAT Ace?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border border-indigo-200 dark:border-indigo-800 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
                <Clock className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-2" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">24/7 Availability</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">Study anytime, anywhere with our always-available AI tutor.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-indigo-200 dark:border-indigo-800 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
                <BookOpen className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-2" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Personalized Learning</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">Adaptive SAT prep tailored to your unique strengths and weaknesses.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-indigo-200 dark:border-indigo-800 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
                <BarChart className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-2" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Progress Tracking</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">Monitor your improvement with detailed analytics and insights.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Success Stories
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border border-indigo-200 dark:border-indigo-800 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
                <Award className="h-12 w-12 text-yellow-500 mb-2" />
                <p className="text-gray-600 dark:text-gray-400">&quot;SAT Ace helped me improve my score by 200 points! The personalized practice was key to my success.&quot;</p>
                <p className="font-semibold text-indigo-600 dark:text-indigo-400">- Alex K., Score: 1520</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-indigo-200 dark:border-indigo-800 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
                <Award className="h-12 w-12 text-yellow-500 mb-2" />
                <p className="text-gray-600 dark:text-gray-400">&quot;The AI tutor identified my weak areas and focused my study time efficiently. My math score jumped 100 points!&quot;</p>
                <p className="font-semibold text-indigo-600 dark:text-indigo-400">- Samantha L., Score: 1480</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-indigo-200 dark:border-indigo-800 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
                <Award className="h-12 w-12 text-yellow-500 mb-2" />
                <p className="text-gray-600 dark:text-gray-400">&quot;SAT Ace&apos;s adaptive questions challenged me at just the right level. I felt so prepared on test day!&quot;</p>
                <p className="font-semibold text-indigo-600 dark:text-indigo-400">- Ryan M., Score: 1550</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-600 dark:bg-indigo-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Boost Your SAT Score?
                </h2>
                <p className="mx-auto max-w-[700px] text-indigo-100 md:text-xl">
                  Join thousands of students who are already on their way to SAT success. Start your personalized prep today!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-white dark:bg-gray-800" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="bg-white text-indigo-600 hover:bg-indigo-100 dark:bg-gray-800 dark:text-indigo-400 dark:hover:bg-gray-700">
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-indigo-100">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2 hover:text-white" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white dark:bg-gray-800">
        <p className="text-xs text-gray-600 dark:text-gray-400">© 2024 SAT Ace. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-600 dark:text-gray-400" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-600 dark:text-gray-400" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}