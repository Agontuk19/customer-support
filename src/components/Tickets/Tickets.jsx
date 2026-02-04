import React, { use } from 'react';
import Ticket from '../Ticket/Ticket';

const Tickets = ({ ticketsPromise, statusTasks, setStatusTasks, resolvedTasks }) => {
    const tickets = use(ticketsPromise);
    return (
        <div>
            <p className='font-semibold text-xl text-gray-800 mb-3'>Customer Tickets</p>

            {
                tickets.length === resolvedTasks.length ?
                    <p>No Tickets Available.</p> :
                    <div className='grid md:grid-cols-2 gap-3 items-stretch'>
                        {(tickets.map(ticket =>
                            <Ticket key={ticket.id} ticket={ticket} statusTasks={statusTasks} setStatusTasks={setStatusTasks} 
                            resolvedTasks={resolvedTasks}></Ticket>))}
                    </div>
            }
        </div>
    );
};

export default Tickets;