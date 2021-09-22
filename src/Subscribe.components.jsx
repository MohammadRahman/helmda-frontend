import React, { useState } from "react";
import axios from "axios";

const Subscribe = () => {
  const [sent, setSend] = useState(false);

  const [email, setEmail] = useState("");

  const sendEmail = async (email) => {
    try {
      const config = {
        "Content-Type": "application/json",
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/subscribers",
        { email },
        config
      );
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    sendEmail(email);
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div className="card" style={{ width: "400px", height: "400px" }}>
        <div className="card-header">
          <h2>Send Email</h2>
        </div>
        <div className="card-body">
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-outline-primary btn-block"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
