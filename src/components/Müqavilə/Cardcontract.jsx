import React from 'react'
import { Link } from 'react-router-dom'
import Cardheader from '../../atoms/Müqavilə/Cardheader'
import Cardimg from '../../atoms/Müqavilə/Cardimg'
import Cardtitle from '../../atoms/Müqavilə/Cardtitle'

function Cardcontract({ url, header, title, img }) {
    return (
        <Link className='w-3/4' to={url}>
            <div className='w-full mt-6 h-28 shadow-md bg-[#fdfdfd]
         flex justify-between px-8 py-4 items-center text-[#444444]
          rounded-sm border-none outline-none'>
                <div className='w-96 flex flex-col '>
                    <Cardheader header={header} />
                    <Cardtitle title={title} />
                </div>
                <div>
                    <Cardimg src={img} />
                </div>
            </div>
        </Link>
    )
}

export default Cardcontract
