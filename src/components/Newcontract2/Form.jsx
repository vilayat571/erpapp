import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Goon from '../../parts/Goon';
import { getMusteri } from '../../redux/reducers/createMusteriReducer';
import { getBolge } from '../../redux/reducers/getBolgeReducer';
import { getMehsullar } from '../../redux/reducers/getMehsulReducer';
import { getOfis } from '../../redux/reducers/getOfisReducer';

function Form() {

    const formStyle = 'bg-[#f7f7f7] overflow-y-auto text-[#4c4c4d] w-full h-[440px] ml-4 mt-4';

    const inputStyle1 = 'w-full mt-8 shadow-sm h-12 border-none outline-none rounded-sm px-2 py-2 text-sm indent-2 text-[#4c4c4d] placeholder:text-[#4c4c4d]'

    const selectStyle = 'w-full mt-2 h-12 shadow-sm border-none outline-none rounded-sm px-2 py-2 text-sm indent-2 bg-white text-[#4c4c4d]'

    const textareaStyle = 'w-full h-28 mt-8 shadow-sm border-none outline-none  rounded-sm px-2 py-4 text-sm indent-2 text-[#4c4c4d] placeholder:text-[#4c4c4d]'

    const fileStyle = 'w-full mt-8 shadow-sm h-12 border-none outline-none rounded-sm px-2 py-2 text-sm indent-2 text-[#4c4c4d] placeholder:text-[#4c4c4d]  bg-white'
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBolge());
        dispatch(getOfis());
        dispatch(getMehsullar());
    }, [dispatch]);


    const bolgeler = useSelector(state => state.getBolgeReducer.data);
    const [bolge_id, setBolge_id] = useState('')
    const handleBolge = (e) => {
        setBolge_id(e.target.value);
    };

    const mehsullar = useSelector(state => state.getMehsulReducer.mehsullar);

    const [asa, setAsa] = useState('');
    const handleAsa = (e) => {
        setAsa(e.target.value);
    };

    const [tel1, setTel1] = useState("");
    const handleTel1 = (e) => {
        setTel1(e.target.value);
    };

    const [tel2, setTel2] = useState("");
    const handleTel2 = (e) => {
        setTel2(e.target.value);
    };

    const [tel3, setTel3] = useState("");
    const handleTel3 = (e) => {
        setTel3(e.target.value);
    };

    const [tel4, setTel4] = useState("");
    const handleTel4 = (e) => {
        setTel4(e.target.value);
    };


    const [unvan, setUnvan] = useState("");
    const handleUnvan = (e) => {
        setUnvan(e.target.value);
    };


    const [sv_image, setSv_image] = useState('');
    const handleSvg1 = (e) => {
        setSv_image(e.target.files[0]);
    };

    const [sv_image2, setSv_image2] = useState('');
    const handleSvg2 = (e) => {
        setSv_image2(e.target.files[0]);
    };
    /* ******************* */

    const [mehsul_sayi, setMehsul_sayi] = useState("");
    const handleMehsulSayi = (e) => {
        setMehsul_sayi(e.target.value);
    };

    const [mehsul_id, setMehsul_id] = useState('')
    const handleMehsul = (e) => {
        setMehsul_id(e.target.value);
    };

    const ofisler = useSelector(state => state.getOfisReducer.ofis);
    const [ofis_id, setOfis_id] = useState('')
    const handleOfis = (e) => {
        setOfis_id(e.target.value)
    };


    /* ********************** */
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('data2',
            JSON.stringify({
                mehsul_id: mehsul_id,
                mehsul_sayi: mehsul_sayi,
                ofis_id: ofis_id
            }));
        setBolge_id('');
        setMehsul_id('');
        setMehsul_sayi('');
        setAsa('');
        setOfis_id('');
        setSv_image('');
        setSv_image2('');
        setTel1('');
        setTel2('');
        setTel3('');
        setTel4('');
        setUnvan('');
        dispatch(
            getMusteri({
                bolge_id,
                asa,
                sv_image,
                sv_image2,
                tel1,
                tel2,
                tel3,
                tel4,
                unvan,
                qeyd: "yeni musteri"
            })
        );
    };

    return (
        <div className={formStyle}>

            <form
                onSubmit={(e) => handleSubmit(e)}
                className=' mx-8 mb-4 flex flex-col'>

                <input className={inputStyle1}
                    onChange={(e) => handleAsa(e)} placeholder='Müştəri adı , soyadı , ata adı' value={asa} type="text" />

                <input className={inputStyle1}
                    onChange={(e) => handleTel1(e)} placeholder='Watsapp nömrəsi' type="text" value={tel1} />

                <input className={inputStyle1}
                    onChange={(e) => handleTel2(e)} placeholder='Telefon nömrəsi 1' type="text" value={tel2} />

                <input className={inputStyle1}
                    onChange={(e) => handleTel3(e)} placeholder='Telefon nömrəsi 2' type="text" value={tel3} />

                <input className={inputStyle1}
                    onChange={(e) => handleTel4(e)} placeholder='Telefon nömrəsi 3' type="text" value={tel4} />

                <input className={fileStyle}
                    placeholder='Şexsiyyət vəsiqəsi ön'
                    onChange={(e) => handleSvg1(e)}
                    type="file" />

                <input className={fileStyle}
                    placeholder='Şexsiyyət vəsiqəsi arxa'
                    onChange={(e) => handleSvg2(e)}
                    type="file" />


                <label className='mt-8'>
                    Müştəri bölgə
                    <select className={selectStyle}
                        id={bolge_id} value={bolge_id} onChange={(e) => handleBolge(e)}>
                        {
                            bolgeler.length > 1 && bolgeler.map((option, index) => (
                                <option className='text-[#4c4c4d'
                                    key={option.id} value={option.id}>{option.bolge_adi}</option>
                            ))
                        }
                    </select>
                </label>

                <label className='mt-8'>
                    Ofis
                    <select className={selectStyle}
                        id={ofis_id} value={ofis_id} onChange={(e) => handleOfis(e)} >
                        {
                            ofisler.length > 1 && ofisler.map((option, index) => (
                                <option className='text-[#4c4c4d'
                                    key={option.id} value={option.id}>
                                    {option.ofis_adi}
                                </option>
                            ))
                        }
                    </select>
                </label>

                <label className='mt-8'>
                    Məhsul
                    <select className={selectStyle}
                        id={mehsul_id} value={mehsul_id} onChange={(e) => handleMehsul(e)} >
                        {
                            mehsullar.length > 1 && mehsullar.map((option, index) => (
                                <option className='text-[#4c4c4d capitalize'
                                    key={option.id} value={option.id}>
                                    {option.mehsulun_adi}
                                </option>
                            ))
                        }
                    </select>
                </label>

                <textarea className={textareaStyle}
                    onChange={(e) => handleUnvan(e)} placeholder='Yaşayış ünvanı' type="textarea" value={unvan} />

                <input className={inputStyle1}
                    placeholder='Məhsul sayı'
                    value={mehsul_sayi} onChange={(e) => handleMehsulSayi(e)}
                    type="number" />
                <br />
                <Goon url="/newcontractpage_3" title={"İrəli"} />
            </form>
        </div >
    )
}

export default Form;