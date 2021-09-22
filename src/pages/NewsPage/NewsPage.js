import Header from "../../components/header/Header.components";
import MenuComponent from "../../components/Menu/Menu";
import New from '../../components/New/New';
import Footer from '../../components/Footer/Footer.js'
import gsap from "gsap/all";
import Aos from "aos";
import {useEffect,useState} from 'react';
import './newspage.css';

const NewsPage = () => {
    const [showSubMenu, setShowSubMenu] = useState(false);
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // useEffect for animation
  useEffect(() => {
    Aos.init({});
    // tl.to(".slider", { y: "-100%", duration: 1.5 });
    tl.to(".animate", { y: "-100%", duration: 1, stagger: 0.1 });
  }, [tl]);

    return(
    <div id='newspage-container'>
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
           <div id="news-content">
          <New id="new-1" white={false}/>
          <New id="new-2"  white={false}/>
        </div>
         </>
          
          )}
     <Footer white={false} />
    </div>  
    );
}

export default NewsPage;