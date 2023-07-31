"use client"

import React from 'react';

const Student = ({params}) => {
    console.log(params)
    return (
        <div>
            <h3>Student Details</h3>
            <p>Name: {params.student}</p>
        </div>
    );
};

export default Student;