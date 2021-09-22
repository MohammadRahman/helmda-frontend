import React,{useState} from "react";
import "./customButton.styles.scss";
import "../../css/colorStyle.css";
import {Link} from 'react-router-dom';
import {useSpring, animated,config} from 'react-spring'

const CustomButton = ({ children, color, background,link,type, ...otherProps }) => {
  let isSubmit = type==='submit'?true:false;

  const [hover,setHover] = useState(false);

   const arrowFly = useSpring(hover?{ config: config.gentle,config:{ duration: 130 },
    to: [{marginLeft:60,opacity:0},{marginLeft:-60},{marginLeft:0,opacity:1}],
    from: {marginLeft:0,opacity:1}
  }:{});

  return (
 
   <Link to={link?link:'get-in-touch'}>
    <button className={`ellipse-funnctional ` + background} {...otherProps}
     onMouseEnter={(e)=>{
       e.preventDefault();
       setHover(true)
      }} 
     onMouseLeave={(e)=>{
       e.preventDefault();
       setHover(false)}} >
      <animated.div id='button-arrow' style={arrowFly}>{children}</animated.div>
    </button>
    </Link>
    
 
  );
}

export default CustomButton;
