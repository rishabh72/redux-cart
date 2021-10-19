import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { BsCart3 } from 'react-icons/bs';
import { useSelector } from 'react-redux';

function Header() {
  const cartNums = useSelector((state) => state.products.cartNums);

  return (
    <div className='header'>
      <div className='header__content'>
        <div className='header__logo-box'>
          <Link className='header__logo' to='/'>
            Redux Cart
          </Link>
        </div>

        <div>
          <Link className='header__btn' to='/cart'>
            <span className='header__btn-badge'>{cartNums}</span>
            <BsCart3 size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
