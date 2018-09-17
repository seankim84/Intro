import React, { Component } from 'react';
import back from './images/back.jpg';
import "App6.css";

class App extends Component {
  render(){
    return(
      <body>
      <div class="wrapper">

        <nav class="main-nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">AboutMe</a>
            </li>
            <li>
              <a href="#">Education</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <section className="top-container">
          <header className="showcase">
            <h1>Welcome to SeanStagram</h1>
            <p>Learning New Thing Everyday</p>
            <a href="#" class="btn">READ MORE</a>
          </header>
          <div className="top-box top-box-a">
            <h4>Membership</h4>
            <p className="price">$199/mo</p>
            <a href="" className="btn">Buy Now</a>
          </div>
          <div className="top-box top-box-b">
            <h4>Membership</h4>
            <p className="price">$199/mo</p>
            <a href="" className="btn">Buy Now</a>
          </div>
        </section>

        <section class="boxes">
          <div className="box">
            <i class="fab fa-github"></i>
            <h3>Github</h3>
            <p>Sean Github</p>
          </div>
          <div className="box">
            <i class="fab fa-facebook-square"></i>
            <h3>Facebook</h3>
            <p>Sean Facebook</p>
          </div>
          <div className="box">
            <i class="fab fa-linkedin"></i>
            <h3>LinkedIN</h3>
            <p>Sean Linkedin</p>
          </div>
          <div className="box">
            <i class="fab fa-instagram"></i>
            <h3>Instagram</h3>
            <p>Sean Instagram</p>
          </div>
        </section>

        <section className="info">
          <img src={back} alt=""/>
          <div>
            <h2>Your Biz On the Web</h2>
            <p></p>
            <a href="#" className="btn">Learn More</a>
          </div>
        </section>

        <section className="portfolio">
          <img src="https:/source.unsplash.com/random/200x200" />
          <img src="https:/source.unsplash.com/random/201x200" />
          <img src="https:/source.unsplash.com/random/202x200" />
          <img src="https:/source.unsplash.com/random/203x200" />
          <img src="https:/source.unsplash.com/random/204x200" />
          <img src="https:/source.unsplash.com/random/205x200" />
          <img src="https:/source.unsplash.com/random/206x200" />
          <img src="https:/source.unsplash.com/random/207x200" />
          <img src="https:/source.unsplash.com/random/208x200" />
        </section>
        
        <footer>
          <p>Sean &copy; 2018</p>
        </footer>
      
      </div>
      </body>
    )
  }
}

export default App;