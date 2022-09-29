import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../parts/Header';
import Sidebar from '../parts/Sidebar';

function Layout({ children }) {
    
    const pathname = window.location.pathname;
    const navigate = useNavigate();
    useEffect(() => {
      if (localStorage.getItem('token') === null) {
        navigate('/');
      }
    }, [])

    return (
        <React.Fragment>
            <div className='flex '>
                    {pathname !== '/' && <Sidebar />}
                <div className="w-4/5 flex flex-col">
                    {pathname !== '/' && <Header />}
                    {children}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Layout;