import {useState,useEffect} from 'react';
import CustomButton from "../custom-button/CustomButton.components";
import './after-submit.css';
import AnimatedArrow from '../animatedArrow/animatedArrow';
const AfterSubmit = () => {
    const [hover,setHover] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div className="get-in-touch-content-container" id='submit-flex'>
            <div id='after-content'>
             <div className="get-in-touch-header" id='thanks'>
            <span>Thanks!</span>
            </div>
            
            <p id='response'>We’ve reseived your response. We’ll be in touch soon.</p>
            <div className='back'>
            <p>Back to home</p>
            <CustomButton link='/' color='white' background='blackBack'>
            <AnimatedArrow hover={hover} />
            </CustomButton>
            </div>
            </div>
        </div>
    )
}

export default AfterSubmit;