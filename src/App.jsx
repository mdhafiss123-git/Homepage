import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import FeaturedCourses from './components/FeaturedCourses'
import TopTutors from './components/TopTutors'
import WhyChoose from './components/WhyChoose'
import Testimonials from './components/Testimonials'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedCourses />
        <TopTutors />
        <WhyChoose />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}
