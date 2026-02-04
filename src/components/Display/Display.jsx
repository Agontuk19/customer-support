import React from 'react';
import bgImg from '../../assets/vector1.png'

const Display = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center gap-3 mx-10 md:mx-15 xl:mx-20 py-8 lg:py-15'>
            <div className='flex-1 flex flex-col justify-center items-center text-white rounded-lg bg-linear-to-br from-[#632EE3] to-[#9F62F2] relative overflow-hidden h-55 py-5 md:py-0 w-full'>
                <div className='bg-cover bg-center w-1/2' style={{ backgroundImage: `url(${bgImg})` }}>
                </div>
                <div className='absolute inset-0 flex'>
                    <div className='w-1/2 bg-cover' style={{ backgroundImage: `url(${bgImg})` }}></div>
                    <div className='w-1/2 bg-cover scale-x-[-1]' style={{ backgroundImage: `url(${bgImg})` }}></div>
                </div>
                <p className='text-lg'>In-Progress</p>
                <p className='text-7xl'>0</p>
            </div>
            <div className='flex-1 flex flex-col justify-center items-center text-white rounded-lg bg-linear-to-br from-[#54CF68] to-[#00827A] relative overflow-hidden h-55 py-5 md:py-0 w-full'>
                <div className='bg-cover bg-center w-1/2' style={{ backgroundImage: `url(${bgImg})` }}>
                </div>
                <div className='absolute inset-0 flex'>
                    <div className='w-1/2 bg-cover' style={{ backgroundImage: `url(${bgImg})` }}></div>
                    <div className='w-1/2 bg-cover scale-x-[-1]' style={{ backgroundImage: `url(${bgImg})` }}></div>
                </div>
                <p className='text-lg'>Resolved</p>
                <p className='text-7xl'>0</p>
            </div>
        </div>
    );
};

export default Display;