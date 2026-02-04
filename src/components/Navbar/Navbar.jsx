import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mx-6 md:mx-10 my-3'>
            <h1 className='text-xl font-bold'>CS - Ticket System</h1>
            <div className='flex gap-5 items-center'>
                <a href="">Home</a>
                <a href="">FAQ</a>
                <a href="" className='hidden md:block'>Changelog</a>
                <a href="" className='hidden md:block'>Blog</a>
                <a href="" className='hidden md:block'>Download</a>
                <a href="">Contact</a>
                <button className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white px-3 py-2 rounded-md'>New Ticket</button>
            </div>
        </div>
    );
};

export default Navbar;