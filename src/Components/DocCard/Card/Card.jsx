import React from 'react';
import docimg from '../../../assets/doctor-sample.png'

const Card = ({doctor}) => {
const {name,image,badge,experience_years,education,registration_number}=doctor;
    
    return (
      <div className="card bg-base-100 w-96 shadow-sm">
  <figure className=''>
    <img
      src={docimg}
      alt="Shoes" />
  </figure>
  <div>
    
  </div>
  <div className="card-body">
    <h2 className="card-title">
     {name}
     
    </h2>
     <div className="text-start">{education}</div>
    <p className='text-start'>Reg No: {registration_number}</p>
    <div>
      <button className='btn btn-primary m-2'>View Details</button>
    </div>
    <div className="card-actions justify-end">
      {
        badge==="no"?<div className="badge badge-outline">Available</div>:<div className="badge badge-outline">Not Available</div>
      }
      <div className="badge badge-outline">{experience_years} <h2>Years+ Experience</h2></div>
    </div>
  </div>
</div>
    );
};

export default Card;