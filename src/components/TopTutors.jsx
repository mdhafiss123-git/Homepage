import { ArrowRight, Star } from 'lucide-react'
import { TUTORS } from '../data/siteContent'

export default function TopTutors() {
  return (
    <section id="tutors" className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">Top Expert Tutors</h2>
        <a href="#tutors" className="flex items-center gap-1 text-sm font-semibold text-black/70 hover:text-black">
          View All <ArrowRight size={15} />
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {TUTORS.map((tutor) => (
          <div key={tutor.name} className="flex flex-col items-center text-center gap-2">
            <div className="w-20 h-20 rounded-full bg-brown-light flex items-center justify-center text-white font-display text-2xl font-bold border-2 border-gold-400">
              {tutor.name.charAt(0)}
            </div>
            <p className="font-semibold text-black text-sm">{tutor.name}</p>
            <p className="text-xs text-black/60">{tutor.subject}</p>
            <div className="flex items-center gap-1 text-xs">
              <Star size={12} className="fill-gold-500 text-gold-500" />
              <span className="font-semibold text-black">{tutor.rating}</span>
              <span className="text-black/50">({tutor.reviews})</span>
            </div>
            <p className="text-[11px] text-black/50">{tutor.exp}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
