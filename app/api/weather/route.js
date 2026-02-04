import { NextResponse } from "next/server"

// Mock weather data generator for demo purposes
function generateMockWeather(city) {
  const conditions = ["Clear", "Partly Cloudy", "Cloudy", "Rainy", "Sunny"]
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
  
  const baseTemp = Math.floor(Math.random() * 25) + 5
  const condition = conditions[Math.floor(Math.random() * conditions.length)]
  
  return {
    city: city.charAt(0).toUpperCase() + city.slice(1).toLowerCase(),
    country: getCountryForCity(city),
    temperature: baseTemp,
    condition,
    humidity: Math.floor(Math.random() * 40) + 40,
    windSpeed: Math.floor(Math.random() * 20) + 5,
    feelsLike: baseTemp + Math.floor(Math.random() * 5) - 2,
    forecast: days.map((day) => ({
      day,
      high: baseTemp + Math.floor(Math.random() * 5),
      low: baseTemp - Math.floor(Math.random() * 8),
      condition: conditions[Math.floor(Math.random() * conditions.length)],
    })),
  }
}

function getCountryForCity(city) {
  const cityCountryMap = {
    london: "United Kingdom",
    tokyo: "Japan",
    "new york": "United States",
    paris: "France",
    sydney: "Australia",
    berlin: "Germany",
    madrid: "Spain",
    rome: "Italy",
    dubai: "UAE",
    singapore: "Singapore",
    mumbai: "India",
    toronto: "Canada",
    moscow: "Russia",
    beijing: "China",
    seoul: "South Korea",
  }
  
  return cityCountryMap[city.toLowerCase()] || "World"
}

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const city = searchParams.get("city")
  
  if (!city) {
    return NextResponse.json(
      { error: "City parameter is required" },
      { status: 400 }
    )
  }

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  
  const weatherData = generateMockWeather(city)
  
  return NextResponse.json(weatherData)
}
