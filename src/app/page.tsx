import React from 'react'
import Header from '@/components/NavBar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
      </main>
      <Footer />
    </div>
  )
}
