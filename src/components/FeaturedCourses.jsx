import { ArrowRight, Star } from 'lucide-react'
import { COURSES } from '../data/siteContent'

export default function FeaturedCourses() {
  return (
    <section id="courses" className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-maroon-950">Featured Courses</h2>
        <a href="#courses" className="flex items-center gap-1 text-sm font-semibold text-maroon-800 hover:text-maroon-950">
          View All <ArrowRight size={15} />
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {COURSES.map((course) => (
          <article
            key={course.title}
            className="bg-cream-50 border border-gold-300/50 rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow flex flex-col"
          >
            <div className={`${course.cardBg} h-28 flex flex-col items-center justify-center text-center px-3`}>
              <p className="text-gold-300 font-display font-bold text-base leading-tight">{course.tag}</p>
              {course.tagline && <p className="text-cream-100 text-xs font-medium mt-0.5">{course.tagline}</p>}
            </div>

            <div className="p-4 flex flex-col gap-2 flex-1">
              <h3 className="font-semibold text-maroon-950 leading-snug">{course.title}</h3>
              <p className="text-xs text-maroon-900/60">{course.sub}</p>

              <div className="flex items-center gap-1 text-sm">
                <Star size={14} className="fill-gold-500 text-gold-500" />
                <span className="font-semibold text-maroon-950">{course.rating}</span>
                <span className="text-maroon-900/50">({course.reviews})</span>
              </div>

              <div className="flex items-center gap-2 mt-1">
                <span className="w-6 h-6 rounded-full bg-gold-100 text-maroon-800 text-[10px] font-bold flex items-center justify-center shrink-0">
                  {course.tutor.charAt(0)}
                </span>
                <span className="text-xs text-maroon-900/70 truncate">{course.tutor}</span>
              </div>

              <button className="mt-auto bg-maroon-900 text-cream-50 text-sm font-semibold rounded-full py-2.5 hover:bg-maroon-950 transition-colors">
                Enroll Now
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
