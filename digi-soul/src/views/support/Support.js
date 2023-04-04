import React from 'react';
import './support.css';
import contact from '../../p-images/contact.png';
import Typography from "@mui/material/Typography";

function Support() {
  return (
    <div>
        <Typography textAlign="center" variant='h4' sx={{pt:10, fontWeight:"bold"}} fontFamily="Optima"> Contact Us</Typography>
      <div class="grid-container">
        <div class="grid-item grid-item-1">
            <img src={contact} alt="cont" className='con-image'/>
        </div>
        <div class="grid-item grid-item-2">
          <form onSubmit="">
            <label className="input-label">Name</label>
            <br />
            <input
              type="text"
              name="fullName"
              placeholder="What is your name?"
              className="form-input"
            />
            <br />
            <label className="input-label">Email id</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="What is your email id"
              className="form-input"
              required
            />
            <br />
            <label className="input-label">Message</label>
            <br />
            <textarea
              name="message"
              placeholder="Please enter your message.."
              className="form-message"
              required
            />
            <br />
            <button type="submit" className="form-submit">
              Submit
            </button>
            {/* <div>{result ? <Result /> : null}</div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Support;
