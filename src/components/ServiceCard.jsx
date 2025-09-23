import React from 'react'
import { HiOutlineCodeBracket } from 'react-icons/hi2'
import { LuArrowRight } from 'react-icons/lu'

function ServiceCard() {
  const services = [
    'Custom Web Applications',
    'E-commerce Platforms',
    'API Development',
    'Database Architecture',
  ]

  return (
    <div className="flex flex-col w-full bg-white items-center p-8 gap-6 shadow-lg rounded-2xl">
      {/* Icon */}
      <div className="w-[73px] h-[73px] flex justify-center items-center rounded-3xl shadow bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition-transform">
        <HiOutlineCodeBracket size={28} className="text-white" />
      </div>

      {/* Title & Description */}
      <p className="text-2xl font-bold text-center">Full-Stack Development</p>
      <p className="text-center font-medium text-gray-500">
        End-to-end web applications built with modern technologies and best
        practices for scalability and performance.
      </p>

      {/* Service List */}
      <div className="flex flex-col w-full items-start gap-3">
        {services.map((item, idx) => (
          <p
            key={idx}
            className="font-semibold text-gray-500 flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 inline-block"></span>
            {item}
          </p>
        ))}
      </div>

      {/* Button */}
      <button className="w-full py-2 flex justify-center items-center gap-2 border border-gray-300 rounded-2xl hover:bg-gray-50 transition-colors">
        Learn More
        <LuArrowRight className="transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  )
}

export default ServiceCard