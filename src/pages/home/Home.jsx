import React from 'react'
import Header from '../../components/home/Header'
import HeroSection from '../../components/home/HeroSection'

function Home() {
  return (
    <div className='bg-slate-950 text-slate-200 min-h-screen'>
        <Header />
        <HeroSection />
    </div>
  )
}

export default Home