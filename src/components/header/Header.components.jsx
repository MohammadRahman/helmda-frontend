import React, { useState } from "react";
import {Link} from 'react-router-dom';
import CustomButton from "../custom-button/CustomButton.components";
import "./header.scss";
import OpenMenu from "../../images/svg/openMenu";
import "../../css/colorStyle.css";
import {useSpring, animated} from 'react-spring'

const Header = ({
  children,
  style,
  white,
  showSubMenu,
  setShowSubMenu,
  ...otherProps
}) => {
  const [arrowHover,setArrowHover] = useState(false);
  const left = useSpring(arrowHover?{transform:  'translateX(7px)'}:{transform: 'translateX(0px)'})
  const right = useSpring(arrowHover?{transform:  'translateX(-7px)'}:{transform: 'translateX(0px)'})
  let colorStyle = white === true ? "white" : "black";
  let color = colorStyle + "Color";
  let background = colorStyle + "Back";
  let arrow = white === true ? "blackArrow" : "whiteArrow";
  return (
    <div
      className="header-container"
      style={style ? style : {}}
      {...otherProps}
    >
      {children}
      <div className="logo-container">
        <img
          id="logo"
          alt="logo"
          style={
            white === true ? { marginLeft: "3em" } : { marginLeft: "0px" }
          }
          src={white === true ?'https://raw.githubusercontent.com/wazebase/project-images/main/helmda/logo.png': 'https://raw.githubusercontent.com/wazebase/project-images/main/helmda/blackLogo.png'}
        />{" "}
      </div>

      <div id="menu-btn" onClick={() => setShowSubMenu(!showSubMenu)}>
        {showSubMenu === true ? (
          <OpenMenu />
        ) : (
          <svg 
          onPointerEnter={()=>setArrowHover(true)} 
          onPointerLeave={()=>setArrowHover(false)}
            width="33"
            height="8"
            viewBox="0 0 33 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <animated.rect
              style={left}
              width="33"
              height="1"
              fill={colorStyle}
            />
            <animated.rect
            style={right}
              x="6"
              y="7"
              width="27"
              height="1"
              fill={colorStyle}
            />
          </svg>
        )}
        <p id="menu" className={color}>
          Menu
        </p>
      </div>
      {/* {} */}
      <div id="header-btn">
        {window.screen.width < 1000?
        (<span className={"icon-text " + color}>
          <Link to='get-in-touch' id='mobile-touch-link'>Let's talk</Link>
          </span>)
        :
        (  <span className={"icon-text " + color}>Let's talk</span>)}
      
        {/* dynamic button */}
        <CustomButton color={color} background={background}>
          <i id='header-arrow' 
            className={"fas fa-arrow-right menu-icon " + arrow}
          ></i>
        </CustomButton>
      </div>
      {/* <div className="ellipse">
        <i className="fas fa-arrow-right menu-icon"></i>
      </div> */}
      {/* <span className="menu-icon"></span> */}
    </div>
  );
};

export default Header;
