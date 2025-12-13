import React, { useState } from 'react';
import CountCard from './CountCard/CountCard';


const Cards = () => {
    const [data,setData] = useState([])
    const cardData = fetch('cards.json').then(res =>res.json()).then(data =>setData(data))
    
    return (
        <div className='text-center'>
           <div className='gap-3 mx-auto grid gri md:grid-cols-3 lg:grid-cols-4 max-w-6xl'>
             {
                data.map(cardData=> <CountCard key={cardData.id} cardData={cardData}></CountCard>)
            }
           </div>
        </div>
    );
};

export default Cards;