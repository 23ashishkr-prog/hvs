"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Check, Loader2 } from "lucide-react"

export default function Contact() {
  const contactRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    companyName: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting || isSubmitted) return

    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      const result = await response.json()
      console.log("[v0] Form submission result:", result)

      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: "", email: "", contactNumber: "", companyName: "", message: "" })
      }, 3000)
    } catch (error) {
      console.error("[v0] Submission failed", error)
      alert("There was an error submitting your form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

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

    if (contactRef.current) observer.observe(contactRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-stone-100 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-stone-300/30 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-emerald-100/25 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-stone-200/40 rounded-full animate-float"></div>
      </div>

      <section ref={contactRef} className="relative min-h-screen flex items-center overflow-hidden opacity-0">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800/20 transform rotate-45 translate-x-48 -translate-y-48 rounded-3xl transition-transform duration-1000 hover:rotate-12 hover:scale-110"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-emerald-900 to-emerald-700 bg-clip-text text-transparent leading-none mb-8 text-balance">
                Contact Orrmira
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 text-pretty">
                Your trusted luxury apparel manufacturer. Reach us for custom clothing, private label fashion, and
                corporate uniforms.
              </p>
              <div className="space-y-4 text-lg">
                <p className="transform transition-all duration-300 hover:translate-x-2 hover:text-emerald-800">
                  <strong>Email:</strong> info@harguons.com
                </p>
                <p className="transform transition-all duration-300 hover:translate-x-2 hover:text-emerald-800">
                  <strong>Location:</strong> Kolkata, India (serving clients worldwide)
                </p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-900 to-emerald-700 bg-clip-text text-transparent mb-8">
                Start Your Fashion Journey
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2 group">
                  <Label htmlFor="name" className="transition-colors duration-300 group-focus-within:text-emerald-700">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="rounded-full transition-all duration-300 focus:scale-105 focus:shadow-lg border-emerald-200 focus:border-emerald-500"
                  />
                </div>
                <div className="space-y-2 group">
                  <Label htmlFor="email" className="transition-colors duration-300 group-focus-within:text-emerald-700">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="rounded-full transition-all duration-300 focus:scale-105 focus:shadow-lg border-emerald-200 focus:border-emerald-500"
                  />
                </div>
                <div className="space-y-2 group">
                  <Label
                    htmlFor="contactNumber"
                    className="transition-colors duration-300 group-focus-within:text-emerald-700"
                  >
                    Contact Number
                  </Label>
                  <Input
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    className="rounded-full transition-all duration-300 focus:scale-105 focus:shadow-lg border-emerald-200 focus:border-emerald-500"
                  />
                </div>
                <div className="space-y-2 group">
                  <Label
                    htmlFor="companyName"
                    className="transition-colors duration-300 group-focus-within:text-emerald-700"
                  >
                    Company Name
                  </Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="rounded-full transition-all duration-300 focus:scale-105 focus:shadow-lg border-emerald-200 focus:border-emerald-500"
                  />
                </div>
                <div className="space-y-2 group">
                  <Label
                    htmlFor="message"
                    className="transition-colors duration-300 group-focus-within:text-emerald-700"
                  >
                    Your Requirements *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="rounded-2xl transition-all duration-300 focus:scale-105 focus:shadow-lg border-emerald-200 focus:border-emerald-500"
                  />
                </div>
                <Button
                  type="submit"
                  className={`w-full h-12 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                    isSubmitted ? "bg-green-600 hover:bg-green-700" : "bg-emerald-800 hover:bg-emerald-900"
                  }`}
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Submitting...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <Check className="w-5 h-5 mr-2" /> Submitted!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:translate-x-1" />{" "}
                      Submit
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
