import React from 'react'
import Heading from './Heading'

const Projects = () => {
  return (
    <section className='hover:border hover:border-[#B1CAFD]'>
        <div className='container mx-auto px-20 py-24'>
        {/* heading */}
        <Heading text="Some Featured projects" />
      
        <div className='space-y-8'>
        <div className='flex items-center gap-x-24 p-14 bg-[#151515]'>
            <div className='size-[545px] bg-gradient-to-r from-[#7A87FB] to-[#FFD49C]'></div>
            <div className='space-y-9.5 '>
                <span className='inline-flex size-14 items-center justify-center bg-gradient-to-b from-[#1E1E1E] to-[#7D7D7D] rounded-full border border-white'>
                        <span className='text-[25px] bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text [-webkit-background-clip:text] text-white/5 '>
                                1
                        </span>
                    </span>
                    <p className='text-4xl text-white font-bold'>Project Name</p>
            </div>
        </div>
        <div className='flex items-center gap-x-24 p-14 bg-[#151515]'>
            <div className='size-[545px] bg-gradient-to-r from-[#FFD49C] to-[#7A87FB]'></div>
            <div className='space-y-9.5 '>
                <span className='inline-flex size-14 items-center justify-center bg-gradient-to-b from-[#1E1E1E] to-[#7D7D7D] rounded-full border border-white'>
                        <span className='text-[25px] bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text [-webkit-background-clip:text] text-white/5 '>
                                2
                        </span>
                    </span>
                    <p className='text-4xl text-white font-bold'>Project Name</p>
            </div>
        </div>
        <div className='flex items-center gap-x-24 p-14 bg-[#151515]'>
            <div className='size-[545px] bg-gradient-to-r from-[#7A87FB] to-[#FFD49C]'></div>
            <div className='space-y-9.5 '>
                <span className='inline-flex size-14 items-center justify-center bg-gradient-to-b from-[#1E1E1E] to-[#7D7D7D]  rounded-full border border-white'>
                        <span className='text-[25px] bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text [-webkit-background-clip:text] text-white/5 '>
                                3
                        </span>
                    </span>
                    <p className='text-4xl text-white font-bold'>Project Name</p>
            </div>
        </div>
    </div>
    </div>
    </section>
  )
}

export default Projects