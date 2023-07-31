"use client"

import React from 'react';

const Lecture = ({params}) => {
    console.log(params)
    return (
        <div>
            Lecture file of clg
            <p>Lecture: {params.lecture[0]}</p>
            <p>Lecture: {params.lecture[1]}</p>
            <p>Lecture: {params.lecture[2]}</p>
        </div>
    );
};

export default Lecture;