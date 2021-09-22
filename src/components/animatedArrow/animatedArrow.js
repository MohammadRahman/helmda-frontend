import {useSpring, animated,config} from 'react-spring';
import SmallArrow from "../../images/svg/arrowRightSmall";

const AnimatedArrow = ({hover,onMouseEnter,onMouseLeave}) => {
  const arrowFly = useSpring(hover?{ config: config.gentle,config:{ duration: 130 },
        to: [{marginLeft:60,opacity:0},{marginLeft:-60},{marginLeft:0,opacity:1}],
        from: {marginLeft:0,opacity:1}
      }:{ });

    /*config: config.gentle,config:{ duration: 130 },
      to: [{marginLeft:-60,opacity:0},{marginLeft:60},{marginLeft:0,opacity:1}],
      from: {marginLeft:0}}*/

    return(
        <animated.div id='button-arrow' style={arrowFly}><SmallArrow white={true} /> </animated.div>
    )


}

export default AnimatedArrow;