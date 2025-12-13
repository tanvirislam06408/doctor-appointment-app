import React from 'react';
import Card from '../Cards/Cards';
import Cards from '../Cards/Cards';

const CompleteHook = () => {
    return (
        <div>
            <div className='text-center space-y-3 mt-11'>
                <h1 className='font-bold text-gray-500 text-5xl'>We Provide Best Medical Services</h1>
            <p className='font-normal text-gray-400'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            <Cards></Cards>
            </div>
        </div>
    );
};

export default CompleteHook;