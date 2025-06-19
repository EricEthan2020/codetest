import About from './components/About'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Idea from './components/Idea'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <main className='bg-[#101111]  font-Poppins overflow-hidden'>
      <div className=''>

      <Header/>
      <div className='h-[140px]'></div>
      <HeroSection/>
      <Carousel/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Idea/>
      <Footer/>
      </div>
    </main>
  )
}

export default App