import { Calendar, ArrowRight, Clock } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-14">
      <div className="bg-brand-gradient rounded-2xl px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="hidden sm:flex items-center justify-center w-14 h-14 rounded-full bg-white/15 text-white shrink-0">
            <Clock size={26} />
          </span>
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">Book Your Free Demo Class</h3>
            <p className="text-white/80 text-sm mt-1">
              Experience the D for Doubts way of learning. Absolutely free!
            </p>
          </div>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-white text-brand-wine px-6 py-3.5 rounded-full font-semibold hover:bg-gold-100 transition-colors shrink-0"
        >
          <Calendar size={18} /> Book Free Demo <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
