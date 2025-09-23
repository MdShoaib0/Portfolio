import React from 'react'
import { LuDatabase } from 'react-icons/lu'

function SkillsCard({ name }) {
  const skills = [
    'React.js',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'Three.js',
  ]

  return (
    <div className="flex flex-col items-center w-full p-6 bg-white rounded-2xl shadow-lg gap-6">
      {/* Header with Icon and Title */}
      <div className="flex items-center gap-4 w-full">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center">
          <LuDatabase size={28} className="text-white" />
        </div>
        <p className="text-xl font-semibold">{name}</p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 w-full gap-3 text-sm font-medium text-gray-700 text-center">
        {skills.map((skill, idx) => (
          <p
            key={idx}
            className="bg-emerald-100 rounded-full py-1.5 hover:bg-emerald-200 transition"
          >
            {skill}
          </p>
        ))}
      </div>
    </div>
  )
}

export default SkillsCard