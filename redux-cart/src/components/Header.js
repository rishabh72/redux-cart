import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import { useSelector } from 'react-redux';

function Header() {
  const cartNums = useSelector((state) => state.products.cartNums);

  return (
    <div className=' h-15  fixed  w-full  bg-pink-500 p-6 '>
      <div className='flex justify-center items-center'>
        <div className='mr-auto '>
          <Link className='text-white font-bold  text-xl' to='/'>
            Redux Cart
          </Link>
        </div>

        <div className=' pr-4'>
          <Link className='relative inline-block' to='/cart'>
            <span
              className=' h-6 w-6 bg-gray-500 text-white p-1 
          flex justify-center items-center  
          rounded-full absolute text-xs 
           -top-4  -right-3
          '
            >
              {cartNums}
            </span>
            <BsCart3 size={22} color='#fff' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
