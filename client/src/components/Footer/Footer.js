import React from 'react';
import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs';

// TO-DO: Connect links
// add social icons
// connect icons to page links
const Footer = () => {
  return (
    <footer className='footer grid grid-flow-col p-10  justify-between bg-base-200 text-base-content rounded absolute'>
      <div className='grid col-span-2 gap-4 '>
        <p className='text-lg font-bold pb-3'>HARP</p>
        <p className='link link-hover'>About Us</p>
        <p className='link link-hover'>Contact</p>
        <p className='link link-hover'>Terms & Privacy</p>
        <p className='pt-3'>Copyright © 2022 - All rights reserved by HARP Ltd</p>
      </div>

      <div>
        <div className='col-span-2 sm:grid sm:grid-flow-col sm:gap-4 place-content-end'>
          <BsInstagram style={{ margin: "7px", width: "20px", height: "20px" }} />
          <BsTwitter style={{ margin: "7px", width: "20px", height: "20px" }} />
          <BsFacebook style={{ margin: "7px", width: "20px", height: "20px" }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
