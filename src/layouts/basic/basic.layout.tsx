import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AuthGuard } from 'pages/auth-guard';
import Header from './components/header.component';
import Sidebar from './sidebar.component';

const BasicLayout = () => {
  const { pathname } = useLocation();
  const [hideSidebar, setHideSidebar] = useState(true);

  useEffect(() => {
    if (pathname.includes('/app/onboarding')) {
      setHideSidebar(false);
    } else if (pathname.includes('/app/assistants')) {
      setHideSidebar(true);
    }
  }, [pathname]);

  return (
    <AuthGuard>
      <>
        <div className="basicLayout__wrapper">
          {!hideSidebar && (
            <div className="basicLayout__left">
              <Sidebar />
            </div>
          )}
          <div className="basicLayout__right">
            {hideSidebar && <Header />}
            <div className="basicLayout__content">
              <Outlet />
            </div>
          </div>
        </div>
      </>
    </AuthGuard>
  );
};

export default BasicLayout;
