import React from 'react';
import { toast } from 'react-toastify';

const TicketStatus = ({ statusTasks, setStatusTasks, resolvedTasks, setResolvedTasks }) => {
    const updateTask = (task) => {
        const updatedStatusTasks = statusTasks.filter(title => title !== task);
        setStatusTasks(updatedStatusTasks);
        const updatedResolvedTasks = [...resolvedTasks, task];
        setResolvedTasks(updatedResolvedTasks);
        toast("Task Resolved Succesfully");
    }
    return (
        <div>
            <p className='font-semibold text-xl pb-3 mt-4 md:mt-0'>Ticket Status</p>
            <div>
                {   
                    statusTasks.length === 0 ? 
                    <p>No tasks added yet.</p> :
                    statusTasks.map(task => {
                        return (
                            <div className='bg-white rounded-sm p-3 shadow-sm mb-2'>
                                <p>{task}</p>
                                <button onClick={() => updateTask(task)} className='bg-[#02A53B] text-white rounded-sm w-full mt-1 py-1'>Complete</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default TicketStatus;