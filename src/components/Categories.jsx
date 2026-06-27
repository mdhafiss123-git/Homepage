import { ArrowRight } from 'lucide-react'
import { CATEGORIES } from '../data/siteContent'

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">
          Explore <span className="text-gold-600">Top Categories</span>
        </h2>
        <a href="#categories" className="flex items-center gap-1 text-sm font-semibold text-black/70 hover:text-black">
          View All <ArrowRight size={15} />
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {CATEGORIES.map(({ label, sub, icon: Icon }) => (
          <div
            key={label}
            className="group bg-white border border-gold-300/50 rounded-xl px-4 py-7 flex flex-col items-center text-center gap-3 hover:shadow-card-hover hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brown-light text-white group-hover:bg-brown-light-hover transition-colors">
              <Icon size={22} />
            </span>
            <div>
              <p className="font-semibold text-black">{label}</p>
              <p className="text-xs text-black/60">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
