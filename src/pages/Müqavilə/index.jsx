import React from 'react';
import Cardcontract from '../../components/Müqavilə/Cardcontract';
import Layout from '../../layout/Layout';

function Contractpage() {
  const src = 'https://www.pngmart.com/files/8/Contract-PNG-HD.png'
  return (
    <Layout>
      <div className='h-auto mt-5 flex flex-col justify-around items-center'>
        <Cardcontract url={"/allcontract"} header={"Bütün müqavilələr"}
          title={"Bütün müqavilələri görmək üçün klikləyin"} img={src} />
        <Cardcontract url={"/newcontract"} header={"Yeni müqavilə"}
          title={"Yeni müqavilə əlavə etmək üçün klikləyin"} img={src} />
      </div>
    </Layout>
  )
}

export default Contractpage;