import React from 'react';
import {
  AdjustmentsIcon, AnnotationIcon,
  ArchiveIcon, CogIcon, CreditCardIcon, CurrencyDollarIcon,
  HomeIcon, MenuAlt3Icon, PhoneIncomingIcon, PlusCircleIcon, SaveAsIcon
} from '@heroicons/react/solid';
import Direction from '../components/Ev/Direction';
import Logout from './Logout';

function Sidebar() {
  const username = localStorage.getItem('username');
  const changeWidth=()=>{

  }
  return (
    <div className='h-screen flex flex-col  py-10 text-white bg-[#4c4c4d]'>
      <div className='flex justify-between items-center px-8 mb-8'>
        <span className='capitalize font-bold text-lg'>
          {username}
        </span>
        <MenuAlt3Icon onClick={()=>changeWidth()} className='w-6' />
      </div>
      <Direction url={"/home"} text={'Ana səhifə'} icon={<HomeIcon className='w-5' />} />
      <Direction url={"/contract"} text={'Müqavilə'} icon={<AnnotationIcon className='w-5' />} />
      <Direction url={"#"} text={'Anbar'} icon={<ArchiveIcon className='w-5' />} />
      <Direction url={"#"} text={'Əlavələr'} icon={<PlusCircleIcon className='w-5' />} />
      <Direction url={"#"} text={'Kassa'} icon={<CurrencyDollarIcon className='w-5' />} />
      <Direction url={"#"} text={'Kreditor'} icon={<CreditCardIcon className='w-5' />} />
      <Direction url={"#"} text={'Servislər'} icon={<AdjustmentsIcon className='w-5' />} />
      <Direction url={"#"} text={'Mühasibat'} icon={<SaveAsIcon className='w-5' />} />
      <Direction url={"#"} text={'Operator'} icon={<PhoneIncomingIcon className='w-5' />} />
      <Direction url={"#"} text={'Admin parametrləri'} icon={<CogIcon className='w-5' />} />
      <Logout />
    </div>
  )
}

export default Sidebar;