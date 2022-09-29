import React from 'react'
import Input from '../../components/Allcontract/Input'
import Datatable from '../../components/Allcontract/Datatable'
import Filter from '../../components/Allcontract/Filter'
import Layout from '../../layout/Layout'

function Allcontract() {
  return (
  <Layout>
      <div className='flex mx-4 overflow-x-auto '>
      <Input /> 
      <Filter />
    </div>
    <div className=' my-4 overflow-x-auto mx-4'>
      <Datatable />
    </div>
  </Layout>
  )
}

export default Allcontract
