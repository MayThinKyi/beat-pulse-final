import React from 'react'

interface Props {
    title: string;
    subTitle: string;
}

const AppHeading = ({ title, subTitle }: Props) => {
    return (
        <div>
            <h1 className='text-4xl font-bold mb-1'>{title}</h1>
            <p className='text-zinc-400'>{subTitle}</p>
        </div>
    )
}

export default AppHeading
