import React, { useState, useEffect } from "react";
import {useSpring,animated,config} from 'react-spring';
import CustomButton from "../../components/custom-button/CustomButton.components";
import Banner from "../../components/banner/Banner.component";
import Header from "../../components/header/Header.components";
import New from "../../components/New/New.js";
import Footer from "../../components/Footer/Footer.js";
import MenuComponent from "../../components/Menu/Menu.js";

import Aos from "aos";
import "./homepage.styles.scss";

import "../../css/homepageGrid.css";
import "../../css/mobileMain.css";
import Rectangle from "../../images/svg/rectangle.js";
import LongLineNews from "../../images/svg/longLineNews";
import SmallArrow from "../../images/svg/arrowRightSmall";
import ReactGa from "react-ga";

ReactGa.initialize("267470950");

const Homepage = () => {
  const [runAnimation,setRunAnimation] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  let delay = 100;

  const divAnim = useSpring(runAnimation?{to:{zIndex:-33,display:'none'}, from:{zIndex:999,display:'grid'},delay:1500}:{});
  const titleAnim = useSpring(runAnimation?{from:{opacity:0,marginTop:40},to:{opacity:1,marginTop:0},config:{duration:900},delay:500}:{});
  const spanAnim = useSpring(runAnimation?{from:{opacity:0}, to:{opacity:1},config:{duration:900},delay:600}:{})

  useEffect(() => {
    ReactGa.pageview(window.location.pathname + window.location.search);
    Aos.init({
      easing: 'ease', 
      once:true
    });
    setRunAnimation(true);
    // tl.to(".slider", { y: "-100%", duration: 1.5 });
   // tl.to(".animate", { y: "-100%", duration: 1, stagger: 0.1 });

  }, []);
  return (
    <div id="homepage-container">
      <animated.div style={divAnim} className='animation'>
        {[1,2,3,4,5].map(item=> {
          delay+=70;
          return <AnimatedDiv delay={delay} runAnimation={runAnimation}/>
        })}
      </animated.div>
      <section className="intro-section">
        {showSubMenu ? (
          <div data-aos="fade-down" style={{ gridRow: 1 / 2 }}>
            <MenuComponent
              showSubMenu={showSubMenu}
              setShowSubMenu={setShowSubMenu}
            />
          </div>
        ) : (
          <Banner hero="section-1">
            <Header
              style={{ gridColumn: "1/2" }}
              white={true}
              showSubMenu={showSubMenu}
              setShowSubMenu={setShowSubMenu}
            />
            {/* <Typography
            title="HELMDA SYSTEM"
            subText="we are the team of enthusisasts wholeheartedly intersted in creating
            a better future for our current society"
          /> */}
            <div id="title-div">
              <animated.div style={titleAnim}>
                <h1 className="title-first">HelmDA</h1>
                <h1 className="second-title">Systems</h1>
              </animated.div>
              <animated.div style={spanAnim} className="sub-content">
                <span className="sub-text">

                We are a team of enthusiasts wholeheartedly committed to creating a better future for our current society.
                </span>
              </animated.div>
            </div>
            <div className="slider">
              {/* <div className="hide">
              <div className="animate slide"></div>
            </div> */}
              {/* <div className="hide">
              <div className="animate slide-one"></div>
            </div> */}
              {/* <div className="hide">
              <div className="animate slide-two"></div>
            </div> */}

              <div className="animate slide-one"></div>
              <div className="animate slide-two"></div>
              <div className="animate slide-three"></div>
              <div className="animate slide-four"></div>
              <div className="animate slide-five"></div>
              {/* <div className="animate slide-six"></div>
            <div className="animate slide-seven"></div>
            <div className="animate slide-eight"></div>
            <div className="animate slide-nine"></div> */}
            </div>
          </Banner>
        )}
      </section>
      <section className="about">
        <div id="about-textBlock">
          <h1
            data-aos="fade-right"
            data-aos-delay="100"
            // data-aos-duration="5000"
            className="about-us-text"
          >
            About us
          </h1>
          <Rectangle color={"rgba(255, 255, 255, 0.9)"} />
          <div id="about-content">
            <div>
              <p
                data-aos="fade"
                data-aos-delay="500"
                className="typography"
              >
                We are a team passionate about science, technology, futurism, breaking standards and creating new
standards. We think how to make things possible where others would immediately say “it’s impossible”.
Our worst enemies: apathy, pessimism, old paradigms and the status quo.{" "}
              </p>
              <p
                data-aos="fade"
                data-aos-delay="500"
                className="typography"
              >
                We are a TOC-Initiative. We identify ourselves as one of the few existing current initiatives that proactively
work towards pushing our society into a TYPE ONE Civilization.
              </p>
            </div>
            <div id="about-btn"  data-aos="fade-right"
                data-aos-delay="500" >
              <CustomButton link='about'>
                <SmallArrow className="abour-small-arrow" white={false} />
              </CustomButton>

              <span className="typography-about-company">
                More about The company
              </span>
            </div>
          </div>
        </div>
        <div className="img-div">
          {" "}
          <img alt='mikhail and david working on the project' src='https://raw.githubusercontent.com/wazebase/project-images/main/helmda/david_mikhail.webp' />
        </div>
        {/*<div className="ellipse-15"> */}
      </section>
      <section className="typography-bold">
        <p data-aos="fade-up-right" data-aos-offset="200" className="bold-1">
          THE <span id="empty-letter">FUTURE</span> IS ALRE
        </p>
        <br />
        <p data-aos="fade-down-left" className="bold-1">
          <span id="empty-letter">RE IS</span> ALREADY HERE
        </p>
      </section>
      <section className="problems frame-55" id='problems-page'>
        <div className="image-google">
          <img id="problems-img" alt='man in the mask' src='https://raw.githubusercontent.com/wazebase/project-images/main/helmda/1%20-%20Google%20Chrome%202021-02-27%2020.28.webp' />
        </div>
        {/* <div className="image"></div> */}
        <div id="problems-text">
          <span className="problem-with-the-world">
            Problems of the modern world
          </span>
          <hr className="frame-55-hr" />
          <span className="frame-55-subtext">
            The overall condition of the global environment continues to

            deteriorate, driven mainly by population growth, urbanisation, 
            greedy economic development, warfare technology and unstoppable climate change.{" "}

          </span>
          <div id="problems-list">
            <div>
              <span className="number-one">01</span>
              <div>
                <p className="number-text-title-one">COMMUNICATION</p>
                <br />
                <p className="number-text-subtitle-one">
                Essential groups in our society, First Responders (FR: healthcare workers, firefighters, SAR, police, etc.), lack the right equipment to communicate effectively and without misunderstandings.
                </p>
              </div>
            </div>
            <div>
              <span className="number-two">02</span>
              <div>
                <p className="number-text-title-two">PHYSICAL RISK</p>
                <br />
                <p className="number-text-subtitle-two">

                A great number of firefighters, police special units and others, lose their lives or suffer terrible injuries due to lack of effective protection to their bodies in the environments where they carry out their activities.

                </p>
              </div>
            </div>

            <div>
              <span className="number-three">03</span>
              <div>
                <p className="number-text-title-three">UNSTOPPABLE MASSIVE INFECTION</p>
                <br />
               
                <p className="number-text-subtitle-three">
                All levels of staff in the Healthcare, Transportation and Distribution systems are completely exposed to being infected and pass it on to others thanks to the fact that there is no effective protection equipment.
                </p>
              </div>
            </div>
            <div>
              <span className="number-four">04</span>

              <div>
                <p className="number-text-title-four">
                MISINFORMATION
                </p>
                <br />
                <p className="number-text-subtitle-four">
                In our modern world where information is easily accessible the media gets more and more overloaded with fake information and, even though people have mobile devices, it is not always easy to video stream the reality, to prove what is real and what is not. The public is left only with questions and mistrust.
                </p>
              </div>
            </div>
          </div>

          </div>  
        </section>
      <section className="products frame-55" id='products-page'>
        <div id="products-title">
          <div id="pr-title">
            <span className="frame-55-typography-bold">Our Products</span>
          </div>
          <div id="products-text">
            <p className="frame-55-typography-sub"data-aos="fade-up"
                data-aos-delay="100">
              The tested quality and durability of our goods will be the clearest reflection of our uncompromising care
and deep perception of what our fellow humans need. Life-enhancement tools created with you in mind,
one step at a time.
            </p>
          </div>
        </div>
        <div className="russian-box" data-aos="fade-right"
                data-aos-delay="500" >
          <img alt='figure from the lines' src='https://raw.githubusercontent.com/wazebase/project-images/main/helmda/backgrounds/mainPage/figure.webp' />
        </div>
        <div id="products-list">
          <div className="product" data-aos="fade-up"
                data-aos-delay="500">
            <span className="products-titile-helmet">HEADSET</span>
            <hr className="products-hr-helmet" />
            <p className="products-suibtitle-helmet">
            Our piéce de resistance, our Headset, encases most of the technology of our patent-pending system.
Galea-X, our first version, provides solutions for different industries. According to the industry, different
capabilities.
Learn More
Galea-Basic: For airline staff and passengers, healthcare workers, people with special needs
Galea-X: For governmental departments: Police, Swat, SAR
            </p>
          </div>
          <div className="product" data-aos="fade-up"
                data-aos-delay="500">
            <span className="products-titile-gloves">BODYSUIT</span>
            <hr className="products-hr-gloves" />
            <p className="products-suibtitle-gloves">
            A precursor to our future space suit, this body suit intends to register functions of the human body in order
to learn from it and better protect it in the future. It is definitely, a natural extension of our main system.
            </p>
          </div>
          <div className="product" data-aos="fade-up"
                data-aos-delay="500">
            <span className="products-titile-bodysuits">TACTILES</span>
            <hr className="products-hr-bodysuits" />
            <p className="products-suibtitle-bidysuits">
            These are tools with many different applications besides the obvious, protection for human hands, which
connect to the main system to execute specific instructions.
            </p>
          </div>
          <div className="product"data-aos="fade-up"
                data-aos-delay="500">
            <span className="products-titile-boots">FOOTGEAR</span>
            <hr className="products-hr-boots" />
            <p className="products-suibtitle-boots">
            These tools are a great complement to the system and not just a protective piece of equipment for the user.
            </p>
          </div>
        </div>
      </section>
      <section id="news">
        <div id="news-title-div">
          <h6 id="news-title">News</h6>
          <LongLineNews />
        </div>
        <div id="news-content">
          <New id="new-1" white={true}/>
          <New id="new-2" white={true} showButton={true}/>
        </div>
      </section>
      <Footer white={true} />
    </div>
 
  );
};

const AnimatedDiv = ({runAnimation,delay}) => {
  const firstAnim = useSpring(runAnimation?
    {from:{height:'100%'}, to:{height:'0%'}, config: config.gentle,
    config:{duration:900},delay:delay}
  :{});
  return(
    <animated.div style={firstAnim} />
  )
}
export default Homepage;
