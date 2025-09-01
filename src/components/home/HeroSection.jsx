import React from 'react'
import Buttons from './Buttons'
import { FiBold, FiGithub, FiLinkedin } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { MdOutlineFileDownload } from 'react-icons/md'
import { IoArrowForward } from 'react-icons/io5'
import { motion } from "motion/react"
import { PiShootingStarThin } from 'react-icons/pi'

function HeroSection() {
    return (
        <section className='flex flex-col gap-6 items-center text-center'>
            <div className='flex items-center py-2 px-3.5 gap-2.5 rounded-full bg-gradient-to-r from-emerald-300 to-emerald-200 shadow font-medium cursor-pointer hover:scale-105 transition-all duration-300'>
                <PiShootingStarThin size={21} color='orange'/>
                <p className='text-sm text-slate-700'>Available for Freelance Projects</p>
            </div>
            <div>
                <h1 className='text-6xl sm:text-8xl font-bold py-1 text-slate-900'>Full Stack</h1>
                <h1 className='text-6xl sm:text-8xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-all duration-300'>Developer</h1>
            </div>

            <div>
                <p className='sm:text-3xl text-2xl px-12 font-light text-slate-950 leading-10'>
                    Web Development • Testing Automation • UI/UX Design • Freelancing
                </p>
            </div>

            <div className='px-6 md:px-24 lg:px-48 xl:px-96'>
                <p className='text-xl text-slate-800 leading-8'>
                    Crafting exceptional digital experiences through code, design, and comprehensive testing. Available for freelance projects and long-term collaborations.
                </p>
            </div>

            <div className='flex flex-col sm:flex-row justify-center gap-8 mt-8'>
                <div className='flex items-center justify-center text-white hover:text-black hover:border hover:border-pink-600 gap-3 shadow rounded-2xl w-56 h-12 bg-gradient-to-r from-purple-500 to-pink-500  hover:bg-none transition-all duration-300 hover:scale-105 active:scale-95'>
                    <Buttons
                        name="View My Work"
                    />
                    <IoArrowForward />
                </div>

                <div className='flex items-center justify-center gap-3 shadow rounded-2xl w-56 h-12 border bg-transparent hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-slate-200 text-pink-500 transition-all duration-300 hover:scale-105 active:scale-95'>
                    <MdOutlineFileDownload />
                    <Buttons
                        name="Download CV"
                    />
                </div>
            </div>

            <div className='flex justify-center gap-8 mt-6 relative'>
                <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-white/5 hover:bg-white/20 transition backdrop-blur-2xl flex items-center justify-center"
                    aria-label="GitHub"
                >
                    <FiGithub size={25} />
                </a>
                <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-white/5 hover:bg-white/20 transition flex items-center justify-center"
                    aria-label="LinkedIn"
                >
                    <FiLinkedin size={26} />
                </a>
                <a
                    href="mailto:your@email.com"
                    className="w-14 h-14 rounded-full bg-white/5 hover:bg-white/20 transition flex items-center justify-center"
                    aria-label="Email"
                >
                    <HiOutlineMail size={28} />
                </a>

                <motion.div
                    initial={{ y: 10, opacity: 0.8 }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    animate={{ y: -10, opacity: 1 }}
                    className='w-10 h-16 border-2 border-purple-600 rounded-full flex items-center justify-center absolute top-12'>
                    <motion.div
                        initial={{ y: 10, opacity: 0.8 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        animate={{ y: -10, opacity: 1 }}
                        className='w-2.5 h-4 bg-gradient-to-b from-pink-300 to-pink-500 rounded-full'>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection