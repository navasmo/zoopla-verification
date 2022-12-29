import React, {useState} from "react";
import { Link } from "react-router-dom";

import Checkbox2 from "../Checkbox2";
import "./MacBookAir3.css";

import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

function MacBookAir3(props) {

  const [form5Visible, setForm5Visible] = useState(true);
  const [form8Visible, setForm8Visible] = useState(false);
  
  const {
    overlapGroup5,
    zoopla,
    verificationCodeRe,
    enterYourEmailTo,
    inputType,
    inputPlaceholder,
    gdprAndPrivacy,
    tC,
    sendVerificationButton,
    checkbox21Props,
    checkbox22Props,
    overlapGroup54,
    zoopla4,
    pleaseCheckYourEm4,
    enterVerificationCodeTheWeSendYou4,
    gdprAndPrivacy4,
    inputType4,
    inputPlaceholder4,
    termsAndCondition4,
    submitCodeToViewFloorPlan4,
  } = props;

  const firebaseConfig = {
    apiKey: "AIzaSyAkDyKaCwKc9s5bNWk5-ibsyvZIPc7ZW3g",
    authDomain: "zoopla-verification.firebaseapp.com",
    projectId: "zoopla-verification",
    storageBucket: "zoopla-verification.appspot.com",
    messagingSenderId: "9228863364",
    appId: "1:9228863364:web:db17b00ee7b3abd9f8ffd1",
    measurementId: "G-ENGE4W5N4M"
  };
  // Initialize the app using your firebase config
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
//const countryCode ="+44";
const [phoneNumber, setPhoneNumber] = useState('');

const [OTP, setOTP] = useState('');

  const verifyOTP =(e) => {
    let otp = e.target.value;
    setOTP(otp);

    if(otp.length ===6){
      console.log(otp);

      let confirmationResult = window.confirmationResult;
      confirmationResult.confirm(otp).then((result) =>{

        const user = result.user;
        //window.location.href = "http://localhost:1234/macbook-air-5";
       
      }).catch((error) => {

      });
    } else {
      alert("Please enter a valid verification code.");
    }
  }

const generateRecapthcha =() => {
  if (document.getElementById("recaptcha-container")) {
    window.recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {
      'size': 'invisible',
      'callback': (response) => {
      
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
      }
    }, auth);
  } else {
    console.error("Error: No element with ID 'recaptcha-container' found on the page.");
  }
}


  const handleSubmit = (event) => {
    // prevent the default behavior of the form submission
    event.preventDefault();
    
    let appVerifier = window.recaptchaVerifier;
    if (!phoneNumber) {
      // phone number input is empty, show an alert
      alert("Please enter your phone number");
      return;
    } else {
      generateRecapthcha();
      // phone-number input is filled in and both checkboxes are ticked, invoke the signInWithPhoneNumber function
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      window.location.href = "http://localhost:1234/macbook-air-4";
      setForm5Visible(false);
      setForm8Visible(true);
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    });
    }
    // check if both checkboxes are ticked
    const checkboxInputs = document.querySelectorAll("input[type='checkbox']");
    if (!checkboxInputs || checkboxInputs.length !== 2 || !checkboxInputs[0].checked || !checkboxInputs[1].checked) {
      // one or both checkboxes are not ticked, show an alert
      alert("Please conrirm that you have read the Terms & Condition and GDPR by ticking both the boxes");
      return;
    }
  };
  
  return (
    <div className="container-center-horizontal">
      {form5Visible && (
      <form className="macbook-air-3 screen"  onSubmit={handleSubmit} >
        <div className="overlap-group5-3" style={{ backgroundImage: `url(${overlapGroup5})` }}>
          <div className="authentication"></div>
          <div className="overlap-group-7">
            <div className="zoopla inter-bold-black-32px">{zoopla}</div>
            <p className="verification-code-re inter-normal-black-24px">{verificationCodeRe}</p>
            <p className="enter-your-email-to inter-normal-black-16px">{enterYourEmailTo}</p>
          </div>
          <div className="overlap-group1-5">
            <input
              className="email-1 inter-bold-silver-16px"
              name="phone-number"
              id="phoneNumberInput"
              placeholder={inputPlaceholder}
              onChange={(event) => setPhoneNumber(event.target.value)}
              type={inputType}
              required
            />
          </div>
          <Link to="/macbook-air-7">
            <div className="group-16">
              <div className="overlap-group2-4">
                <div className="rectangle-32"></div>
                <div className="gdpr-and-privacy inter-bold-black-16px">{gdprAndPrivacy}</div>
              </div>
            </div>
          </Link>
          <Link to="/macbook-air-8">
            <div className="group-17">
              <div className="overlap-group3-2">
                <div className="rectangle-32-1"></div>
                <div className="tc inter-bold-black-16px">{tC}</div>
              </div>
            </div>
          </Link>
          <Checkbox2 className={checkbox21Props.className} />
          <Checkbox2 className={checkbox22Props.className} />
          
            <div className="group-6-2">
              <div className="overlap-group4-1">
                <button type="submit" onClick={handleSubmit} className="button-2">{sendVerificationButton}</button>
                <div id="recaptcha-container"></div>
              </div>
            </div>
         
        </div>
      </form>
)}
{form8Visible && (
      <form className="macbook-air-3 screen" onSubmit={verifyOTP}  >
        <div className="overlap-group5-3" style={{ backgroundImage: `url(${overlapGroup54})` }}>
          <div className="authentication-1"></div>
            <div className="verification-code">
              <div className="overlap-group-9">
                <div className="zoopla-1 inter-bold-black-32px">{zoopla4}</div>
                <p className="please-check-your-em inter-normal-black-24px">{pleaseCheckYourEm4}</p>
                <p className="enter-verification-code-the-we-send-you inter-normal-black-16px">
                  {enterVerificationCodeTheWeSendYou4}
                </p>
              </div>
            </div>
          <Link to="/macbook-air-7">
            <div className="gdpr">
              <div className="overlap-group1-7">
                <div className="rectangle-33"></div>
                <div className="gdpr-and-privacy-1 inter-bold-black-16px">{gdprAndPrivacy4}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group2-6">
            <input
              className="code inter-bold-silver-16px"
              name="code"
              value={OTP}
              onChange={verifyOTP}
              placeholder={inputPlaceholder4}
              type={inputType4}
              required
            />
          </div>
          <div className="overlap-group3-3">
            <Link to="/macbook-air-8">
              <div className="rectangle-34"></div>
              <div className="terms-and-condition inter-bold-black-16px">{termsAndCondition4}</div>
            </Link>
            
          </div>
          <a onSubmit={() => SubmitForm('form8')}>
            <div className="submit-code">
              <div className="overlap-group4-2">
                <button onClick={verifyOTP} className="button-3"></button>
                <p className="submit-code-to-view-floor-plan inter-bold-white-16px">{submitCodeToViewFloorPlan4}</p>
              </div>
            </div>
          </a>
        </div>
      </form>
       )}
    </div>
  );
}

export default MacBookAir3;
