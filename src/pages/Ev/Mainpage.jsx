import React, { useEffect, useState } from 'react';
import Cardimage from '../../components/Ev/Cardimage';
import Layout from '../../layout/Layout';
import Magnus from '../../assets/images/magnus.webp';
import Ocean from '../../assets/images/ocean.webp';


function Mainpage() {
  const [file,setFile]=useState('');
const handleChange=(e)=>{
let files=e.target.files;
let reader=new FileReader();
let dat=new FormData();
reader.readAsDataURL(files[0]);
reader.onload=(e)=>{
  console.log(e.target.result)
}
}

  return (
    <Layout>
   {/*    <div className='flex justify-center items-center h-screen relative bottom-20 '>
        <div className='flex shadow-xl relative bottom-10 px-10 py-10 items-center'>
          <Cardimage src={Magnus} alt={"image1"} size={'w-60 h-60'} />
          <Cardimage src={Ocean} alt={"image2"} size={'mt-20 w-60 h-50'} />
        </div>
      </div> */}
      <input type="file" name="file" id="file" onChange={(e)=>handleChange(e)} />
    </Layout>
  )
};

export default Mainpage;