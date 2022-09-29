import { BellIcon, ReceiptRefundIcon, RefreshIcon } from '@heroicons/react/solid';
import React from 'react';
import Logo from '../assets/images/logo.webp'
import Button from './Button';

function Header() {
  return (
    <div className='w-full h-44 flex items-center'>
      <div className='flex w-full items-center relative right-28 bottom-8 justify-end '>
        <img src={Logo} className={'w-44'} alt="" />
      </div>
      <div className='flex text-[#4c4c4d] '>
        <Button text={`Backup ${'&'} Restore`} icon={<ReceiptRefundIcon className='w-6' />} />
        <Button text="Yenilikləri yoxla" icon={<RefreshIcon className='w-6' />} />
        <Button text="Bildirişlər" icon={<BellIcon className='w-6' />} />
      </div>
    </div>
  )
}

export default Header;