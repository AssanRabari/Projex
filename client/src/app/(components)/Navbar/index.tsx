import React from 'react'
import {Search} from "lucide-react"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-white px-4 py-3 dark:bg-black'>
        {/* Search Bar */}
        <div className="flex items-center gap-8">
            <div className="relative flex h-min w-[200px]">
                <Search className='absolute left-[5px] top-[8px] mr-2 h-5 w-5 -translate-1/2 transform cursor-pointer dark:text-white'/>
                <input 
                    type="search" 
                    placeholder='Searh...' 
                    className='w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder:gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white'
                 />
            </div>
        </div>
    </div>
  )
}

export default Navbar