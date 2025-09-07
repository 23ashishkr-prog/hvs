"use client"
import { Button } from "@/components/ui/button"
import { Newspaper, Palette, Leaf, Users } from "lucide-react"
import { useEffect, useRef } from "react"

export default function Newsroom() {
  const heroRef = useRef<HTMLDivElement>(null)
  const categoriesRef = useRef<HTMLDivElement>(null)
  const newsletterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    const refs = [heroRef, categoriesRef, newsletterRef]
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  const newsCategories = [
    {
      icon: Newspaper,
      title: "Latest Fashion News",
      description: "New launches, collaborations & global trends.",
    },
    {
      icon: Palette,
      title: "Design Inspiration",
      description: "Behind-the-scenes of our creative process.",
    },
    {
      icon: Leaf,
      title: "Sustainable Clothing Updates",
      description: "Our journey in eco-friendly fashion manufacturing.",
    },
    {
      icon: Users,
      title: "Client Features",
      description: "Stories of brands we've partnered with.",
    },
  ]

  return (
    <div className="bg-stone-100 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-stone-300/30 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-emerald-100/25 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-stone-200/40 rounded-full animate-float"></div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden opacity-0">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800/20 transform rotate-45 translate-x-48 -translate-y-48 rounded-3xl transition-transform duration-1000 hover:rotate-12 hover:scale-110"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-emerald-900 to-emerald-700 bg-clip-text text-transparent leading-none mb-8 text-balance">
                Newsroom
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl text-pretty">
                Your go-to hub for luxury fashion trends, sustainable clothing updates, new launches, and client
                stories.
              </p>
            </div>
            <div className="relative">
              <div
                className="w-full h-[500px] bg-cover bg-center transition-transform duration-700 hover:scale-105 hover:shadow-2xl"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80')",
                  clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 85%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* News Categories */}
      <section ref={categoriesRef} className="py-20 bg-white opacity-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-900 to-emerald-700 bg-clip-text text-transparent mb-4">
              Fashion Updates & Insights
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newsCategories.map((category, index) => (
              <div
                key={index}
                className="bg-stone-100 p-8 rounded-3xl text-center group transform transition-all duration-500 hover:scale-105 hover:bg-white hover:shadow-xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-emerald-700 group-hover:scale-110 group-hover:shadow-lg">
                  <category.icon className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-4 transition-colors duration-300 group-hover:text-emerald-700">
                  {category.title}
                </h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section ref={newsletterRef} className="py-20 bg-emerald-900 relative overflow-hidden opacity-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 to-emerald-900"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-700/30 rounded-full transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-800/20 rounded-full transform -translate-x-48 translate-y-48"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance drop-shadow-lg">Stay Updated with Orrmira</h2>
          <p className="text-xl text-white/90 mb-8 text-pretty drop-shadow">
            Subscribe to get the latest fashion insights, industry updates, and exclusive content.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border-0 focus:ring-2 focus:ring-white/50 text-gray-900 transition-all duration-300 focus:scale-105 focus:shadow-lg"
            />
            <Button className="bg-white text-emerald-800 hover:bg-emerald-50 hover:scale-105 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
