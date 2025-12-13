import React, { useEffect, useState } from 'react';
import Card from './Card/Card';

const DocCard = () => {
    const [docData,setDocData]= useState([]);
    useEffect(()=>{
        fetch('/docData.json').then(res=>res.json()).then(data=>setDocData(data))
    },[])
    console.log(docData);
    
    return (
        <div className='text-center'>
            <h1 className='text-4xl font-extrabold'>Our Best Doctors</h1>
            <p className='text-gray-600'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. <br /> Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
           <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3.5 text-center place-items-center'>
             {
                docData.map(doctor=><Card doctor={doctor}></Card>)
            }
           </div>
        </div>
    );
};

export default DocCard;