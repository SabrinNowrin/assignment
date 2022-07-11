//import "./App.css";
import React from "react";
import {useLocation} from 'react-router-dom';

function Compose() {
    const location = useLocation();
    //const data = location.state.data;
    console.log(location.state);
  return (
    <div class="container">
      <div class="row">
        <div class="col align-self-center">
          <h1 class="text-center">Email Compose</h1>
          {/* <!-- contact form --> */}
          <form>
            {/* <!-- email --> */}
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="email"
                placeholder="enter your email"
              /> 
            </div>

            {/* <!-- subject --> */}
            <div class="form-group">
              <label for="subject">Subject</label>
              <input
                type="text"
                name="subject"
                class="form-control"
                id="subject"
                placeholder="enter email subject"
              />
            </div>

            <div class="form-group">
              <label for="email_body">Message</label>
              <textarea
                class="form-control"
                id="email_body"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Compose;
