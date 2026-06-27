import { useState } from 'react'
import { Menu, X, User } from 'lucide-react'
import logo from '../assets/logo.png'

const NAV_LINKS = ['Home', 'Courses', 'Tutors', 'About', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-cream-50/95 backdrop-blur-sm border-b border-gold-300/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="D for Doubts crest logo" className="h-12 w-12 object-contain" />
          <span className="leading-tight">
            <span className="block font-display text-xl font-bold text-maroon-900">D for Doubts</span>
            <span className="block text-[11px] tracking-[0.18em] uppercase text-gold-600">Learn · Clear · Succeed</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-[15px] font-medium transition-colors ${
                i === 0
                  ? 'text-maroon-900 border-b-2 border-maroon-800 pb-1'
                  : 'text-maroon-800/80 hover:text-maroon-900'
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#login"
            className="inline-flex items-center gap-2 border border-maroon-800 text-maroon-900 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-maroon-900 hover:text-cream-50 transition-colors"
          >
            <User size={16} /> Login
          </a>
        </div>

        <button
          className="lg:hidden text-maroon-900"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gold-300/40 bg-cream-50 px-5 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-maroon-900 font-medium"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#login"
            className="inline-flex items-center justify-center gap-2 border border-maroon-800 text-maroon-900 px-5 py-2.5 rounded-full text-sm font-semibold"
          >
            <User size={16} /> Login
          </a>
        </div>
      )}
    </header>
  )
}
