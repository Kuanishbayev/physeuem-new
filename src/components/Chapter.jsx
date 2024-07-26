import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { IoPlay } from 'react-icons/io5'
import { MdExpandLess, MdOutlineExpandMore } from 'react-icons/md'
import { RiLock2Fill } from 'react-icons/ri'
import Lesson from './Lesson'

const Chapter = ({title, chapterStatus, lessons}) => {
    const [openChapter, setOpenChapter] = useState(false)

  return (
    <li>
        <div className={`flex items-center justify-between ${!openChapter && 'border-b-2'} cursor-pointer py-4`} onClick={() => setOpenChapter(prev => !prev)}>
            <div className='flex items-center gap-4'>
                <div className={`size-8 rounded-md flex justify-center items-center ${chapterStatus === "completed" ? 'bg-green-500' : chapterStatus === "in-process" ? 'bg-blue-500' : chapterStatus === "locked" ? 'bg-gray-400' : ''}`}>
                    {
                        chapterStatus === "completed" ? <FaCheck className='text-white' /> : chapterStatus === "in-process" ? <IoPlay className='text-white' /> : chapterStatus === "locked" && <RiLock2Fill />
                    }
                </div>
                <span>{title}</span>

            </div>
            {
                openChapter ? <MdExpandLess size={20} /> : <MdOutlineExpandMore size={20} />
            }
        </div>
        <div className={`flex flex-col gap-4 ${openChapter && 'mb-10'}`}>
            {
                openChapter && (
                    <>
                        {
                            lessons.map((lesson, index) => <Lesson key={index} {...lesson} />)
                        }
                    </>
                )
            }
        </div>
    </li>
  )
}

export default Chapter