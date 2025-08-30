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
      <div className='flex flex-col gap-8 justify-center items-center text-center mt-28 text-slate-300'>
        <div className='flex items-center justify-center gap-1.5 py-3 px-5 bg-pink-400 rounded-full font-medium'>
          <RiFlashlightLine size={18} />
          <p>Expertise</p>
        </div>
        <h2 className='text-6xl font-bold'>Skills & <span className='text-pink-500'>Expertise</span></h2>
        <p className='text-xl'>A comprehensive toolkit built through years of experience and continuous learning</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-24 mx-10'>
        {skills.map(skill => (
          <SkillsCard key={skill.name} name={skill.name} />
        ))}
      </div>
    </section>
  )
}

export default Skills