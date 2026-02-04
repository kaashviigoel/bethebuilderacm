"use client"

import { useState, useEffect } from "react"
import { MoonIcon, SunIcon } from "./weather-icons"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("theme")
    if (stored === "light") {
      setIsDark(false)
      document.documentElement.classList.remove("dark")
    } else {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDark(false)
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDark(true)
    }
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-6 right-6 z-50",
        "p-3 rounded-full",
        "backdrop-blur-xl border",
        isDark 
          ? "bg-white/10 border-white/20 text-violet-300 hover:text-pink-300 hover:border-pink-500/30" 
          : "bg-white/60 border-pink-200 text-pink-500 hover:text-violet-500 hover:border-violet-300",
        "shadow-lg",
        isDark ? "shadow-purple-500/20" : "shadow-pink-300/30",
        "hover:scale-110 active:scale-95",
        "transition-all duration-300"
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative">
        <div className={cn(
          "absolute inset-0 rounded-full blur-lg transition-colors duration-300",
          isDark ? "bg-violet-500/30" : "bg-pink-400/30"
        )} />
        {isDark ? (
          <SunIcon className="relative size-5" />
        ) : (
          <MoonIcon className="relative size-5" />
        )}
      </div>
    </button>
  )
}
