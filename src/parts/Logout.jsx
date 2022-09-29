import { LogoutIcon } from '@heroicons/react/solid';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();
    const clearCashe = () => {
        localStorage.clear();
        navigate('/');
    }
    return (
        <div className='flex items-center mt-6 px-8'>
            <LogoutIcon className='w-5' />
            <button onClick={() => clearCashe()} className='ml-8 capitalize font-bold text-sm'>
                Hesabdan çıxış
            </button>
        </div>
    )
}

export default Logout
