import React from 'react';
import calImg from '../../assets/calendar.png'

const Ticket = ({ ticket }) => {
    const { id, title, description, customer, priority, status, createdAt } = ticket;
    return (
        <div>
            <div className='bg-white p-4 rounded-sm space-y-1 h-full'>
                <div className='flex justify-between items-center gap-1'>
                    <p>{title}</p>
                    <div className={`flex items-center gap-1 rounded-2xl text-sm py-1 px-2 whitespace-nowrap
                        ${status === "Open" ? 'bg-[#B9F8CF] text-[#0B5E06]' : 'bg-[#F8F3B9] text-[#9C7700]'}`}>
                        <div className={`w-3 h-3 rounded-full ${status === "Open" ? 'bg-[#02A53B]' : 'bg-[#FEBB0C]'}`}></div>
                        {status}
                    </div>
                </div>
                <p className='text-[0.9rem] text-gray-500'>{description}</p>
                <div className='flex flex-col xl:flex-row justify-between text-[0.9rem] text-gray-700'>
                    <div className='flex gap-3 justify-between'>
                        <p>#{id}</p>
                        <p className={`
                        ${priority === "HIGH PRIORITY" ? 'text-red-500' :
                                priority === "MEDIUM PRIORITY" ? 'text-yellow-500' :
                                    priority === "LOW PRIORITY" ? 'text-green-500' : ''
                            }`}>
                            {priority}
                        </p>
                    </div>
                    <div className='flex gap-3 justify-between items-center'>
                        <p>{customer}</p>
                        <span className='flex items-center gap-0.5'>
                            <img src={calImg} alt="" className='h-4 w-4' />
                            <p>{createdAt}</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;