"use client"

import { cn } from "@/lib/utils"

// Activity icons as simple components
function CoffeeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" x2="6" y1="2" y2="4" />
      <line x1="10" x2="10" y1="2" y2="4" />
      <line x1="14" x2="14" y1="2" y2="4" />
    </svg>
  )
}

function BookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}

function BikeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18.5" cy="17.5" r="3.5" />
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="15" cy="5" r="1" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </svg>
  )
}

function SunglassesIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="15" r="4" />
      <circle cx="18" cy="15" r="4" />
      <path d="M14 15a2 2 0 0 0-4 0" />
      <path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2" />
      <path d="M21.5 13 19 7c-.7-1.3-1.4-2-3-2" />
    </svg>
  )
}

function UmbrellaIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12a10.06 10.06 1 0 0-20 0Z" />
      <path d="M12 12v8a2 2 0 0 0 4 0" />
      <path d="M12 2v1" />
    </svg>
  )
}

function MovieIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m9 8 6 4-6 4Z" />
    </svg>
  )
}

function MusicIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}

function CameraIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}

function SnowflakeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="m20 16-4-4 4-4" />
      <path d="m4 8 4 4-4 4" />
      <path d="m16 4-4 4-4-4" />
      <path d="m8 20 4-4 4 4" />
    </svg>
  )
}

function CocoaIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <path d="M6 12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2" />
    </svg>
  )
}

function PicnicIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 14h18" />
      <path d="M5 14v6" />
      <path d="M19 14v6" />
      <path d="M12 3v4" />
      <path d="m8 7 4 7 4-7" />
    </svg>
  )
}

function GamingIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  )
}

const activityData = {
  sunny: {
    title: "golden hour activities",
    subtitle: "touch grass responsibly",
    activities: [
      { icon: BikeIcon, name: "bike ride", vibe: "main character energy", color: "from-amber-400 to-orange-400" },
      { icon: CameraIcon, name: "golden hour pics", vibe: "instagram worthy", color: "from-pink-400 to-rose-400" },
      { icon: SunglassesIcon, name: "beach day", vibe: "vitamin sea", color: "from-cyan-400 to-blue-400" },
      { icon: PicnicIcon, name: "picnic date", vibe: "romanticize it", color: "from-green-400 to-emerald-400" },
    ]
  },
  cloudy: {
    title: "cozy cloud activities",
    subtitle: "embrace the aesthetic",
    activities: [
      { icon: CoffeeIcon, name: "cafe hopping", vibe: "latte art pics", color: "from-amber-400 to-yellow-400" },
      { icon: BookIcon, name: "reading era", vibe: "dark academia", color: "from-violet-400 to-purple-400" },
      { icon: CameraIcon, name: "moody photoshoot", vibe: "pinterest vibes", color: "from-slate-400 to-gray-400" },
      { icon: MusicIcon, name: "playlist curation", vibe: "sad girl autumn", color: "from-indigo-400 to-blue-400" },
    ]
  },
  rainy: {
    title: "cozy rain activities",
    subtitle: "romanticize the rain",
    activities: [
      { icon: MovieIcon, name: "movie marathon", vibe: "comfort film era", color: "from-red-400 to-pink-400" },
      { icon: CoffeeIcon, name: "rain + coffee", vibe: "main character moment", color: "from-amber-400 to-orange-400" },
      { icon: BookIcon, name: "journaling", vibe: "emotional dump", color: "from-purple-400 to-violet-400" },
      { icon: GamingIcon, name: "gaming sesh", vibe: "no touch grass", color: "from-green-400 to-teal-400" },
    ]
  },
  snowy: {
    title: "winter wonderland activities",
    subtitle: "snowflake behavior",
    activities: [
      { icon: CocoaIcon, name: "hot cocoa", vibe: "cozy szn", color: "from-amber-400 to-yellow-400" },
      { icon: SnowflakeIcon, name: "snowball fight", vibe: "chaotic energy", color: "from-sky-400 to-blue-400" },
      { icon: MovieIcon, name: "holiday movies", vibe: "tis the season", color: "from-red-400 to-green-400" },
      { icon: CameraIcon, name: "snow pics", vibe: "winter arc", color: "from-violet-400 to-indigo-400" },
    ]
  },
  default: {
    title: "spontaneous activities",
    subtitle: "no plan is also a plan",
    activities: [
      { icon: MusicIcon, name: "concert vibes", vibe: "live music era", color: "from-pink-400 to-fuchsia-400" },
      { icon: CoffeeIcon, name: "boba run", vibe: "slay the day", color: "from-purple-400 to-pink-400" },
      { icon: BikeIcon, name: "explore", vibe: "wanderlust", color: "from-teal-400 to-cyan-400" },
      { icon: BookIcon, name: "self care", vibe: "healing arc", color: "from-rose-400 to-pink-400" },
    ]
  }
}

const getActivityType = (condition, temperature) => {
  const c = condition.toLowerCase()
  if (c.includes("snow") || temperature <= 0) return "snowy"
  if (c.includes("rain") || c.includes("drizzle") || c.includes("thunder")) return "rainy"
  if (c.includes("cloud") || c.includes("overcast")) return "cloudy"
  if (c.includes("sunny") || c.includes("clear") || temperature >= 20) return "sunny"
  return "default"
}

export function ActivitySuggestions({ condition, temperature, isDark }) {
  const activityType = getActivityType(condition, temperature)
  const { title, activities } = activityData[activityType]

  return (
    <div className="w-full mt-3 animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: "100ms" }}>
      <div className="relative">
        <div className={cn(
          "absolute -inset-0.5 rounded-2xl opacity-40 blur-sm",
          isDark 
            ? "bg-gradient-to-br from-pink-500/30 via-violet-500/20 to-indigo-500/30" 
            : "bg-gradient-to-br from-pink-400/40 via-fuchsia-300/30 to-violet-400/40"
        )} />
        
        <div className={cn(
          "relative p-3 rounded-2xl overflow-hidden backdrop-blur-xl border",
          isDark 
            ? "bg-white/5 border-white/10 shadow-lg shadow-purple-500/10" 
            : "bg-white/60 border-pink-200/50 shadow-lg shadow-pink-200/20"
        )}>
          <div className={cn("absolute inset-0", isDark ? "bg-black/10" : "bg-white/20")} />
          
          {/* Header */}
          <div className="relative flex items-center justify-between mb-2">
            <h3 className={cn(
              "font-serif text-sm tracking-tight",
              isDark ? "text-white" : "text-fuchsia-900"
            )}>{title}</h3>
            <p className={cn(
              "text-[9px] tracking-widest",
              isDark ? "text-violet-400/40" : "text-fuchsia-400/50"
            )}>live laugh weather</p>
          </div>

          {/* Compact Activity Row */}
          <div className="relative flex gap-2">
            {activities.map((activity) => (
              <div
                key={activity.name}
                className={cn(
                  "group/activity flex-1 relative p-2 rounded-xl overflow-hidden",
                  "border transition-all duration-300 cursor-pointer",
                  isDark 
                    ? "bg-white/5 border-white/10 hover:bg-white/10" 
                    : "bg-white/50 border-pink-200/50 hover:bg-white/80"
                )}
              >
                <div className="relative flex flex-col items-center text-center">
                  <activity.icon className={cn(
                    "size-4 mb-1 transition-transform duration-300 group-hover/activity:scale-110",
                    isDark ? "text-violet-300" : "text-fuchsia-500"
                  )} />
                  <span className={cn(
                    "text-[10px] font-medium leading-tight",
                    isDark ? "text-white" : "text-fuchsia-900"
                  )}>{activity.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
