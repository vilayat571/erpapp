import React from 'react';
import { useNavigate } from 'react-router-dom'

function Goon({ url, title }) {
    const navigate = useNavigate();
    const handleNavigate = () => {
        setTimeout(() => {
            navigate(url)
        }, 1000);
    }
    return (
        <button className='w-20 h-auto px-12 text-2m py-1 ml-4 
        flex justify-center items-center
        border-none outline-none rounded-sm
        bg-[#4c4c4d] text-white '
            onClick={handleNavigate}>
            {title}
        </button>
    )
}

export default Goon;