import React, { Component } from 'react';
import "App2.css";

class App extends Component {
  render() {
    return (
      <body>
        <header>
          <div className="title">Seanstagram</div>
          <div className="content">
            <ul>
              <li>AboutMe</li>
              <li>Resume</li>
              <li>Education</li>
              <li>Contact</li>
            </ul>
          </div>
        </header>

        <div id="section-a">
          <div className="bg"></div>
          <div className="over-content">
            <h1>Welcome to Seanstagram. Learning ONE NEW THING Everyday</h1>
            <p>Let's learn about each other.</p>
            <div className="btn">Look at about ME</div>
          </div>
        </div>
        <div id="section-b">
          <div className="content">
            <div className="box"></div>
            <div classname="box"></div>
            <div classname="box"></div>
            <div classname="box"></div>
          </div>
        </div>
      </body>
    )
  }
}

export default App;