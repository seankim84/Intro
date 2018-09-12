import React, { Component } from 'react';
import "App.css";

class App extends Component {
  render(){
    return(
      <body>
          <div className="bg-image" 
               style={{ 
                backgroundImage: 'url(https://images.pexels.com/photos/7369/startup-photos.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350)' ,   
              }}>
            <header id="showcase" className="grid">
              <div className="content-wrap">
                <h1>Welcome to Acme Web Solutions</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eum error earum soluta voluptatum nisi laboriosam eos saepe asperiores dolorum.</p>
                <a href="#section-b" className="btn">Read More</a>
              </div>
            </header>
          </div>
          
        <main id="main">
          <section id="section-a" className="grid">
            <div className="content-wrap">Web & Application Development</div>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </section>

          <section id="section-b" className="grid">
            <ul>
              <li>
                <div className="card">
                  <img src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" alt="" />
                  <div className="card-content">
                    <h3 className="card-title">Web Development</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="card">
                  <img src="https://images.pexels.com/photos/257923/pexels-photo-257923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                  <div className="card-content">
                    <h3 className="card-title">Mobile Development</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </div>
              </li>
               <li>
                <div className="card">
                  <img src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" alt="" />
                  <div className="card-content">
                    <h3 className="card-title">GraphQL Development</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          <section id="sectionp-c" className="grind">
            <div className="content-wrap">
              <h2 className="content-title">
                We handle all of digital needs
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </section>

          <section id="section-d" className="grid">
            <div className="box">
              <h2 className="content-title">Contact Us</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p>sean.kim84@gmail.com</p>
            </div>
            <div class="box">
              <h2 className="content-title">About Our Company</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </section>
        </main>

        <footer id="main-footer" className="grid">
          <div>Acem WebSolution</div>
          <div>Project By <a href="https://github.com/seankim84" target="blank">PortFolio</a></div>
        </footer>
      </body>
    )
  }
}

export default App;

