import React from 'react';

const Header = () => (
    <header id="showcase" className="grid">
        <div className="bg-image" 
         style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/7369/startup-photos.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350)',
            opacity:0.3
          }}>
        </div>
        <div className="content-wrap">
          <h1>Welcome to Sean's PortFolio</h1>
          
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eum error earum soluta voluptatum nisi laboriosam eos saepe asperiores dolorum.</p>
          
          <a className="btn" href="#section-b">Read More</a>
          </div>
        
        </header>
)

export default Header;

