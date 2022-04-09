import React from 'react'
import './Service.css'

const Service = () => {
    return (
        <div className="service component__space" id="Skills">

      <div className="heading">
        <h1 className="heading">My Skills</h1>
        {/* <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration.
        </p> */}
      </div>

      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
              <span class="iconify" data-icon="logos:html-5"></span>
              </div>
              <div className="service__meta">
                <h1 className="service__text">HTML</h1>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
              <span class="iconify" data-icon="logos:css-3-official"></span>
              </div>
              <div className="service__meta">
                <h1 className="service__text">CSS</h1>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
              <span class="iconify" data-icon="logos:bootstrap"></span>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Bootstrap</h1>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
              <span class="iconify" data-icon="logos:sass"></span>
              </div>
              <div className="service__meta">
                <h1 className="service__text">SASS</h1>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
              <span class="iconify" data-icon="logos:javascript"></span>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Java Script</h1>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
              <span class="iconify" data-icon="logos:jquery"></span>
              </div>
              <div className="service__meta">
                <h1 className="service__text">jQuery</h1>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
              <span class="iconify" data-icon="logos:react"></span>
              </div>
              <div className="service__meta">
                <h1 className="service__text">React Js</h1>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
              <span class="iconify" data-icon="logos:redux"></span>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Redux</h1>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    )
}

export default Service

