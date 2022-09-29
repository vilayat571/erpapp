import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Goon from '../../parts/Goon';
import { getAttributesOfContract } from '../../redux/reducers/dataReducer';
import Header from './Header';

function Dropdown() {

    const options = useSelector((state) => state.newcontractReducer.users);

    const details = useSelector((state) => state.dataReducer.contractdata);

    const dispatch = useDispatch()

    const [dealer_id, setDealer_id] = useState("");

    const [canvasser_id, setCanvasser_id] = useState("");

    const handleDelaer = (e) => {
        setDealer_id(e.target.value);
    };

    const handleCanvasser = (e) => {
        setCanvasser_id(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getAttributesOfContract({ dealer_id, canvasser_id }))
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className='mt-5 ml-4 '>
                <label className="text-sm" >
                    <Header title={'Dealer'} />
                    <select className=' w-3/4 h-10 bg-[#4c4c4d]
                 outline-none border-nono text-[#ffffff]
                  shadow-md mt-1 rounded-sm py-2 text-sm px-3'
                        id={dealer_id} value={dealer_id} onChange={(e) => handleDelaer(e)}>
                        {
                            options.length > 1 && options.map((option) => (
                                option.asa !== "" && <option className=' hover:bg-[#4c4c4d] text-white '
                                    key={option.id} value={option.id}>{option.asa}</option>
                            ))
                        }
                    </select>
                </label>
            </div>
            <div className='mt-8 ml-4 '>
                <label className="text-sm">
                    <Header title={'Canvasser'} />
                    <select className=' w-3/4 h-10 bg-[#4c4c4d]
                 outline-none border-nono text-[#ffffff]
                  shadow-md mt-1 rounded-sm py-2 text-sm px-3'
                        id={canvasser_id} value={canvasser_id} onChange={(e) => handleCanvasser(e)}>
                        {
                            options.length > 1 && options.map((option) => (
                                option.asa !== "" && <option className=' hover:bg-[#4c4c4d] text-white '
                                    key={option.id} value={option.id}>{option.asa}</option>
                            ))
                        }
                    </select>
                </label>
            </div>
            <br />
            <Goon url="/newcontractpage_2" title={"İrəli"} />
        </form>
    )
}

export default Dropdown;