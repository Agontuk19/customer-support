import React from 'react';
import X from '../../assets/x.png'
import linkedIn from '../../assets/linkedIn.png'
import fb from '../../assets/fb.png'
import support from '../../assets/support.png'
const Footer = () => {
    return (
        <div>
            <div className='md:grid md:grid-cols-11 gap-5 space-y-4'>
                <div className='col-span-3 md:mr-7'>
                    <h2 className='font-bold mb-1 text-xl'>CS — Ticket System</h2>
                    <p className="text-[#A1A1AA] text-[0.9rem]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='col-span-2'>
                    <h3 className='font-bold text-lg mb-2'>Company</h3>
                    <ul className="text-[#A1A1AA] space-y-2">
                        <li>About Us</li>
                        <li>Our Mission</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='col-span-2'>
                    <h3 className='font-bold text-lg mb-2'>Services</h3>
                    <ul className="text-[#A1A1AA] space-y-2">
                        <li>Products & Services</li>
                        <li>Customer Stories</li>
                        <li>Download Apps</li>
                    </ul>
                </div>
                <div className='col-span-2'>
                    <h3 className='font-bold text-lg mb-2'>Information</h3>
                    <ul className="text-[#A1A1AA] space-y-2">
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Join Us</li>
                    </ul>
                </div>
                <div className='col-span-2'>
                    <h3 className='font-bold text-lg mb-2'>Social Links</h3>
                    <ul className="text-[#A1A1AA] space-y-2">
                        <li className='flex items-center gap-2'><img src={X} alt="" className='h-5 w-5'/>@CS — Ticket System</li>
                        <li className='flex items-center gap-2'><img src={linkedIn} alt="" className='h-5 w-5'/>@CS — Ticket System</li>
                        <li className='flex items-center gap-2'><img src={fb} alt="" className='h-5 w-5'/>@CS — Ticket System</li>
                        <li className='flex items-center gap-2'><img src={support} alt="" className='h-5 w-5'/>support@cst.com</li>
                    </ul>
                </div>
            </div>
            <hr className='mt-5 text-[#A1A1AA]' />
            <p className='text-center text-[0.8rem] md:text-[0.9rem] p-2'>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
    );
};

export default Footer;