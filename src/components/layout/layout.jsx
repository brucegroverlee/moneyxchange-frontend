import React from 'react';

import Footer from '@components/footer/footer';

import './layout.scss';

const Layout = ({children}) => {
  return(
    <div className="layout-container">
      <div className="layout-container__bg">
        <div className="layout-container__navbar"></div>
        <div className="layout-container__title"></div>
        <div className="layout-container__content">
          {children}
        </div>
      </div>
      <div className="layout-container__footer">
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
