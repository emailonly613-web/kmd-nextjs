import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 font-display text-xl font-bold text-white mb-4">
              <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-navy-light rounded-lg flex items-center justify-center text-sm">◈</span>
              KosherMyDevice
            </div>
            <p className="text-sm leading-relaxed">The definitive platform for digital wellness and device security. Serving families, schools, and organizations worldwide.</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://thekosherphone.com" className="hover:text-white transition">TheKosherPhone</a></li>
              <li><a href="https://koshersidekick.com" className="hover:text-white transition">KosherSidekick</a></li>
              <li><a href="https://torahcompanion.com" className="hover:text-white transition">Torah Companion</a></li>
              <li><Link href="/enterprise" className="hover:text-white transition">Enterprise Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Knowledge Hub</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/articles?cat=research" className="hover:text-white transition">Research & Data</Link></li>
              <li><Link href="/articles?cat=parenting" className="hover:text-white transition">Digital Parenting</Link></li>
              <li><Link href="/articles?cat=technology" className="hover:text-white transition">Technology</Link></li>
              <li><Link href="/articles?cat=wellness" className="hover:text-white transition">Digital Wellness</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/support" className="hover:text-white transition">Support</Link></li>
              <li><a href="tel:7189714311" className="hover:text-white transition">(718) 971-4311</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2026 KosherMyDevice. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
