import { useState } from 'react';

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    const dropdownList = [
    { text: 'Internet', href: '#' },
    { text: 'Books', href: '#' },
    { text: 'Open Source', href: '#' },
    ];
    return(
        <nav className='py-10'>
            <div className='container mx-auto'>
                <div className='flex items-center'>
                    <div className='w-1/12 flex items-center'>
                        <div className='h-10 w-10 bg-gray-500 rounded flex justify-center items-center mr-3 shadow-xl'>E</div>
                        Epictetus
                        </div>
                    <div className='w-9/12'>
                        <ul className='flex items-center space-x-14 justify-center'>
                            <li><a href='#' className='hover:underline'>UI Design</a></li>
                            <li><a href='#' className='hover:underline'>Front-End</a></li>
                            <li><a href='#' className='hover:underline'>Back-End</a></li>
                            <li className='relative'>
                            <a className='hover:underline cursor-pointer flex items-center' onClick={() => setDropdown(!dropdown)}>
                                Lainnya <svg className='ml-1' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </a>
                            { dropdown && (
                                <ul className='absolute w-[200px] rounded shadow-lg mt-4 bg-gray-800'>
                                {dropdownList.map(({ text, href }) => (
                                    <li key={text} className="border-b border-white/5 last:border-0">
                                    <a href={href} className='py-3 px-5 flex hover:bg-gray-700/60'>
                                        {text}
                                    </a>
                                    </li>
                                ))}
                                </ul>
                            )}
                            </li>
                        </ul>
                    </div>
                    <div className='w-2/12'>
                        <input className="py-2 px-5 bg-gray-800 w-full rounded-full" placeholder='Search..' />
                    </div>
                </div>
            </div>
        </nav>
    );
}