import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdOutlineElectricBolt, MdShoppingCart } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';


const Navbar = () => {
    return (
        <nav className='cursor-pointer flex items-center justify-between py-4 px-8'>
            <div className="flex items-center gap-10">
                <Link href={'/'}>
                    <Image src={'/logo.svg'} width={200} height={80} alt='Beat Pulse Logo' />
                </Link>
                <ul className="flex items-center gap-4">
                    <li className='text-white font-semibold'>
                        Beats
                    </li>
                    <li className='text-zinc-300'>
                        Licensing
                    </li>
                </ul>
            </div>
            <div className="flex items-center  gap-5">
                <ul className="flex items-center gap-5">
                    <li className='text-zinc-300 flex items-center gap-1'>
                        <TbWorld size={23} />
                        <p className='text-sm'>EN</p>
                    </li>
                    <li className='text-zinc-300 pr-4 border-r border-zinc-500'>Login</li>
                    <li className="flex items-center gap-1">
                        <MdOutlineElectricBolt className='text-white' size={22} />
                        <p className='text-white'>Become Membership</p>
                    </li>
                </ul>
                <div className='flex items-center gap-1 bg-[#E6FB64] text-black py-2 px-3 rounded-md'>
                    <p className="text-sm font-bold">4</p>
                    <MdShoppingCart size={23} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
