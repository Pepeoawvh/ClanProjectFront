import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="left">
          <p>Av. La Plaza 13405, Las Condes</p>
        </div>
        <div className="center">
          <p><em>Copyright 2023 ® All Rights Reserved - Clan SPA.</em></p>
        </div>
        <div className="right">
          <a href="#"><img src="/img/icons/ig.png" alt="Instagram" /></a>
          <a href="#"><img src="/img/icons/fb.png" alt="Facebook" /></a>
          <a href="#"><img src="/img/icons/wsp.webp" alt="WhatsApp" /></a>
          <a href="#"><img src="/img/icons/admin.png" alt="Admin Panel" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
