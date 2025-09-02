import { Star } from 'lucide-react'
import React from 'react'

function Service() {
  return (
    <section className='flex flex-col'>
          <div className='flex flex-col gap-8 justify-center items-center text-center mt-28 px-6'>
            <div className='flex items-center justify-center gap-1.5 py-2.5 my-1 px-5 text-white bg-gradient-to-r from-purple-500 to bg-pink-500 rounded-full font-medium'>
              <Star size={19} />
              <p>Services</p>
            </div>
            <h2 className='sm:text-6xl text-5xl font-bold leading-12 text-slate-950'>What I <span className='bg-gradient-to-r from-purple-500 to bg-pink-500 bg-clip-text text-transparent'>Offer</span></h2>
            <p className='text-xl leading-9 text-slate-600 md:mx-92'>Comprehensive digital solutions tailored to bring your ideas to life with precision and creativity</p>
          </div>
    
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-24 mx-6 sm:mx-10'>
            
          </div>
        </section>
  )
}

export default Service