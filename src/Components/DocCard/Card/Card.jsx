import React from 'react';

const Card = ({doctor}) => {
const {name}=doctor;
    
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Card;