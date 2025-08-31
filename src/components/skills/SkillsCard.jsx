import React from 'react'
import { LuDatabase } from 'react-icons/lu'

function SkillsCard({ name }) {
  return (
    <div className='flex flex-col items-center w-full p-8 bg-slate-100 rounded-lg shadow-xl gap-8'>
        <div className='w-full flex gap-4 items-center'>
          <div className='bg-gradient-to-r from-blue-600 to bg-purple-700 rounded-2xl flex items-center justify-center'>
            <div className='p-4'>
              <LuDatabase size={29} color='white' />
            </div>
          </div>
          <p className='text-2xl font-medium'>{name}</p>
        </div>

        <div className='w-full grid grid-cols-2 text-sm font-medium text-gray-700 gap-4 text-center'>
          <p className='bg-emerald-100 rounded-full py-1.5'>React.js</p>
          <p className='bg-emerald-100 rounded-full py-1.5'>Next.js</p>
          <p className='bg-emerald-100 rounded-full py-1.5'>TypeScript</p>
          <p className='bg-emerald-100 rounded-full py-1.5'>Tailwind CSS</p>
          <p className='bg-emerald-100 rounded-full py-1.5'>Framer Motion</p>
          <p className='bg-emerald-100 rounded-full py-1.5'>Three.js</p>
        </div>
    </div>
  )
}

export default SkillsCard   