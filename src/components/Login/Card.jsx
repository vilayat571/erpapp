import React from 'react'
import Form from './Form'
import Header from './Header'

function Card() {
    return (
        <div className='flex flex-col justify-center  items-center px-2 py-2
     h-1/2 w-1/3 rounded bg-white border-none outline-none '>
            <div className='flex flex-col items-center'>
                <Header />
                <Form />
            </div>
        </div>
    )
}

export default Card
