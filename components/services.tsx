"use client"
import { Button } from "@/components/ui/button"
import { Shirt, Users, Building, ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"

interface ServicesProps {
  onNavigate?: (page: string) => void
}

export default function Services({ onNavigate }: ServicesProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const corporateRef = useRef<HTMLDivElement>(null)
  const detailsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

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

    const refs = [heroRef, servicesRef, corporateRef, detailsRef, ctaRef]
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page)
    }
  }

  const services = [
    {
      icon: Shirt,
      title: "Luxury Custom Apparel",
      description: "Exclusive, tailor-made clothing for individuals and businesses to create one-of-a-kind designs.",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Users,
      title: "Corporate & Business Wear",
      description: "Stylish corporate uniforms that reflect professionalism while maintaining comfort and durability.",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Building,
      title: "Private Label Manufacturing",
      description:
        "Bring your fashion brand to life with our comprehensive private label clothing manufacturing services.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
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

      {/* Hero Section - Matching presentation style */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden opacity-0">
        {/* Background Geometric Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800 transform rotate-45 translate-x-48 -translate-y-48 rounded-3xl transition-transform duration-1000 hover:rotate-12"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-700 rounded-full transform -translate-x-40 translate-y-40 transition-transform duration-1000 hover:scale-110"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-stone-300 rounded-full transition-transform duration-1000 hover:scale-105"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            <div>
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-emerald-900 to-emerald-700 bg-clip-text text-transparent leading-none mb-8 text-balance">
                OUR SERVICES
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl text-pretty">
                From custom apparel to private label clothing, Orrmira offers luxury apparel manufacturing services that
                bring your fashion vision to life.
              </p>
            </div>
            <div className="relative">
              <div
                className="w-full h-[500px] bg-cover bg-center transition-transform duration-700 hover:scale-105 hover:shadow-2xl"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80')",
                  clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 85%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-20 bg-white opacity-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center group transform transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className="w-full h-80 bg-cover bg-center rounded-3xl mb-6 transition-all duration-500 group-hover:shadow-2xl group-hover:brightness-110 overflow-hidden"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="w-full h-full bg-gradient-to-t from-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="w-16 h-16 bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4 -mt-12 relative z-10 border-4 border-white transition-all duration-300 group-hover:bg-emerald-700 group-hover:scale-110 group-hover:shadow-lg">
                  <service.icon className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-4 transition-colors duration-300 group-hover:text-emerald-700">
                  {service.title}
                </h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Identity Section - Matching slide 9 style */}
      <section
        ref={corporateRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-stone-100 opacity-0"
      >
        {/* Background Geometric Elements */}
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-800 rounded-tr-[200px] transition-transform duration-1000 hover:scale-105"></div>
          <div className="absolute top-1/3 right-0 w-64 h-64 bg-stone-300 rounded-full transform translate-x-32 transition-transform duration-1000 hover:scale-110"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Images Side */}
            <div className="space-y-6">
              <div className="relative group">
                <div
                  className="w-full h-64 bg-cover bg-center transition-all duration-700 group-hover:scale-105 group-hover:shadow-xl"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80')",
                    clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
                  }}
                ></div>
              </div>
              <div className="relative group">
                <div
                  className="w-full h-64 bg-cover bg-center transition-all duration-700 group-hover:scale-105 group-hover:shadow-xl"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&w=800&q=80')",
                    clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
                  }}
                ></div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-900 to-emerald-700 bg-clip-text text-transparent leading-tight text-balance">
                WHY ORRMIRA IS HELPFUL FOR CORPORATE COMPANIES IN BUILDING THEIR IDENTITY
              </h2>

              <div className="space-y-6">
                <div className="transform transition-all duration-500 hover:translate-x-2 hover:bg-white/50 hover:backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">1. Reflects Professionalism:</h3>
                  <p className="text-gray-700">
                    Orrmira offers premium-quality corporate apparel that elevates your company's image. Custom branded
                    T-shirts, polos, and uniforms ensure that your team looks unified, professional, and aligned with
                    your brand values.
                  </p>
                </div>

                <div className="transform transition-all duration-500 hover:translate-x-2 hover:bg-white/50 hover:backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">2. Enhances Brand Visibility:</h3>
                  <p className="text-gray-700">
                    By integrating your logo and brand colors into stylish, high-quality garments, Orrmira helps
                    increase your company's visibility—whether at events, in the office, or during client meetings.
                  </p>
                </div>

                <div className="transform transition-all duration-500 hover:translate-x-2 hover:bg-white/50 hover:backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">3. Builds Team Unity:</h3>
                  <p className="text-gray-700">
                    Branded clothing promotes a sense of belonging and pride among employees. Orrmira's apparel
                    strengthens internal culture by making staff feel part of a cohesive, purpose-driven team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Detail Section */}
      <section ref={detailsRef} className="py-20 bg-white opacity-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-900 to-emerald-700 bg-clip-text text-transparent mb-8 text-center">
            OUR SERVICES
          </h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <div className="transform transition-all duration-500 hover:translate-x-4 hover:bg-emerald-50 p-6 rounded-lg">
              <p>
                <strong className="text-emerald-900">Luxury Garment Manufacturing:</strong> High-end apparel for women's
                wear, men's wear, ethnic couture, and more.
              </p>
            </div>
            <div className="transform transition-all duration-500 hover:translate-x-4 hover:bg-emerald-50 p-6 rounded-lg">
              <p>
                <strong className="text-emerald-900">Private Label Solutions:</strong> From concept, design, sourcing,
                sampling to final production.
              </p>
            </div>
            <div className="transform transition-all duration-500 hover:translate-x-4 hover:bg-emerald-50 p-6 rounded-lg">
              <p>
                <strong className="text-emerald-900">Custom Design & Development:</strong> Bring your sketches or mood
                boards—we'll bring them to life.
              </p>
            </div>
            <div className="transform transition-all duration-500 hover:translate-x-4 hover:bg-emerald-50 p-6 rounded-lg">
              <p>
                <strong className="text-emerald-900">Corporate & Lifestyle Apparel:</strong> Bespoke uniforms and
                statement wear for premium hospitality and luxury events.
              </p>
            </div>
            <div className="transform transition-all duration-500 hover:translate-x-4 hover:bg-emerald-50 p-6 rounded-lg">
              <p>
                <strong className="text-emerald-900">Trend Forecasting & Styling Input:</strong> Fashion insights to
                keep your brand a step ahead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-emerald-900 relative overflow-hidden opacity-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 to-emerald-900"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-700/30 rounded-full transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-800/20 rounded-full transform -translate-x-48 translate-y-48"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance drop-shadow-lg">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-white/90 mb-8 text-pretty drop-shadow">
            Let's discuss your apparel manufacturing needs and bring your vision to life.
          </p>
          <Button
            className="bg-white text-emerald-800 hover:bg-emerald-50 hover:scale-105 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => handleNavigation("Contact")}
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </section>
    </div>
  )
}
