import React from 'react'

function SkillsCard({ name }) {
  return (
    <div className='flex flex-col items-center w-full p-8 bg-slate-800 rounded-lg shadow-lg gap-8 text-slate-200'>
        <div className='w-full flex gap-8 items-center'>
          <div className='w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center'>
            <p>logo</p>
          </div>
          <p className='text-2xl font-medium'>{name}</p>
        </div>

        <div className='w-full grid grid-cols-2 gap-4 text-center'>
          <p className='bg-slate-700 rounded-full py-1.5'>React.js</p>
          <p className='bg-slate-700 rounded-full py-1.5'>Next.js</p>
          <p className='bg-slate-700 rounded-full py-1.5'>TypeScript</p>
          <p className='bg-slate-700 rounded-full py-1.5'>Tailwind CSS</p>
          <p className='bg-slate-700 rounded-full py-1.5'>Framer Motion</p>
          <p className='bg-slate-700 rounded-full py-1.5'>Three.js</p>
        </div>
    </div>
  )
}

export default SkillsCard   