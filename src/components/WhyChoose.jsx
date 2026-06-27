import { WHY_CHOOSE } from '../data/siteContent'

export default function WhyChoose() {
  return (
    <section id="about" className="bg-white py-14 border-y border-gold-300/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <h2 className="rule-flourish text-center font-display text-2xl sm:text-3xl font-bold text-black mb-10 w-fit mx-auto">
          Why Choose <span className="text-gold-600">D for Doubts?</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {WHY_CHOOSE.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="bg-white border border-gold-300/50 rounded-xl px-5 py-7 flex flex-col items-center text-center gap-3 hover:border-brown-light/60 hover:shadow-card transition-all"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brown-light/15 text-brown-light-hover">
                <Icon size={22} />
              </span>
              <div>
                <p className="font-semibold text-black">{label}</p>
                <p className="text-xs text-black/60 mt-1">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
