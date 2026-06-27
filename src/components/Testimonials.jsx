import { Quote, Star, ArrowRight } from 'lucide-react'
import { TESTIMONIALS } from '../data/siteContent'

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">What Students Say</h2>
        <a href="#testimonials" className="flex items-center gap-1 text-sm font-semibold text-black/70 hover:text-black">
          View All <ArrowRight size={15} />
        </a>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="bg-white border border-gold-300/50 rounded-xl p-6 flex flex-col gap-4">
            <Quote size={26} className="text-gold-500 fill-gold-500/20" />
            <p className="text-black/80 text-[15px] leading-relaxed">{t.quote}</p>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-brand-gradient text-white text-sm font-bold flex items-center justify-center">
                  {t.name.charAt(0)}
                </span>
                <span className="text-sm font-semibold text-black">{t.name}</span>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold-500 text-gold-500" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {[0, 1, 2].map((i) => (
          <span key={i} className={`h-2 rounded-full transition-all ${i === 0 ? 'w-6 bg-brand-gradient' : 'w-2 bg-gold-300'}`} />
        ))}
      </div>
    </section>
  )
}
