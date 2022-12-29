import React from "react";
import Checkbox2 from "../Checkbox2";
import "./MacBookAir2.css";

function MacBookAir2(props) {
  
  const {
    overlapGroup7,
    title,
    signInToViewFloo,
    spanText1,
    spanText2,
    google,
    facebook,
    line25,
    orSignInWithYourEmail,
    line26,
    emailAddress,
    password,
    show,
    forgotPassword,
    keepMeSignedInFor7Days,
    inputType1,
    inputPlaceholder1,
    inputType2,
    inputPlaceholder2,
    signIn,
  } = props;

  const handleSubmit = (event) => {
    // prevent the default behavior of the form submission
    event.preventDefault();
  
    // check the form conditions
    if (formIsValid()) {
      // get a reference to the form element
    
  
      // submit the form
      document.querySelector("form").submit();
  
      // open a link
      window.location.href = "http://localhost:1234/macbook-air-3";
    } else {
      // show a prompt if the form is invalid
      alert("Please fill in the email and password fields.");
    }
  
    // prevent the default behavior of the form submission
    return false;
  }

  const formIsValid = () => {
    // get a reference to the email input field
    const emailInput = document.querySelector("input[type='email']");

    // get a reference to the password input field
    const passwordInput = document.querySelector("input[type='password']");

    // check if the email input field has a valid email address and the password input field is not empty
    return emailInput.checkValidity() && passwordInput.value.trim().length > 0;
  }

  return (
    <div className="container-center-horizontal">
      <form className="macbook-air-2 screen" name="form3" action="form3" method="post">
        <div className="overlap-group7" style={{ backgroundImage: `url(${overlapGroup7})` }}>
          <div className="overlap-group-3">
            <h1 className="title inter-bold-black-32px">{title}</h1>
            <div className="overlap-group1-2">
              <p className="sign-in-to-view-floo inter-normal-black-24px">{signInToViewFloo}</p>
              <div className="no-account-register inter-normal-black-16px">
                <span className="inter-normal-black-16px">{spanText1}</span>
                <span className="inter-bold-black-16px">{spanText2}</span>
              </div>
            </div>
            <div className="overlap-group-container">
              <div className="overlap-group3">
                <div className="google inter-bold-black-16px">{google}</div>
              </div>
              <div className="overlap-group2-1">
                <div className="facebook inter-bold-black-16px">{facebook}</div>
              </div>
            </div>
            <div className="flex-row">
              <img className="line-25" src={line25} alt="Line 25" />
              <p className="or-sign-in-with-your-email inter-normal-black-16px">{orSignInWithYourEmail}</p>
              <img className="line-26" src={line26} alt="Line 26" />
            </div>
            <div className="email-address inter-normal-black-16px">{emailAddress}</div>
            <div className="password inter-normal-black-16px">{password}</div>
            <div className="show inter-normal-black-16px">{show}</div>
            <div className="forgot-password">{forgotPassword}</div>
            <p className="keep-me-signed-in-for-7-days inter-normal-black-16px">{keepMeSignedInFor7Days}</p>
          </div>
          <div className="overlap-group4">
            <input className="email" name="email" placeholder={inputPlaceholder1} type={inputType1} required />
          </div>
          <div className="overlap-group5-1">
            <input
              className="password-1 inter-bold-silver-16px"
              name="password"
              placeholder={inputPlaceholder2}
              type={inputType2}
              required
            />
          </div>
          <Checkbox2 />
          <a href="javascript:SubmitForm('form3')">
            <div className="sign-in">
              <div className="overlap-group6">
                <a href="javascript:SubmitForm('form3')">
                  <button onClick={handleSubmit} className="button"></button>
                </a>
                <div className="sign-in-1 inter-bold-white-16px">{signIn}</div>
              </div>
            </div>
          </a>
        </div>
      </form>
    </div>
  );
}

export default MacBookAir2;
