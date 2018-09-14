import React, {Component} from 'react';
import "App3.css";


class App extends Component {
  render() {
    return (
      <body>
        <header>
          <div className="title">Seanstagram</div>
          <div className="navigation">
            <ul>
              <li>AboutMe</li>
              <li>Resume</li>
              <li>Education</li>
              <li>Contact</li>
            </ul>
          </div>
        </header>

        <div id="section">
          <div className="bg"></div>   
          <div className="section-content">
            <div><h1>Hellow Wecome to the Seanstagram</h1></div>
            <div><p>Learning ONE NEW Things Everyday </p></div>
            <div className="btn">Knowing Each Other</div>
          </div>    
        </div>

        <footer>
          <div className="footer-navigation">
            <div className="box">@Copyright</div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <div className="footer-term"></div>
        </footer>
      </body>  
    );
  }
}

export default App;