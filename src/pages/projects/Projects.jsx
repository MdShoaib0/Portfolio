import { Star } from 'lucide-react'
import React from 'react'

function Projects() {
  return (
    <section className='flex flex-col'>
          <div className='flex flex-col gap-8 justify-center items-center text-center mt-28 px-6'>
            <div className='flex items-center justify-center gap-1.5 py-2.5 my-1 px-5 text-white bg-gradient-to-r from-purple-500 to bg-pink-500 rounded-full font-medium'>
              <Star size={19} />
              <p>Portfolio</p>
            </div>
            <h2 className='sm:text-6xl text-5xl font-bold leading-12 text-slate-950'>Featured <span className='bg-gradient-to-r from-purple-500 to bg-pink-500 bg-clip-text text-transparent'>Projects</span></h2>
            <p className='text-xl leading-9 text-slate-600 md:mx-92'>A showcase of my most impactful work across web development, testing automation, and digital design</p>
          </div>

          <div className='flex justify-center gap-4 font-medium text-sm py-12 text-slate-700'>
            <p className='px-8 py-2 rounded-full text-white bg-gradient-to-r from-purple-500 to-pink-500'>All Projects</p>
            <p className='px-8 py-2 rounded-full border border-slate-300'>Web Apps</p>
            <p className='px-8 py-2 rounded-full border border-slate-300'>Testing</p>
            <p className='px-8 py-2 rounded-full border border-slate-300'>Desing</p>
          </div>
    
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-24 mx-6 sm:mx-10'>
            
          </div>
        </section>
  )
}

export default Projects