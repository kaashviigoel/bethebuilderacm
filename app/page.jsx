"use client"

import { useState, useEffect } from "react"
import useSWR from "swr"
import { WeatherSearch } from "@/components/weather-search"
import { WeatherCard } from "@/components/weather-card"
import { ActivitySuggestions } from "@/components/activity-suggestions"
import { CloudSunIcon, SunIcon, CloudIcon, MoonIcon, StarIcon } from "@/components/weather-icons"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function WeatherApp() {
  const [city, setCity] = useState(null)
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }
    checkTheme()
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  const { data, error, isLoading } = useSWR(
    city ? `/api/weather?city=${encodeURIComponent(city)}` : null,
    fetcher
  )

  const handleSearch = (searchCity) => {
    setCity(searchCity)
  }

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-4 sm:p-8">
      <ThemeToggle />
      
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        {isDark ? (
          <>
            {/* Dark theme background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/80 to-slate-950 animate-gradient" />
            <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-fuchsia-600/20 to-pink-600/10 rounded-full blur-3xl animate-float-slow" />
            <div className="absolute top-1/4 right-10 w-96 h-96 bg-gradient-to-br from-violet-600/15 to-purple-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
            <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-600/15 to-blue-600/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />
            <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-gradient-to-br from-pink-600/15 to-rose-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "0.5s" }} />
            {/* Stars */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute top-[15%] left-[20%] w-1 h-1 bg-white rounded-full animate-pulse" />
              <div className="absolute top-[25%] right-[30%] w-0.5 h-0.5 bg-white/80 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="absolute top-[10%] right-[15%] w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
              <div className="absolute top-[40%] left-[10%] w-0.5 h-0.5 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />
              <div className="absolute bottom-[30%] right-[20%] w-1 h-1 bg-white/80 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
            </div>
          </>
        ) : (
          <>
            {/* Light theme - bubblegum pink/purple */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-fuchsia-50 to-violet-100 animate-gradient" />
            <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-pink-300/40 to-fuchsia-300/30 rounded-full blur-3xl animate-float-slow" />
            <div className="absolute top-1/4 right-10 w-96 h-96 bg-gradient-to-br from-violet-300/30 to-purple-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
            <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-fuchsia-300/30 to-pink-300/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />
            <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-gradient-to-br from-rose-300/30 to-pink-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "0.5s" }} />
          </>
        )}
      </div>

      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
        {isDark ? (
          <>
            <div className="absolute top-20 left-[15%] opacity-20">
              <MoonIcon className="size-12 text-violet-300 animate-float" />
            </div>
            <div className="absolute top-32 right-[20%] opacity-15">
              <StarIcon className="size-8 text-pink-300 animate-float-slow" style={{ animationDelay: "1s" }} />
            </div>
            <div className="absolute bottom-40 left-[10%] opacity-15">
              <CloudIcon className="size-16 text-indigo-300 animate-float" style={{ animationDelay: "2s" }} />
            </div>
            <div className="absolute top-1/2 right-[8%] opacity-10">
              <StarIcon className="size-6 text-fuchsia-300 animate-float-slow" style={{ animationDelay: "0.5s" }} />
            </div>
          </>
        ) : (
          <>
            <div className="absolute top-20 left-[15%] opacity-30">
              <SunIcon className="size-12 text-pink-400 animate-float" />
            </div>
            <div className="absolute top-32 right-[20%] opacity-25">
              <CloudIcon className="size-10 text-violet-400 animate-float-slow" style={{ animationDelay: "1s" }} />
            </div>
            <div className="absolute bottom-40 left-[10%] opacity-20">
              <CloudSunIcon className="size-14 text-fuchsia-400 animate-float" style={{ animationDelay: "2s" }} />
            </div>
            <div className="absolute top-1/2 right-[8%] opacity-20">
              <StarIcon className="size-8 text-pink-400 animate-float-slow" style={{ animationDelay: "0.5s" }} />
            </div>
          </>
        )}
      </div>

      {/* Header */}
      <div className="text-center mb-6 relative">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="relative">
            <div className={cn(
              "absolute inset-0 blur-xl rounded-full scale-150 animate-pulse",
              isDark ? "bg-pink-500/30" : "bg-pink-400/40"
            )} />
            {isDark ? (
              <MoonIcon className="relative size-7 text-violet-300 animate-float" />
            ) : (
              <SunIcon className="relative size-7 text-pink-500 animate-float" />
            )}
          </div>
          <h1 className={cn(
            "font-serif text-3xl bg-clip-text text-transparent tracking-tight",
            isDark 
              ? "bg-gradient-to-r from-pink-300 via-violet-300 to-indigo-300" 
              : "bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500"
          )}>
            weather
          </h1>
        </div>
        <p className={cn(
          "text-xs tracking-wide",
          isDark ? "text-violet-300/70" : "text-fuchsia-500/70"
        )}>its giving meteorologist</p>
      </div>

      {/* Search */}
      <WeatherSearch onSearch={handleSearch} isLoading={isLoading} isDark={isDark} />

      {/* Weather Display */}
      <div className="mt-6 w-full max-w-sm relative">
        {isLoading && (
          <div className={cn(
            "p-6 rounded-2xl text-center relative overflow-hidden",
            "backdrop-blur-xl border",
            isDark 
              ? "bg-white/5 border-white/10 shadow-purple-500/10" 
              : "bg-white/60 border-pink-200/50 shadow-pink-300/20",
            "shadow-lg"
          )}>
            <div className="flex items-center justify-center gap-3">
              <div className={cn(
                "animate-spin rounded-full h-6 w-6 border-2 border-t-transparent",
                isDark ? "border-pink-400" : "border-pink-500"
              )} />
              <p className={cn(
                "text-sm",
                isDark ? "text-violet-300/70" : "text-fuchsia-500/70"
              )}>checking the vibes...</p>
            </div>
          </div>
        )}

        {error && (
          <div className={cn(
            "p-4 rounded-2xl text-center backdrop-blur-xl border shadow-lg",
            isDark 
              ? "bg-red-500/10 border-red-500/20 shadow-red-500/10" 
              : "bg-red-100/80 border-red-200 shadow-red-200/30"
          )}>
            <p className={cn(
              "text-sm",
              isDark ? "text-red-300" : "text-red-500"
            )}>not it bestie. city not found</p>
          </div>
        )}

        {data && !isLoading && (
          <>
            <WeatherCard data={data} isDark={isDark} />
            <ActivitySuggestions 
              condition={data.condition} 
              temperature={data.temperature} 
              isDark={isDark} 
            />
          </>
        )}

        {!city && !isLoading && (
          <div className={cn(
            "group p-6 rounded-2xl text-center relative overflow-hidden cursor-default",
            "backdrop-blur-xl border shadow-lg",
            isDark 
              ? "bg-white/5 border-white/10 shadow-purple-500/10" 
              : "bg-white/60 border-pink-200/50 shadow-pink-300/20",
            "transition-all duration-300"
          )}>
            <div className="relative flex items-center justify-center gap-3">
              <CloudSunIcon className={cn(
                "size-10 animate-float",
                isDark ? "text-violet-400" : "text-pink-500"
              )} />
              <p className={cn(
                "text-sm",
                isDark ? "text-violet-300/70" : "text-fuchsia-500/70"
              )}>
                search a city to unlock the vibe check
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-auto pt-6 pb-4">
        <p className={cn(
          "text-[10px] tracking-wider",
          isDark ? "text-violet-400/40" : "text-fuchsia-400/60"
        )}>
          no cap, just weather
        </p>
      </footer>
    </main>
  )
}
