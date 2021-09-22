import React, { useState, useEffect } from "react";
import "./getInTouch.styles.scss";
import Header from "../header/Header.components";
import MenuComponent from "../../components/Menu/Menu";
import gsap from "gsap/all";
import Aos from "aos";
import Form from "../form/Form.component";
import AfterSubmit from '../AfterSubmit/AfterSubmit';


const GetInTouch = ({ style, white }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showAfterSubmit,setShowAfterSumbit] = useState(false);

  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

  // useEffect for animation
  useEffect(() => {
    Aos.init({});
    // tl.to(".slider", { y: "-100%", duration: 1.5 });
    tl.to(".animate", { y: "-100%", duration: 1, stagger: 0.1 });
  }, [tl]);
  
  return (
    <div className="get-in-touch-main-container">
      {showSubMenu ? (
        <div data-aos="fade-down" style={{ gridRow: 1 / 2 }}>
          <MenuComponent
            showSubMenu={showSubMenu}
            setShowSubMenu={setShowSubMenu}
          />
        </div>
      ) : (
        <>
          <Header
            showSubMenu={showSubMenu}
            setShowSubMenu={setShowSubMenu}
            white={false}
          />
          {!showAfterSubmit?( <div className="get-in-touch-content-container">
            <div className="get-in-touch-header">
              <span>Get in touch</span>

            </div>
            <div className="get-in-touch-form-element"></div>
            <Form showAfterSubmit={showAfterSubmit} setShowAfterSumbit={setShowAfterSumbit}/>
          </div>)
          :
          (<AfterSubmit />)}
         
        </>
      )}
    </div>
  );
};

export default GetInTouch;
