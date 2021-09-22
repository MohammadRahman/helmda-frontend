import "./footer.css";
import "../../css/colorStyle.css";
import { Link } from "react-router-dom";
import ArrowRight from "../../images/svg/arrowRight";
import SmallArrow from "../../images/svg/arrowRightSmall";
import CustomButton from "../custom-button/CustomButton.components";
import { useState } from "react";
import axios from "axios";
const Footer = ({ white, style }) => {
  const [email, setEmail] = useState("");

  const address = `Harju maakond, Tallinn,
    Kesklinna linnaosa,
    Narva mnt 5, 10117`;

  let colorStyle = white === true ? "white" : "black";
  let color = colorStyle + "Color";
  let background = colorStyle + "Back";
  let text = colorStyle + "Footer";
  let borderTop = colorStyle + "BorderTop";
  let input = colorStyle + "Input";
  let thatWhite = white === true ? true : false;

  const subscribe = async (email) => {
    try {
      const config = {
        "Content-Type": "application/json",
      };
      const { data } = await axios.post("/api/subscribers", { email }, config);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    subscribe(email);
    setEmail("");
    alert(`You're all set, thank you!`);
  };

  return (
    <section
      id="footer"
      style={style}
      className={white === true ? "footer-background" : ""}
    >
      <div id="know-more" className={borderTop}>
        <p className={text}>Do you want to know more about our project?</p>
      </div>
      <div id="footer-btn">
        <span className={"icon-text " + color}>Let's talk</span>
        {/* dynamic button */}
        <CustomButton color={color} background={background}>
          <ArrowRight white={thatWhite} />
        </CustomButton>
      </div>
      <div id="sign-up">
        <p id="sign" className={color}>
          Sign up for our newsletter
        </p>
        <div id="email-input" className={input}>
          <form onSubmit={submitHandler}>
            <input
              placeholder="Your email adress"
              className={text}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" id="submit-btn">
              <SmallArrow white={thatWhite} />
            </button>
          </form>
        </div>
      </div>
      <div id="contact-info" className={borderTop}>
        <div id="address">
          <p className={"contact-title " + color}>Address</p>
          <p className={text}> {address}</p>
        </div>
        <div id="contacts">
          <p className={"contact-title " + color}> Contacts </p>
          <p className={text}>+372 602 7216</p>
          <p className={text}> info@helmda-systems.com</p>
        </div>
      </div>
      <div id="end">
        <p id="date" className={"footline " + text}>
          2021 © HelmDA Systems
        </p>
        <div id="link-design">
          <Link to="privacy-policy">
            <p className={"footline " + text}>Privacy Policy</p>
          </Link>
          <p className={"footline " + text}>Design by MN</p>
        </div>
      </div>
    </section>
  );
};
export default Footer;
