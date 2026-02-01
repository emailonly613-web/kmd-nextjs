'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-2xl font-bold text-navy">
          <span className="w-9 h-9 bg-gradient-to-br from-blue-500 to-navy rounded-lg flex items-center justify-center text-white text-lg">◈</span>
          KosherMyDevice
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#solutions" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Solutions</Link>
          <Link href="/articles" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Knowledge Hub</Link>
          <Link href="/enterprise" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">For Organizations</Link>
          <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Contact</Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:7189714311" className="px-4 py-2 text-sm font-semibold text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition">Call Now</a>
          <Link href="/#solutions" className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition">Get Started</Link>
        </div>
        
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          <div className="w-6 h-0.5 bg-navy mb-1.5"></div>
          <div className="w-6 h-0.5 bg-navy mb-1.5"></div>
          <div className="w-6 h-0.5 bg-navy"></div>
        </button>
      </div>
      
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4">
          <Link href="/#solutions" className="block py-2 text-gray-600">Solutions</Link>
          <Link href="/articles" className="block py-2 text-gray-600">Knowledge Hub</Link>
          <Link href="/enterprise" className="block py-2 text-gray-600">For Organizations</Link>
          <Link href="/contact" className="block py-2 text-gray-600">Contact</Link>
        </div>
      )}
    </header>
  )
}
