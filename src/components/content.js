import React from 'react';
import BG from 'images/back.jpg'
import 'App.css';

const Content = () => (
  <div className="content">
    <img src={BG} alt="Background" />
    <div className="circle">
        <i class="fas fa-chevron-left"></i>
        <i class="fas fa-chevron-right"></i>
    </div>
  </div>
);

export default Content;

