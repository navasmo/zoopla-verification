import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./MacBookAir4.css";



function MacBookAir4(props) {
  const {
    overlapGroup5,
    zoopla,
    pleaseCheckYourEm,
    enterVerificationCodeTheWeSendYou,
    gdprAndPrivacy,
    inputType,
    inputPlaceholder,
    termsAndCondition,
    submitCodeToViewFloorPlan,
  } = props;

  const [OTP, setOTP] = useState('');

  const verifyOTP =(e) => {
    let otp = e.target.value;
    setOTP(otp);

    if(otp.length ===6){
      console.log(otp);

      let confirmationResult = window.confirmationResult;
      confirmationResult.confirm(otp).then((result) =>{

        const user = result.user;
        window.location.href = "http://localhost:1234/macbook-air-5";
      }).catch((error) => {

      });
    } else {
      
    }
  }
  const handleSubmit = (event) => {
    // prevent the default behavior of the form submission
    event.preventDefault();

    // check if the form is valid
    if (formIsValid()) {
      // get a reference to the form element
      const form = event.target.closest("form8");

      // submit the form
      document.querySelector("form").submit();

      // open a link
      window.location.href = "http://localhost:1234/macbook-air-5";
    } else {
      // show a prompt if the input is invalid
      alert("Please enter a valid verification code.");
    }
  };

  const formIsValid = () => {
    // get a reference to the input field
    const inputField = document.querySelector("input[type='number']");

    // check if the input field is not empty and only contains numbers
    return inputField.value.trim() !== "" && !isNaN(inputField.value);
  };

  return (
    <div className="container-center-horizontal">
      <form className="macbook-air-4 screen" name="form8" action="form8" method="post">
        <div className="overlap-group5-4" style={{ backgroundImage: `url(${overlapGroup5})` }}>
          <div className="authentication-1"></div>
          <a href="javascript:SubmitForm('form8')">
            <div className="verification-code">
              <div className="overlap-group-9">
                <div className="zoopla-1 inter-bold-black-32px">{zoopla}</div>
                <p className="please-check-your-em inter-normal-black-24px">{pleaseCheckYourEm}</p>
                <p className="enter-verification-code-the-we-send-you inter-normal-black-16px">
                  {enterVerificationCodeTheWeSendYou}
                </p>
              </div>
            </div>
          </a>
          <Link to="/macbook-air-7">
            <div className="gdpr">
              <div className="overlap-group1-7">
                <div className="rectangle-33"></div>
                <div className="gdpr-and-privacy-1 inter-bold-black-16px">{gdprAndPrivacy}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group2-6">
            <input
              className="code inter-bold-silver-16px"
              name="code"
              value={OTP}
              onChange={verifyOTP}
              placeholder={inputPlaceholder}
              type={inputType}
              required
            />
          </div>
          <div className="overlap-group3-3">
            <Link to="/macbook-air-8">
              <div className="rectangle-34"></div>
              <div className="terms-and-condition inter-bold-black-16px">{termsAndCondition}</div>
            </Link>
            
          </div>
          <a href="javascript:SubmitForm('form8')">
            <div className="submit-code">
              <div className="overlap-group4-2">
                <button onClick={verifyOTP} className="button-3"></button>
                <p className="submit-code-to-view-floor-plan inter-bold-white-16px">{submitCodeToViewFloorPlan}</p>
              </div>
            </div>
          </a>
        </div>
      </form>
    </div>
  );
}

export default MacBookAir4;
