import React from "react";
import Navbar from "./Navbar";

const Header = () => {

  return (
    <div className="banner">
       
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Pizza Devlivery</h3>
            <h1>MAESTRO PIZINNI</h1>
            <p>
            hii, you are welcomed ,we provide you all type of fast food like pizza,burger.
                  So please come in our website and we will served you best pizza..
            </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
                DEVLERY NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
