import React, { Component } from "react";
import InputHandler from "../input-handler/InputHandler.component";
import TextArea from "../text-area/TextArea.component";
import axios from "axios";
import AnimatedArrow from '../animatedArrow/animatedArrow';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      text: "",
      errors: {},
      hover:false
    };
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sendEmail = async (name, email, text) => {
    try {
      const config = {
        "Content-Type": "application/json",
      };
      const { data } = await axios.post(
        "/api/send_mail",
        { name, email, text },
        config
      );
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    const { name, email, errors, text} = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }
    if (text === "") {
      this.setState({ errors: { text: "Text is required" } });
      return;
    }
    this.sendEmail(name, email, text);
   
    this.setState({
      name: "",
      email: "",
      text: "",
      errors: {},
      hover:false
    });
    changeGlobalState(this.props.showAfterSubmit,this.props.setShowAfterSumbit);
  };
  render() {
    const { name, email, errors, text, hover } = this.state;
    return (
      <div className="form">
        <form onSubmit={this.onSubmitHandler}>
          <InputHandler
            type="text"
            name="name"
            label="Name"
            value={name}
            error={errors.name}
            onChange={this.onChangeHandler}
          />
          <InputHandler
            type="email"
            name="email"
            label="Email"
            value={email}
            error={errors.email}
            onChange={this.onChangeHandler}
          />
          <TextArea
            type="text"
            name="text"
            label="Type Your Message"
            value={text}
            error={errors.text}
            onChange={this.onChangeHandler}
          />
          <div className="get-in-touch-button-section">
            <div className="get-in-touch-submit-button">
              <p className="submit-text">Submit</p>
              <button 
      className='ellipse-funnctional blackBack' onMouseEnter={()=>this.setState({hover:true})} 
      onMouseLeave={()=>this.setState({hover:false})}
        type="submit"
      >
             <AnimatedArrow hover={hover} />
            </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const changeGlobalState = (showAfterSubmit,setShowAfterSumbit) => {
setShowAfterSumbit(!showAfterSubmit);
return;
}

export default Form;
