import React from 'react';
import { Link } from 'react-router-dom';

function Direction({ text, icon,url }) {
    return (
        <Link to={url} className='flex items-center mt-6 px-8'>
            {icon}
            <span className='ml-8 capitalize font-bold text-sm'>
                {text}
            </span>
        </Link>
    )
}

export default Direction;