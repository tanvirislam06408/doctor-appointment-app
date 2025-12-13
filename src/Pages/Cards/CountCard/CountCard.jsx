import React from 'react';
import CountUp from 'react-countup';

const CountCard = ({cardData}) => {
    const {description,icon,suffix,count,title}=cardData;
    return (
        <div className='border p-10 text-start bg-white rounded-3xl mr-2.5'>
            <h1 className='font-bold text-6xl flex'><CountUp duration={2.75} end={count} /> <span>+</span></h1>
            <h4 className='font-bold text-gray-400 '>{description}</h4>
        </div>
    );
};

export default CountCard;