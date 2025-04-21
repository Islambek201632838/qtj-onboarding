import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './basic.style.scss';
import { Avatar, ChervonRightDouble } from 'assets';
import { routes, routeToIcon } from 'constants/shared.constant';
import { Text } from 'components/text.component';
import QtjLogo from 'assets/images/qtj-logo.png';
import QtjLogoFull from 'assets/images/qtj-logo-full.png';
import { logout } from 'requests/auth.request';
import { useAuth } from 'contexts/auth.context';

const Sidebar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { handleRemoveToken } = useAuth();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const isActiveRoute = (route: string) =>
    location.pathname.split('/').pop() === route ||
    (location.pathname === '/app' && route === 'home');

  const handleLogout = () => {
    handleRemoveToken();
    logout();
  };

  return (
    <div className={`basicLayout__sidebar ${isOpen ? 'open' : ''}`}>
      <div className="basicLayout__sidebar__top">
        <div className="basicLayout__logo">
          {isOpen ? <img src={QtjLogoFull} alt="" /> : <img src={QtjLogo} alt="logo" />}
        </div>
        {isOpen && (
          <div className="history-wrap">
            <h4>Сегодня</h4>
            <ul>
              <li>
                <a href="">Какие бывают типы светофоров и их назначение?</a>
              </li>
              <li>
                <a href="">Что делать при отказе автотормозов?</a>
              </li>
              <li>
                <a href="">В каких случаях заполняется форма ВУ-45?</a>
              </li>
            </ul>
          </div>
        )}
        {/* <nav className="basicLayout__menu">
          <ul>
            {routes.map((route) => (
              <li key={route} className={isActiveRoute(route) ? 'active' : ''}>
                <Link to={`${route}`} className='basicLayout__route'>
                  {isActiveRoute(route) ? routeToIcon[route]?.active : routeToIcon[route]?.inactive}
                  <Text className='basicLayout__route-name' fontSize='1.125rem' color={isActiveRoute(route) ? '#000000' : '#3E3E3E80'} fontWeight={isActiveRoute(route) ? 700 : 400}>
                    {t(`navigation.${route}`)}
                  </Text>
                </Link>
              </li>
            ))}
          </ul>
        </nav> */}
      </div>

      {/* <div className="basicLayout__sidebar__profile" onClick={() => handleLogout()}>
        <Avatar />
        <Text className='basicLayout__sidebar__button-text' color={'#000000'} fontWeight={400}>
          {t(`navigation.logout`)}
        </Text>
      </div> */}
      <div className="basicLayout__sidebar__button-wrapper">
        {isOpen && (
          <div className="basicLayout__sidebar__back-button" onClick={() => navigate(-1)}>
            <Text className="basicLayout__sidebar__back-button-text" fontWeight={400}>
              Назад
            </Text>
          </div>
        )}

        <div className="basicLayout__sidebar__button" onClick={() => setIsOpen(!isOpen)}>
          <ChervonRightDouble />
          <Text className="basicLayout__sidebar__button-text" fontWeight={400}>
            {t(`navigation.collapse`)}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
