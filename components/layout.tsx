"use client"

import React from "react"
import { Menu, X, Mail, MapPin, Phone, Linkedin, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LayoutProps {
  children: React.ReactNode
  currentPageName: string
  onNavigate: (page: string) => void
}

export default function Layout({ children, currentPageName, onNavigate }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const navigationItems = [
    { title: "Home" },
    { title: "About" },
    { title: "Services" },
    { title: "Products" },
    { title: "Newsroom" },
    { title: "Contact" },
  ]

  const handleNavigation = (page: string) => {
    onNavigate(page)
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Header with new logo */}
      <header className="fixed top-0 w-full bg-stone-100/95 backdrop-blur-md border-b border-emerald-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <button onClick={() => handleNavigation("Home")} className="flex items-center gap-4">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68bd73ab02f46a6574aa24d1/4820705dd_generated-image.png"
                alt="HVS Logo"
                className="h-16"
              />
              <div>
                <div className="text-3xl font-bold text-emerald-900">Orrmira</div>
                <div className="text-sm text-emerald-700 font-medium">Woven Stitching Your Dream</div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.title}
                  onClick={() => handleNavigation(item.title)}
                  className={`text-sm font-medium transition-colors ${
                    currentPageName === item.title ? "text-emerald-800" : "text-gray-700 hover:text-emerald-800"
                  }`}
                >
                  {item.title}
                </button>
              ))}
              <Button
                className="bg-emerald-800 hover:bg-emerald-900 rounded-full px-6"
                onClick={() => handleNavigation("Contact")}
              >
                Get Quote
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-stone-100 border-t border-emerald-200">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.title}
                  onClick={() => handleNavigation(item.title)}
                  className={`block text-base font-medium w-full text-left ${
                    currentPageName === item.title ? "text-emerald-800" : "text-gray-700"
                  }`}
                >
                  {item.title}
                </button>
              ))}
              <Button
                className="w-full bg-emerald-800 hover:bg-emerald-900 rounded-full mt-4"
                onClick={() => handleNavigation("Contact")}
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68bd73ab02f46a6574aa24d1/4820705dd_generated-image.png"
                  alt="HVS Logo"
                  className="h-16"
                />
                <div>
                  <div className="text-3xl font-bold">Orrmira</div>
                  <div className="text-sm text-emerald-300">Luxury Apparel Manufacturing</div>
                </div>
              </div>
              <p className="text-stone-300 mb-4 max-w-md">
                Premium apparel manufacturing house that redefines elegance through customized luxury fashion.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-300" />
                  <span className="text-sm text-stone-300">2b, Sankar Ghosh Lane, Kolkata-700006</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-300" />
                  <span className="text-sm text-stone-300">info@harguons.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-300" />
                  <span className="text-sm text-stone-300">+91 8585892733, 97480 29199, 9007157674</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-300" />
                  <span className="text-sm text-stone-300">WhatsApp: +91 8585892733</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.title}>
                    <button
                      onClick={() => handleNavigation(item.title)}
                      className="text-stone-300 hover:text-white transition-colors text-sm"
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-stone-300">
                <li>Custom Apparel</li>
                <li>Private Label</li>
                <li>Corporate Uniforms</li>
                <li>Designer Collections</li>
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="border-t border-emerald-800 mt-8 pt-8">
            <h3 className="font-semibold mb-4 text-center">Connect With Us</h3>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              <a
                href="https://www.linkedin.com/company/orrmira/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-300 hover:text-emerald-300 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://whatsapp.com/channel/0029Va6hPBeDp2QBNYw7Yq2Z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-300 hover:text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span className="text-sm">WhatsApp Channel</span>
              </a>
              <a
                href="https://g.page/r/CQzTBeEvY-ldEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-300 hover:text-emerald-300 transition-colors"
              >
                <span className="text-sm">Google Review</span>
              </a>
            </div>
          </div>

          <div className="border-t border-emerald-800 mt-8 pt-8 text-center">
            <p className="text-stone-400 text-sm">© 2025 Orrmira | Powered by Harguons Versatile Solutions LLP</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
