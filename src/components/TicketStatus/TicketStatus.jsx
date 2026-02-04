import React from 'react';

const TicketStatus = () => {
    return (
        <div>
            <p className='font-semibold text-xl pb-3 mt-4 md:mt-0'>Ticket Status</p>
            <div>
                <div className='bg-white rounded-sm p-3 shadow-sm mb-2'>
                    <p>Payment Failed - Card Declined</p>
                    <button className='bg-[#02A53B] text-white rounded-sm w-full mt-1 py-1'>Complete</button>
                </div>
                <div className='bg-white rounded-sm p-3 shadow-sm mb-2'>
                    <p>Payment Failed - Card Declined</p>
                    <button className='bg-[#02A53B] text-white rounded-sm w-full mt-1 py-1'>Complete</button>
                </div>
            </div>
        </div>
    );
};

export default TicketStatus;