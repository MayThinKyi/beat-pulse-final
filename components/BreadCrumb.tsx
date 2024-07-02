import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';

interface Props {
    title: string;
    subTitle: string;
}

const BreadCrumb = ({ title, subTitle }: Props) => {
    return (
        <div className='flex items-center gap-2'>
            <p className='text-sm text-zinc-100  '>{title}</p>
            <MdKeyboardArrowRight className='text-white' />
            <p className='text-sm text-white  '>{subTitle}</p>
        </div>
    )
}

export default BreadCrumb
