import React from 'react'
import Buttons from './Buttons'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { MdOutlineFileDownload } from 'react-icons/md'
import { IoArrowForward } from 'react-icons/io5'
import { motion } from "motion/react"

function HeroSection() {
    return (
        <section className='flex flex-col gap-8 text-center my-10'>
            <div>
                <h1 className='text-8xl font-bold'>Full Stack</h1>
                <h1 className='text-8xl font-bold text-pink-300'>Developer</h1>
            </div>

            <div>
                <p className='text-3xl text-slate-300'>
                    Web Development • Testing Automation • UI/UX Design • Freelancing
                </p>
            </div>

            <div className='px-6 md:px-24 lg:px-48 xl:px-96'>
                <p className='text-xl text-slate-400'>
                    Crafting exceptional digital experiences through code, design, and comprehensive testing. Available for freelance projects and long-term collaborations.
                </p>
            </div>

            <div className='flex justify-center gap-8 mt-8'>
                <div className='flex items-center justify-center gap-3 shadow rounded-2xl w-56 h-11 hover:border border-pink-500 bg-pink-500 hover:bg-transparent hover:text-pink-500 text-slate-300 transition-all duration-300'>
                    <Buttons
                        name="View My Work"
                    />
                    <IoArrowForward />
                </div>

                <div className='flex items-center justify-center gap-3 shadow rounded-2xl w-56 h-11 border bg-transparent hover:bg-pink-500 hover:text-slate-300 text-pink-500 transition-all duration-300'>
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
                    className='w-10 h-16 border-2 border-slate-600 rounded-full flex items-center justify-center absolute top-12'>
                    <motion.div
                        initial={{ y: 10, opacity: 0.8 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        animate={{ y: -10, opacity: 1 }}
                        className='w-2.5 h-4 bg-gradient-to-b from-pink-400 to-pink-600 rounded-full'>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection