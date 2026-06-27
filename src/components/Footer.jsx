import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Send, Linkedin } from 'lucide-react'
import logo from '../assets/logo.png'
import { FOOTER_LINKS } from '../data/siteContent'

const SOCIALS = [Facebook, Instagram, Youtube, Send, Linkedin]

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-gold-500/20 pt-14">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="D for Doubts crest logo" className="h-11 w-11 object-contain" />
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold text-white">D for Doubts</span>
              <span className="block text-[10px] tracking-[0.18em] uppercase text-gold-400">Learn · Clear · Succeed</span>
            </span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Empowering students to learn better, clear doubts instantly, and achieve their dreams.
          </p>
          <div className="flex gap-3 mt-5">
            {SOCIALS.map((Icon, i) => (
              <a
                key={i}
                href="#social"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-gold-500 hover:text-black transition-colors"
                aria-label="Social link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            {FOOTER_LINKS.quick.map((link) => (
              <li key={link}>
                <a href="#" className="text-white/60 text-sm hover:text-gold-400 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">Popular Courses</h4>
          <ul className="space-y-2.5">
            {FOOTER_LINKS.popular.map((link) => (
              <li key={link}>
                <a href="#" className="text-white/60 text-sm hover:text-gold-400 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-gold-400 shrink-0" /> +91 12345 67890
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-gold-400 shrink-0" /> hello@dfordoubts.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} className="text-gold-400 shrink-0" /> Chennai, Tamil Nadu, India
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold-500/10 py-5 px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-7xl mx-auto">
        <p className="text-white/40 text-xs">© 2026 D for Doubts. All rights reserved.</p>
        <div className="flex gap-5 text-xs text-white/40">
          <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
