import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import SectionLabel from '@/components/SectionLabel'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <SectionLabel index="01" label="selected work" />
      <Projects />
      <SectionLabel index="02" label="skill distribution" />
      <Skills />
      <SectionLabel index="03" label="experience" />
      <Experience />
      <SectionLabel index="04" label="education" />
      <Education />
      <Footer />
    </>
  )
}
