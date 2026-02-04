import React from 'react';

const ResolvedTasks = ({ resolvedTasks }) => {
    return (
        <div className='mt-5'>
            <p className='font-semibold text-xl mb-2'>Resolved Tasks</p>
            <div>
                {
                    resolvedTasks.length === 0 ?
                        <p>No resolved tasks yet.</p> :
                        resolvedTasks.map(task => {
                            return (
                                <div className='bg-[#E0E7FF] rounded-sm p-3 shadow-sm mb-2'>
                                    <p>{task}</p>
                                </div>
                            )
                        })
                }

            </div>
        </div>
    );
};

export default ResolvedTasks;