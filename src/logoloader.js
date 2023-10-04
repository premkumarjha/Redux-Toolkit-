import React from 'react';
import './logoloader.css'; // You'll create this CSS file for styling
import logo from './assets/images/loaderlogo.jpg'; //image ko export nahi kiya still.., yahi path if pass src to image load nahi....check..

const LogoLoader = () => {
  return (
    // <div className="outer-loader">
    //   <img src="/images/loaderlogo.jpg" alt="Logo" className="logo" />
    //   <div className="spinner"></div>
    // </div>
    <div className="outer-loader">
    <div className="inner-loader">
    <img src={logo} alt="Logo" className="logo" />  
    </div>
  </div>
  );
};

export default LogoLoader;
//loaderlogo.jpg