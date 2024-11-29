"use client";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/LoginButton";
import { Newspaper, Code, Mail } from "lucide-react";
import { ModeToggle } from "@/components/theme-toggle";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <>
      <main className="flex h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-purple-400 to-violet-700 dark:from-purple-500 dark:to-violet-900">
        {/* Top Navigation Section */}
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>

        {/* Header Section */}
        <div className="space-y-6 text-center">
          <h1 className="text-4xl font-bold text-white dark:text-white">
            Sebastian's Coding Newsletter
          </h1>
          <p className="text-lg text-gray-300 dark:text-gray-100">
            <span>Stay updated with </span>
            <span className="font-semibold text-yellow-300 dark:text-yellow-400">
              <Typewriter
                words={[
                  "coding tips ✍️",
                  "in-depth tutorials 💡",
                  "industry insights 🌐",
                  "exclusive challenges 🔥",
                ]}
                loop={0}
                cursor
                cursorStyle=" "
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={1500}
              />
            </span>
          </p>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-8 space-x-4">
          <LoginButton mode="redirect" asChild>
            <Button variant="default" size="lg" className="px-6">
              Sign In
            </Button>
          </LoginButton>
          <Button variant="outline" size="lg" className="px-6">
            Learn More
          </Button>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-8 px-4 sm:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <Newspaper className="h-10 w-10 text-blue-500 dark:text-blue-400" />
            <h3 className="mt-4 text-xl font-semibold text-gray-300 dark:text-white">
              Weekly Newsletters
            </h3>
            <p className="text-gray-300 dark:text-white">
              Get curated coding content every week, tailored to your learning
              journey.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Code className="h-10 w-10 text-green-500 dark:text-green-400" />
            <h3 className="mt-4 text-xl font-semibold text-gray-300 dark:text-white">
              Exclusive Tutorials
            </h3>
            <p className="text-gray-300 dark:text-white">
              Access in-depth tutorials and challenges to level up your coding
              skills.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Mail className="h-10 w-10 text-red-500 dark:text-red-400" />
            <h3 className="mt-4 text-xl font-semibold text-gray-300 dark:text-white">
              Direct to Your Inbox
            </h3>
            <p className="text-gray-300 dark:text-white">
              No clutter—just the content you care about, sent right to you.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
