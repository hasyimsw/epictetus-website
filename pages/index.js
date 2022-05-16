import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white'>
      <nav className='py-10'>
        <div className='container mx-auto'>
          <div className='flex items-center'>
            <div className='w-2/12 flex items-center'>
              <div className='h-10 w-10 bg-gray-500 rounded flex justify-center items-center mr-4 shadow-xl'>E</div>
              Epictetus
            </div>
            <div className='w-8/12'>
              <ul className='flex items-center space-x-14 justify-center'>
                <li><a href='#' className='hover:underline'>UI Design</a></li>
                <li><a href='#' className='hover:underline'>Front-End</a></li>
                <li><a href='#' className='hover:underline'>Back-End</a></li>
                <li><a href='#' className='hover:underline'>Lainnya</a></li>
              </ul>
            </div>
            <div className='w-2/12'>
              <input className="py-2 px-5 bg-gray-700 w-full rounded-full" placeholder='Search..' />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
