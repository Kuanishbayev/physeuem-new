import React, { useState } from 'react'
import Chapter from './Chapter'
import { MdExpandLess, MdOutlineExpandMore } from 'react-icons/md'

const Unit = ({title, info, progress_percent, logo, chapters}) => {
    const [openUnit, setOpenUnit] = useState(false)
  return (
    <li>
        <div className='bg-white my-10 p-4 cursor-pointer' onClick={() => setOpenUnit(prev => !prev)}>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
            <img src={logo} className='h-16' alt="Unit 1" />
            <p className='text-3xl fira-sans font-bold text-slate-700'>{title}</p>
            </div>
            {
                openUnit ? <MdExpandLess size={30} className='text-slate-700' /> : <MdOutlineExpandMore size={30} className='text-slate-700' />
            }
        </div>
        {
            openUnit && (
            <div className='mt-4'>
                {info}
            </div>
            )
        }
        <div className='mt-4 bg-slate-200 h-3 rounded-full overflow-hidden'>
            <div className={`bg-green-600 h-full rounded-full`} style={{width: `${progress_percent}%`}}></div>
        </div>
        </div>
        {
            openUnit && (
            <ul>
                {
                chapters.map((chapter, index) => (
                    <Chapter key={index} {...chapter} />
                ))
                }
            </ul>
            )
        }
    </li>
  )
}

export default Unit