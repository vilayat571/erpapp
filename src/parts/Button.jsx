import React from 'react';


function Button({ text, icon }) {
    return (
        <button className='flex w-28 flex-col items-center relative bottom-8'>
            {icon}
            <span className='capitalize font-bold text-xs mt-1'>
                {text}
            </span>
        </button>
    )
}

export default Button;