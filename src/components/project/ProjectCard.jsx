import React from 'react'

function ProjectCard() {
    return (
        <div className='flex flex-col p-6 gap-4 bg-emerald-50 rounded-2xl'>
            <div className='bg-gradient-to-r from-sky-500 to-purple-500 w-full h-48 rounded-xl'>

            </div>
            <p className='px-4 py-0.5 text-sm font-medium text-black rounded-full bg-slate-300 w-fit'>web Development</p>
            <div className='flex flex-col gap-4'>
                <p className='text-lg font-semibold text-slate-800'>Real-Time Chat Application</p>
                <p className='text-slate-600'>Scalable chat application with real-time messaging, file sharing, and video calls. Built with WebSocket technology and microservices architecture.</p>
                <div></div>
            </div>
            <div className='flex gap-2 text-sm text-slate-600 font-medium'>
                <p className='py-1 px-3 rounded-full bg-gray-200'>React</p>
                <p className='py-1 px-3 rounded-full bg-gray-200'>Node.js</p>
                <p className='py-1 px-3 rounded-full bg-gray-200'>Socket.io</p>
                <p className='py-1 px-3 rounded-full bg-gray-200'>MongoDB</p>
            </div>
            <div className='flex gap-6 mt-1'>
                <button className='w-full px-6 py-2 rounded-2xl bg-gradient-to-r from-sky-500 to-purple-700 text-white border border-slate-300 hover:text-black font-medium hover:bg-slate-100'>Live Demo</button>
                <button className='w-full px-6 py-2 rounded-2xl hover:bg-gradient-to-r from-sky-500 to-purple-700 text-black border border-slate-300 hover:text-black font-medium hover:bg-slate-100'>Code</button>
            </div>
        </div>
    )
}

export default ProjectCard