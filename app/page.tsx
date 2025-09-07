"use client"

import { useState } from "react"
import Layout from "@/components/layout"
import Home from "@/components/home"
import About from "@/components/about"
import Products from "@/components/products"
import Services from "@/components/services"
import Newsroom from "@/components/newsroom"
import Contact from "@/components/contact"

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home")

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home onNavigate={setCurrentPage} />
      case "About":
        return <About />
      case "Products":
        return <Products onNavigate={setCurrentPage} />
      case "Services":
        return <Services onNavigate={setCurrentPage} />
      case "Newsroom":
        return <Newsroom />
      case "Contact":
        return <Contact />
      default:
        return <Home onNavigate={setCurrentPage} />
    }
  }

  return (
    <Layout currentPageName={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </Layout>
  )
}
