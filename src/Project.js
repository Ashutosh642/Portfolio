import React from "react";
import "./Project.css";
// import Project1 from './img/portfolio-1.jpg';
// import Project2 from './img/portfolio-2.jpg';
// import Project3 from './img/portfolio-3.jpg';
// import Project4 from './img/portfolio-4.jpg';

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
            There are different types of projects available 
        </p>
        <p className="heading p__color">
            which inludes the technnolgies such as HTML, CSS, Bootstrap, React Js, Java Script, jQuery.
        </p>
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src='http://cdn.onlinewebfonts.com/svg/img_543655.png' alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Cure Fit</h4>
                     <a href="https://github.com/Ashutosh642/Curefit" target="_" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src='http://cdn.onlinewebfonts.com/svg/img_543655.png' alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Flipkart</h4>
                     <a href="https://github.com/Ashutosh642/flipkart-react" target="_" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src='http://cdn.onlinewebfonts.com/svg/img_543655.png' alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Expense List</h4>
                     <a href="https://github.com/Ashutosh642/ExpenseList" target="_" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src='http://cdn.onlinewebfonts.com/svg/img_543655.png' alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Friends List</h4>
                     <a href="https://github.com/Ashutosh642/FriendList" target="_" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src='http://cdn.onlinewebfonts.com/svg/img_543655.png' alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Portfolio</h4>
                     <a href="#" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src='http://cdn.onlinewebfonts.com/svg/img_543655.png' alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Food order app</h4>
                     <a href="https://github.com/Ashutosh642/food-order-app" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>
             
             <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <a href="https://github.com/Ashutosh642?tab=repositories" target="_"><button className="view__more pointer btn">View more</button></a>
             </div>

           </div>
       </div>
    </div>
  );
}

export default Project;