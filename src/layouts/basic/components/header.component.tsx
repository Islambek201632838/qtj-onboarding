import React, { FC, useState } from 'react';
import '../basic.style.scss';
import { Logo, MenuRight, Search } from 'assets';

import Input from 'components/input/input.component';

const Bell: FC<{ hasNotification: boolean }> = ({ hasNotification = false }) => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_225_129)">
      <path
        d="M8.57227 24.9286H11.4294"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.714 14.2143C15.714 12.6988 15.112 11.2453 14.0403 10.1737C12.9687 9.10204 11.5153 8.5 9.99972 8.5C8.48419 8.5 7.03075 9.10204 5.95911 10.1737C4.88748 11.2453 4.28544 12.6988 4.28544 14.2143V19.2143C4.28544 19.7826 4.05966 20.3277 3.65781 20.7296C3.25595 21.1314 2.71089 21.3571 2.14258 21.3571H17.8569C17.2886 21.3571 16.7434 21.1314 16.3416 20.7296C15.9397 20.3277 15.714 19.7826 15.714 19.2143V14.2143Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.714844 14.0286C0.715614 12.6688 1.03989 11.3287 1.6609 10.119C2.2819 8.90924 3.1818 7.86464 4.28627 7.07143"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.2863 14.0286C19.2856 12.6688 18.9613 11.3287 18.3403 10.119C17.7193 8.90924 16.8193 7.86464 15.7148 7.07143"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    {hasNotification && <circle cx="22" cy="4" r="4" fill="#50B748" />}
    <defs>
      <clipPath id="clip0_225_129">
        <rect width="20" height="20" fill="white" transform="translate(0 6)" />
      </clipPath>
    </defs>
  </svg>
);

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [hasNotification, setHasNotification] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="uk-logo-head uk-scrollspy-inview" />
        <div
          className="uk-navbar-nav uk-scrollspy-inview"
          // uk-scrollspy="cls: uk-animation-fade-medium; delay: 50; repeat: false"
        >
          <a className="uk-navbar-item uk-padding" href="index.html">
            <div className="logo uk-scrollspy-inview" />
          </a>

          <hr className="uk-divider-vertical uk-flex uk-flex-middle uk-visible@l" />

          <div className="uk-navbar-item uk-visible@l uk-scrollspy-inview">
            <span className="logo-ar-long">
              Витрина ассистентов
            </span>
          </div>
        </div>
      </div>
      <div className="navbar-right">
        <div>
          <a href="kz" className={'lang-item'}>
            Қаз
          </a>
          <a href="ru" className={'lang-item active'}>
            Рус
          </a>
          <a href="en" className={'lang-item'}>
            Eng
          </a>
        </div>
        <div className={'right-menu'}>
          <a href="">
            <i className="icn navbar icn_menu"></i>
            {/* <MenuRight /> */}
          </a>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="basicLayout__header">
  //     {/* <div className="basicLayout__header__logo">
  //       <Logo />
  //     </div> */}

  //     {/* <div className="basicLayout__header__right">
  //       <Bell hasNotification={hasNotification} />
  //       <Input name='search' placeholder='Поиск' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} icon={<Search className='search' />} />
  //     </div> */}
  //   </div>
  // );
};

export default Header;
