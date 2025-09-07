"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Sparkles, Settings, Scissors } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface ProductsProps {
  onNavigate?: (page: string) => void
}

export default function Products({ onNavigate }: ProductsProps) {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    setTimeout(() => setIsVisible(true), 100)

    return () => observer.disconnect()
  }, [])

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page)
    }
  }

  return (
    <div className="bg-stone-100">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(5, 150, 105, 0.3); }
          50% { box-shadow: 0 0 40px rgba(5, 150, 105, 0.6); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .glass-effect {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-800/30 to-emerald-600/20 transform rotate-45 translate-x-48 -translate-y-48 rounded-3xl animate-float"></div>
          <div
            className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-emerald-700/30 to-emerald-500/20 rounded-full transform -translate-x-40 translate-y-40 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-emerald-400/10 rounded-full animate-pulse"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h1 className="text-6xl md:text-8xl font-bold text-emerald-900 leading-none mb-8 text-balance bg-gradient-to-r from-emerald-900 to-emerald-700 bg-clip-text text-transparent">
                Product Portfolio
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl text-pretty">
                Discover our portfolio of premium fabrics, expert embroidery, and precision stitching services.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/20 to-transparent rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div
                className="relative w-full h-[500px] bg-cover bg-center rounded-3xl overflow-hidden transform group-hover:scale-105 transition-all duration-700 shadow-2xl"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80')",
                  clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 85%)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
                <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fabric and Embroidery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-stone-100 to-stone-50 p-8 rounded-3xl group hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 animate-on-scroll border border-stone-200/50">
              <h3 className="text-3xl font-bold text-emerald-900 mb-6 group-hover:text-emerald-700 transition-colors duration-300">
                Orrmira Fabric
              </h3>
              <p className="text-gray-600 mb-6">
                Our commitment to high-quality fabrics meets the needs of both fashion and function.
              </p>
              <div className="space-y-3">
                {["Premium Quality Materials", "Wide Fabric Range", "Sustainable & Consistent"].map(
                  (feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-600 animate-pulse-glow" />
                      <span>{feature}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
            <div
              className="bg-gradient-to-br from-stone-100 to-stone-50 p-8 rounded-3xl group hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 animate-on-scroll border border-stone-200/50"
              style={{ animationDelay: "200ms" }}
            >
              <h3 className="text-3xl font-bold text-emerald-900 mb-6 group-hover:text-emerald-700 transition-colors duration-300">
                Orrmira's Embroidery
              </h3>
              <p className="text-gray-600 mb-6">
                High-precision embroidery using advanced machines and expert artisans, built to last.
              </p>
              <div className="space-y-3">
                {["Premium Craftsmanship", "Long-Lasting Quality", "Full Design Flexibility"].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-600 animate-pulse-glow" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">Core Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Our state-of-the-art facilities deliver unmatched quality in every product.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "High-Definition Printing",
                description: "Sharp, vibrant, and detailed designs for any artwork.",
              },
              {
                icon: Scissors,
                title: "Precision Stitching",
                description: "A premium finish that enhances comfort and appearance.",
              },
              {
                icon: Settings,
                title: "Customized GSM Ranges",
                description: "From 140 to 280 GSM based on client needs.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl text-center group hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 animate-on-scroll border border-stone-200/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <item.icon className="w-8 h-8 text-emerald-800 group-hover:text-emerald-600 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.05%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance drop-shadow-lg">
            Experience Our Product Excellence
          </h2>
          <p className="text-xl text-white/90 mb-8 text-pretty drop-shadow">
            Discover how our premium products can elevate your brand.
          </p>
          <Button
            className="bg-white text-emerald-900 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => handleNavigation("Contact")}
          >
            Request Samples
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </div>
      </section>
    </div>
  )
}
