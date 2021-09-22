import {useState,useEffect} from 'react';
import Aos from "aos";
import gsap from "gsap/all";
import Header from '../../components/header/Header.components';
import TextBlock from '../../components/TextBlock/TextBlock.js'
import Value from '../../components/Value/Value.js'
import Person from '../../components/Person/Person.js'
import Footer from '../../components/Footer/Footer.js'
import MenuComponent from '../../components/Menu/Menu.js';

import '../../css/about-us-grid.css';
import './aboutUs.css';
import '../../css/mobileAbout.css'


const AboutUs = () => {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
  useEffect(() => {
    Aos.init({});
    // tl.to(".slider", { y: "-100%", duration: 1.5 });
    tl.to(".animate", { y: "-100%", duration: 1, stagger: 0.1 });
  }, [tl]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const divStyle={gridColumn:'1/-1',
  gridRow:'1/-1',
  gridTemplateRows:'min-content 1fr'}
  const menuStyle = {
    gridRow:'2/3',
    gridColumn:'1/3',
  }
  const headerStyle = {
    gridRow:'1/2',
    gridColumn:'1/3'
  }
  const [showSubMenu, setShowSubMenu] = useState(false);
  const people = ['david', 'mikhail', 'natalia', 'viktor',
    'antonio', 'maria', 'anna', 'vera','nikita','mohammad', 'armando'];
  const valueIDs = ['1', '2', '3', '4', '5', '6'];
  return (
    <div id='container'>
    
      {showSubMenu ? (
        <div className='menu-div'
          id='intro-block' data-aos="fade-down">
        <MenuComponent showSubMenu={showSubMenu} setShowSubMenu={setShowSubMenu} 
        headerStyle={headerStyle} menuStyle={menuStyle} divStyle={divStyle}/>
        </div>
      
      ) : (
        <>
      <Header white={false} showSubMenu={showSubMenu} setShowSubMenu={setShowSubMenu}/>
      <div id='intro-block'>
        <TextBlock id='intro' />
        <img src='https://raw.githubusercontent.com/wazebase/project-images/main/helmda/intro.webp' alt='cool font' id='intro-img' />
      </div>
      </>
      )}
      <div id='mission-block'>
        <img src='https://raw.githubusercontent.com/wazebase/project-images/main/helmda/mission.webp' alt='cool font' id='mission-img' />
        <TextBlock id='mission' />
      </div>
      <div id='values-block'>
        <TextBlock id='values' />
        <div id='values-list'>
          {valueIDs.map(num => <Value id={num} />)}
        </div>
      </div>
      <div id='team-block' className='team-background'>
        <TextBlock id='team' />
        <div id='team-members'>
          {people.map(person => <Person id={person} />)}
        </div>
      </div>
      <Footer white={false} style={{gridColumn:'2/3'}}/>

    </div>
  )
}

export default AboutUs;
