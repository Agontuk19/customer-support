import React, { use } from 'react';
import Ticket from '../Ticket/Ticket';

const Tickets = ({ ticketsPromise }) => {
    const tickets = use(ticketsPromise);
    return (
        <div>
            <p className='font-semibold text-xl text-gray-800 mb-3'>Customer Tickets</p>
            <div className='grid md:grid-cols-2 gap-3 items-stretch'>
                {
                    tickets.map(ticket => <Ticket key={ticket.id} ticket={ticket}></Ticket>)
                }
            </div>

        </div>
    );
};

export default Tickets;