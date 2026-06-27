import { WHY_CHOOSE } from '../data/siteContent'

export default function WhyChoose() {
  return (
    <section id="about" className="bg-maroon-950 py-14">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <h2 className="rule-flourish text-center font-display text-2xl sm:text-3xl font-bold text-cream-50 mb-10 w-fit mx-auto">
          Why Choose <span className="text-gold-400">D for Doubts?</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {WHY_CHOOSE.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="bg-maroon-900/60 border border-gold-500/20 rounded-xl px-5 py-7 flex flex-col items-center text-center gap-3 hover:border-gold-400/60 transition-colors"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gold-500/15 text-gold-300">
                <Icon size={22} />
              </span>
              <div>
                <p className="font-semibold text-cream-50">{label}</p>
                <p className="text-xs text-cream-100/60 mt-1">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
