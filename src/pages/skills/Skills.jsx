import React from 'react'
import { RiFlashlightLine } from 'react-icons/ri'
import SkillsCard from '../../components/skills/SkillsCard'

const skills = [
  { name: "Frontend Development" },
  { name: "Backend Development" },
  { name: "UI/UX Design" },
  { name: "Testing Automation" },
  { name: "DevOps" },
  { name: "Freelancing" }
]

function Skills() {
  return (
    <section className='flex flex-col'>
      <div className='flex flex-col gap-8 justify-center items-center text-center mt-28 px-6'>
        <div className='flex items-center justify-center gap-1.5 py-2.5 my-1 px-5 text-white bg-gradient-to-r from-purple-500 to bg-pink-500 rounded-full font-medium'>
          <RiFlashlightLine size={18} />
          <p>Expertise</p>
        </div>
        <h2 className='sm:text-6xl text-5xl font-bold leading-12 text-slate-950'>Skills & <span className='bg-gradient-to-r from-purple-500 to bg-pink-500 bg-clip-text text-transparent'>Expertise</span></h2>
        <p className='text-xl leading-9 text-slate-800'>A comprehensive toolkit built through years of experience and continuous learning</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-24 mx-6 sm:mx-10'>
        {skills.map(skill => (
          <SkillsCard key={skill.name} name={skill.name} />
        ))}
      </div>
    </section>
  )
}

export default Skills