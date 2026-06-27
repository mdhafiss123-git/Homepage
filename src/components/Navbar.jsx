import { useState } from 'react'
import { Menu, X, User } from 'lucide-react'
import logo from '../assets/logo.png'

const NAV_LINKS = ['Home', 'Courses', 'Tutors', 'About', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gold-300/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="D for Doubts crest logo" className="h-12 w-12 object-contain" />
          <span className="leading-tight">
            <span className="block font-display text-xl font-bold text-black">D for Doubts</span>
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
                  ? 'text-black border-b-2 border-brown-light pb-1'
                  : 'text-black/70 hover:text-black'
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#login"
            className="inline-flex items-center gap-2 bg-brown-light text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brown-light-hover transition-colors"
          >
            <User size={16} /> Login
          </a>
        </div>

        <button
          className="lg:hidden text-black"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gold-300/40 bg-white px-5 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-black font-medium"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#login"
            className="inline-flex items-center justify-center gap-2 bg-brown-light text-white px-5 py-2.5 rounded-full text-sm font-semibold"
          >
            <User size={16} /> Login
          </a>
        </div>
      )}
    </header>
  )
}
