import { ArrowRight, Calendar } from 'lucide-react'
import HeroIllustration from './HeroIllustration'
import { STATS } from '../data/siteContent'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-10 lg:pt-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-bold text-black">
            Learn Without <span className="text-gold-600">Limits.</span>
            <br />
            Clear Your Doubts
            <br />
            with Expert Mentors
          </h1>
          <p className="mt-6 text-black/70 text-lg max-w-md">
            Live classes, doubt solving, practice tests and mentorship — everything you need to learn better and achieve more.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#courses"
              className="inline-flex items-center gap-2 bg-brown-light text-white px-6 py-3.5 rounded-full font-semibold hover:bg-brown-light-hover transition-colors shadow-card"
            >
              Explore Courses <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-brown-light text-black px-6 py-3.5 rounded-full font-semibold hover:bg-brown-light/10 transition-colors"
            >
              Book Free Demo <Calendar size={18} />
            </a>
          </div>
        </div>

        <div className="relative">
          <HeroIllustration className="w-full max-w-lg mx-auto" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-16">
        <div className="bg-white border border-gold-300/50 rounded-2xl shadow-card grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gold-300/50">
          {STATS.map(({ label, sub, value, icon: Icon }) => (
            <div key={label} className="flex items-center gap-4 px-8 py-6">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brown-light/15 text-brown-light-hover shrink-0">
                <Icon size={22} />
              </span>
              <div>
                <p className="font-display text-2xl font-bold text-black">{value}</p>
                <p className="text-sm text-black/60">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
