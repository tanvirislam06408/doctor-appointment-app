import React, { useEffect, useState } from 'react';
import Card from './Card/Card';

const DocCard = () => {
    const [docData,setDocData]= useState([]);
    useEffect(()=>{
        fetch('/docData.json').then(res=>res.json()).then(data=>setDocData(data))
    },[])
    console.log(docData);
    
    return (
        <div>
            {
                docData.map(doctor=><Card doctor={doctor}></Card>)
            }
        </div>
    );
};

export default DocCard;