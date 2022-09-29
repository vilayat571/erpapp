import { ArrowLeftIcon } from '@heroicons/react/solid';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Goback() {
    const navigate = useNavigate();
    return (
        <button className='w-20 h-auto px-6 py-2 ml-4 
        flex justify-center items-center
        border-none outline-none rounded-sm
        bg-[#4c4c4d] text-white'
            onClick={() => navigate(-1)}>
            <ArrowLeftIcon className='text-[#fff] w-4' />
        </button>
    )
}

export default Goback;