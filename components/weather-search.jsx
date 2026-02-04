"use client"

import { useState } from "react"
import { SearchIcon, MapPinIcon } from "./weather-icons"
import { cn } from "@/lib/utils"

export function WeatherSearch({ onSearch, isLoading, isDark }) {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query.trim())
    }
  }

  const popularCities = [
    { name: "Paris", vibe: "that girl era" },
    { name: "Tokyo", vibe: "anime core" },
    { name: "London", vibe: "dark academia" },
    { name: "NYC", vibe: "it girl energy" },
  ]

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="relative group">
        {/* Glow effect behind input */}
        <div className={cn(
          "absolute -inset-2 rounded-full opacity-0 blur-2xl transition-all duration-700",
          isDark 
            ? "bg-gradient-to-r from-pink-500/30 via-violet-500/30 to-indigo-500/30" 
            : "bg-gradient-to-r from-pink-400/40 via-fuchsia-400/40 to-violet-400/40",
          isFocused && "opacity-100"
        )} />
        
        <div className="relative">
          <div className={cn(
            "absolute left-5 top-1/2 -translate-y-1/2 transition-colors duration-300",
            isFocused 
              ? (isDark ? "text-pink-400" : "text-pink-500") 
              : (isDark ? "text-violet-400/60" : "text-fuchsia-400/60")
          )}>
            <MapPinIcon className="size-5" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="where we going bestie?"
            className={cn(
              "w-full py-4 pl-14 pr-14 rounded-full",
              "backdrop-blur-xl border-2",
              isDark 
                ? "bg-white/5 border-white/10 text-violet-100 placeholder:text-violet-400/50 focus:border-pink-500/40 focus:bg-white/10" 
                : "bg-white/70 border-pink-200/60 text-fuchsia-900 placeholder:text-fuchsia-400/60 focus:border-fuchsia-400 focus:bg-white/90",
              "focus:outline-none",
              "transition-all duration-300",
              isDark ? "shadow-2xl shadow-purple-500/10" : "shadow-xl shadow-pink-200/30",
              "text-center font-medium"
            )}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !query.trim()}
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2",
              "p-3 rounded-full",
              isDark 
                ? "bg-gradient-to-br from-pink-500 to-violet-500 shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50" 
                : "bg-gradient-to-br from-pink-500 to-fuchsia-500 shadow-lg shadow-pink-300/40 hover:shadow-pink-400/60",
              "text-white hover:scale-105",
              "active:scale-95",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
              "transition-all duration-200"
            )}
          >
            <SearchIcon className="size-4" />
          </button>
        </div>
      </form>
      
      {/* City chips with vibes */}
      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        {popularCities.map((city, index) => (
          <button
            key={city.name}
            onClick={() => onSearch(city.name)}
            disabled={isLoading}
            style={{ animationDelay: `${index * 80}ms` }}
            className={cn(
              "group/chip relative px-5 py-2.5 text-sm rounded-full overflow-hidden",
              "backdrop-blur-sm border",
              isDark 
                ? "bg-white/5 border-white/10 text-violet-200 hover:text-pink-300 hover:border-pink-500/30 hover:bg-white/10 shadow-lg shadow-purple-500/5 hover:shadow-pink-500/20" 
                : "bg-white/60 border-pink-200/60 text-fuchsia-600 hover:text-pink-600 hover:border-fuchsia-400 hover:bg-white/80 shadow-md shadow-pink-200/20 hover:shadow-pink-300/40",
              "disabled:opacity-50",
              "transition-all duration-300",
              "animate-in fade-in slide-in-from-bottom-2"
            )}
          >
            {/* Shimmer effect on hover */}
            <div className={cn(
              "absolute inset-0 -translate-x-full group-hover/chip:translate-x-full transition-transform duration-700",
              isDark 
                ? "bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" 
                : "bg-gradient-to-r from-transparent via-fuchsia-300/40 to-transparent"
            )} />
            <span className="relative flex flex-col items-center">
              <span className="font-medium">{city.name}</span>
              <span className={cn(
                "text-[10px] transition-colors",
                isDark 
                  ? "text-violet-400/60 group-hover/chip:text-pink-400/80" 
                  : "text-fuchsia-400/70 group-hover/chip:text-pink-500"
              )}>{city.vibe}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
