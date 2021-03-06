import React from 'react'
import './About.css'

const About = () => {
  //  Up To Top Btn
  window.addEventListener("scroll", function(){
    const upToTop = document.querySelector("a.bottom__to__top");
     upToTop.classList.toggle("active", window.scrollY > 0)
  });

  
    return (
        <div className="about component__space" id="About" style={{'padding':'400px 0'}}>
          <div className="container" >
            <div className="row">
              <div className="col__2">
                  <div className="about__img"></div>
              </div>
              <div className="col__2">
                <h1 className="about__heading">About Me</h1>
                <div className="about__meta">
                  <p className="about__text p__color">
                    Hey there 🙋🏻‍♂️...
                    I am a experienced UI Developer with a demonstrated history of working in the information technology and services industry.
                    Have got good hands-on experience in web development which includes HTML / CSS / Bootstrap/ jQuery / React / Redux / Java Script(ES6 features).
                    Excellent communication and presentation skills. Excellent problem solving skills with expertise in identifying/mitigating risks. Proficient in working 
                    on projects with expertise in requirements gathering/analysis, workflow analysis and developing UI code.
                  </p>
                  <div className="about__button d__flex align__items__center">
                  <a href="./Ashutosh's-Resume.pdf" download>
                      <button className="about btn pointer">Download Cv</button>
                 </a>
                    <a href="#Contact">
                      <button className="about btn pointer">Hire Me</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* UP TO TOP BTN */}
          <div className="up__to__top__btn">
            <a href="#" className="bottom__to__top">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-up white"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
              />
            </svg>
            </a>
          </div>
        </div>
    )
}

export default About;
