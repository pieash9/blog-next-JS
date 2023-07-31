import Link from 'next/link';
import React from 'react';

const AboutLayout = ({children}) => {
    return (
        <div>
            <div className="flex gap-10 text-lg">
            <Link href={"/"}>Home</Link>
            <Link href={"/about/about-college"}>About College</Link>
            <Link href={"/about/about-student"}>About student</Link>
            </div>
            {children}
        </div>
    );
};

export default AboutLayout;