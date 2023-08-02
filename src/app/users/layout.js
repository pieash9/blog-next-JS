import Link from 'next/link';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <nav className='flex gap-5'>
                <Link className='hover:text-red-500' href='/'>Home</Link>
                <Link className='hover:text-red-500' href='/users/about'>about</Link>
                <Link className='hover:text-red-500' href='/users/school'>school</Link>
            </nav>
            {children}
        </div>
    );
};

export default layout;