"use client"

import { getWeatherIcon, DropletIcon, WindIcon, ThermometerIcon } from "./weather-icons"
import { cn } from "@/lib/utils"

export function WeatherCard({ data, isDark }) {
  const getWeatherGradient = (condition) => {
    const c = condition.toLowerCase()
    if (isDark) {
      if (c.includes("sunny") || c.includes("clear")) return "from-amber-500/20 via-orange-500/10 to-pink-500/20"
      if (c.includes("cloud")) return "from-slate-500/20 via-violet-500/10 to-indigo-500/20"
      if (c.includes("rain")) return "from-blue-500/20 via-indigo-500/10 to-violet-500/20"
      if (c.includes("snow")) return "from-sky-400/20 via-white/10 to-blue-400/20"
      return "from-pink-500/20 via-violet-500/10 to-indigo-500/20"
    } else {
      if (c.includes("sunny") || c.includes("clear")) return "from-amber-200/60 via-orange-100/40 to-pink-200/60"
      if (c.includes("cloud")) return "from-slate-200/60 via-violet-100/40 to-indigo-200/60"
      if (c.includes("rain")) return "from-blue-200/60 via-indigo-100/40 to-violet-200/60"
      if (c.includes("snow")) return "from-sky-100/60 via-white/40 to-blue-100/60"
      return "from-pink-200/60 via-fuchsia-100/40 to-violet-200/60"
    }
  }

  const getWeatherVibe = (condition) => {
    const c = condition.toLowerCase()
    if (c.includes("sunny") || c.includes("clear")) return "hot girl summer"
    if (c.includes("cloud")) return "cottagecore"
    if (c.includes("rain")) return "sad girl autumn"
    if (c.includes("snow")) return "winter arc"
    return "main character"
  }

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Main Weather Display */}
      <div className="relative group">
        <div className={cn(
          "absolute -inset-0.5 rounded-2xl opacity-60 blur-sm",
          isDark 
            ? "bg-gradient-to-br from-pink-500/30 via-violet-500/20 to-indigo-500/30" 
            : "bg-gradient-to-br from-pink-400/40 via-fuchsia-300/30 to-violet-400/40"
        )} />
        
        <div className={cn(
          "relative p-4 rounded-2xl overflow-hidden bg-gradient-to-br",
          getWeatherGradient(data.condition),
          "backdrop-blur-xl border",
          isDark 
            ? "border-white/10 shadow-lg shadow-purple-500/20" 
            : "border-pink-200/50 shadow-lg shadow-pink-300/30"
        )}>
          <div className={cn("absolute inset-0", isDark ? "bg-black/20" : "bg-white/30")} />
          
          <div className="relative">
            {/* Top row: Location + Vibe tag */}
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className={cn(
                  "font-serif text-lg tracking-tight",
                  isDark ? "text-white" : "text-fuchsia-900"
                )}>{data.city}</h2>
                <p className={cn(
                  "text-[10px] tracking-wider uppercase",
                  isDark ? "text-violet-300/60" : "text-fuchsia-500/60"
                )}>{data.country}</p>
              </div>
              <span className={cn(
                "px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide border",
                isDark 
                  ? "bg-white/10 text-pink-300 border-pink-500/20" 
                  : "bg-pink-100/80 text-pink-600 border-pink-300/50"
              )}>
                {getWeatherVibe(data.condition)}
              </span>
            </div>

            {/* Main weather row */}
            <div className="flex items-center gap-4 mb-3">
              <div className="relative flex-shrink-0">
                <div className={cn(
                  "absolute inset-0 blur-xl rounded-full scale-150",
                  isDark ? "bg-pink-500/30" : "bg-pink-400/40"
                )} />
                <div className={cn(
                  "relative animate-float",
                  isDark ? "text-white" : "text-fuchsia-600"
                )}>
                  {getWeatherIcon(data.condition, "size-14")}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-baseline gap-1">
                  <span className={cn(
                    "font-serif text-5xl bg-clip-text text-transparent leading-none",
                    isDark 
                      ? "bg-gradient-to-b from-white to-violet-200" 
                      : "bg-gradient-to-b from-fuchsia-600 to-pink-500"
                  )}>
                    {data.temperature}
                  </span>
                  <span className={cn("text-xl", isDark ? "text-pink-400" : "text-pink-500")}>°</span>
                </div>
                <p className={cn(
                  "capitalize text-xs tracking-wide",
                  isDark ? "text-violet-300/70" : "text-fuchsia-500/70"
                )}>{data.condition}</p>
              </div>

              {/* Compact stats */}
              <div className="flex flex-col gap-1.5 text-[10px]">
                {[
                  { icon: ThermometerIcon, value: `${data.feelsLike}°`, color: isDark ? "text-pink-400" : "text-pink-500" },
                  { icon: DropletIcon, value: `${data.humidity}%`, color: isDark ? "text-sky-400" : "text-sky-500" },
                  { icon: WindIcon, value: `${data.windSpeed}`, color: isDark ? "text-violet-400" : "text-violet-500" },
                ].map((item) => (
                  <div key={item.value} className="flex items-center gap-1.5">
                    <item.icon className={cn("size-3", item.color)} />
                    <span className={cn(isDark ? "text-white/80" : "text-fuchsia-800")}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inline Forecast */}
            <div className={cn(
              "flex justify-between pt-3 border-t",
              isDark ? "border-white/10" : "border-pink-200/50"
            )}>
              {data.forecast.map((day) => (
                <div key={day.day} className="flex flex-col items-center">
                  <span className={cn(
                    "text-[9px] mb-1 font-medium tracking-wide",
                    isDark ? "text-violet-400/60" : "text-fuchsia-400/70"
                  )}>{day.day}</span>
                  <div className={cn(
                    "mb-1",
                    isDark ? "text-violet-300" : "text-fuchsia-500"
                  )}>
                    {getWeatherIcon(day.condition, "size-4")}
                  </div>
                  <div className="flex gap-1 text-[10px]">
                    <span className={cn("font-medium", isDark ? "text-white" : "text-fuchsia-900")}>{day.high}°</span>
                    <span className={cn(isDark ? "text-violet-400/50" : "text-fuchsia-400/60")}>{day.low}°</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
