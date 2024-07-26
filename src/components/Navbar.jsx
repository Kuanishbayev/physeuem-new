import { useState } from 'react'
import logo from '../assets/img/logo.png'
import { IoMdSettings } from 'react-icons/io'
import { MdHelpOutline } from 'react-icons/md'
import { IoLogOutOutline } from 'react-icons/io5'

const Navbar = () => {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false)
  return (
    <nav className='sticky top-0 bg-white py-4'>
        <div className='max-w-[1280px] mx-auto flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <img src={logo} alt="Logo" className='h-12' />
                <div className='logo text-3xl'>physeum</div>
            </div>
            <div className='relative cursor-pointer size-10 rounded-full bg-orange-800 text-white flex justify-center items-center text-xl' onClick={() => setAccountMenuOpen(prev => !prev)}>
              <span>A</span>
              {
                accountMenuOpen && (
                <div className='absolute top-[130%] right-0 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.2)] text-stone-500 rounded-md'>
                  <div className='p-4 border-b-2'>
                    <p className='whitespace-nowrap font-bold'>Azamat Kosherbayev</p>
                    <p className='whitespace-nowrap'>Go to profile</p>
                  </div>
                  <ul className='p-4'>
                    <li className='flex items-center gap-2 hover:bg-slate-100 p-2 rounded'>
                      <IoMdSettings />
                      <span>Settings</span>
                    </li>
                    <li className='flex items-center gap-2 hover:bg-slate-100 p-2 rounded'>
                      <MdHelpOutline />
                      <span>Help</span>
                    </li>
                    <li className='flex items-center gap-2 hover:bg-slate-100 p-2 rounded'>
                      <IoLogOutOutline />
                      <span>Log Out</span>
                    </li>
                  </ul>
                </div>
                )
              }
            </div>
        </div>
    </nav>
  )
}

export default Navbar