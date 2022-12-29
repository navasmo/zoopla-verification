import "./App.css";
import * as MuiMaterial from "@mui/material";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import MacBookAir6 from "./components/MacBookAir6";
import MacBookAir1 from "./components/MacBookAir1";
import MacBookAir2 from "./components/MacBookAir2";
import MacBookAir5 from "./components/MacBookAir5";
import MacBookAir7 from "./components/MacBookAir7";
import MacBookAir3 from "./components/MacBookAir3";
import MacBookAir8 from "./components/MacBookAir8";
import MacBookAir4 from "./components/MacBookAir4";

function App() {
  return (
    <MuiMaterial.ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/macbook-air-6">
            <MacBookAir6
              overlapGroup5="/img/screenshot-2022-12-10-at-09-46-1@1x.png"
              overlapGroup2="/img/line-30@2x.png"
              line311="/img/line-31@2x.png"
              line30="/img/line-30-1@2x.png"
              line312="/img/line-31-1@2x.png"
              floorPlanProps={macBookAir6Data.floorPlanProps}
            />
          </Route>
          <Route path="/:path(|macbook-air-1)">
            <MacBookAir1 overlapGroup1="/img/screenshot-2022-12-10-at-09-46-1@1x.png" x2FloorPlan="x2 Floor Plan" />
          </Route>
          <Route path="/macbook-air-2">
            <MacBookAir2 {...macBookAir2Data} />
          </Route>
          <Route path="/macbook-air-5">
            <MacBookAir5 {...macBookAir5Data} />
          </Route>
          <Route path="/macbook-air-7">
            <MacBookAir7 {...macBookAir7Data} />
          </Route>
          <Route path="/:path(|macbook-air-3)">
            <MacBookAir3 {...macBookAir3Data} />
          </Route>
          <Route path="/macbook-air-8">
            <MacBookAir8
              zooplabg="/img/screenshot-2022-12-10-at-09-46-1@1x.png"
              membersTermsAndConditions="Members Terms and Conditions"
              overlapGroup1="/img/line-30@2x.png"
              line31="/img/line-31@2x.png"
            />
          </Route>
          <Route path="/macbook-air-4">
            <MacBookAir4 {...macBookAir4Data} />
          </Route>
        </Switch>
      </Router>
    </MuiMaterial.ThemeProvider>
  );
}

export default App;
const theme = MuiMaterial.createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
    error: {
      main: "#d32f2f",
    },
    warning: {
      main: "#ed6c02",
    },
    info: {
      main: "#0288d1",
    },
    success: {
      main: "#2e7d32",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
    },
  },
  typography: {
    fontSize: 14,
  },
  shape: {
    borderRadius: 4,
  },
});
const floorPlanData = {
    floorPlans: "Floor Plans",
    line27: "/img/line-27@2x.png",
    line28: "/img/line-28@2x.png",
    line29: "/img/line-29@2x.png",
    groundFloor: "Ground Floor",
    image1: "/img/image-1@2x.png",
    text1: "2/2",
    line32: "/img/line-32@2x.png",
    line33: "/img/line-32@2x.png",
    line34: "/img/line-34@2x.png",
};

const macBookAir6Data = {
    floorPlanProps: floorPlanData,
};

const macBookAir2Data = {
    overlapGroup7: "/img/screenshot-2022-12-10-at-09-46-1@1x.png",
    title: "Zoopla",
    signInToViewFloo: <React.Fragment>Sign in to view Floor Plan and much <br />more!</React.Fragment>,
    spanText1: "No account? ",
    spanText2: "Register",
    google: "Google",
    facebook: "Facebook",
    line25: "/img/line-25@2x.png",
    orSignInWithYourEmail: "or sign in with your email",
    line26: "/img/line-26@2x.png",
    emailAddress: "Email address",
    password: "Password",
    show: "Show",
    forgotPassword: "Forgot password",
    keepMeSignedInFor7Days: "Keep me signed in for 7 days",
    inputType1: "email",
    inputPlaceholder1: "email",
    inputType2: "password",
    inputPlaceholder2: "password",
    signIn: "Sign In",
};

const checkbox22Data = {
    className: "checkbox-1",
};

const checkbox23Data = {
    className: "checkbox-2",
};

const macBookAir3Data = {
    overlapGroup5: "/img/screenshot-2022-12-10-at-09-46-1@1x.png",
    zoopla: "Zoopla",
    verificationCodeRe: "Verification code required to view Floor Plan",
    enterYourEmailTo: "Enter your Phone Nimber to recieve verification code",
    inputType: "text",
    inputPlaceholder: "phone no (+44 .........",
    gdprAndPrivacy: "GDPR and Privacy",
    tC: "Terms and Condtitions",
    sendVerificationButton: "Send Verification Code",
    checkbox21Props: checkbox22Data,
    checkbox22Props: checkbox23Data,
    overlapGroup54: "/img/screenshot-2022-12-10-at-09-46-1@1x.png",
    zoopla4: "Zoopla",
    pleaseCheckYourEm4: <React.Fragment>Please Check your email for <br />Verification Code</React.Fragment>,
    enterVerificationCodeTheWeSendYou4: "Enter verification code the we send you",
    gdprAndPrivacy4: "GDPR and Privacy",
    inputType4: "number",
    inputPlaceholder4: "verification code",
    termsAndCondition4: "Terms and Condition",
    submitCodeToViewFloorPlan4: "Submit Code to view Floor Plan",
};

const macBookAir5Data = {
    overlapGroup5: "/img/screenshot-2022-12-10-at-09-46-1@1x.png",
    floorPlans: "Floor Plans",
    overlapGroup: "/img/line-30@2x.png",
    line311: "/img/line-31@2x.png",
    line27: "/img/line-27@2x.png",
    line28: "/img/line-28@2x.png",
    line29: "/img/line-29@2x.png",
    groundFloor: "Ground Floor",
    image1: "/img/image-1@2x.png",
    line32: "/img/line-32@2x.png",
    line33: "/img/line-32@2x.png",
    line34: "/img/line-34@2x.png",
    text2: "1/2",
    line301: "/img/line-30-1@2x.png",
    line312: "/img/line-31-1@2x.png",
    line302: "/img/line-30-2@2x.png",
    line313: "/img/line-31-2@2x.png",
};

const macBookAir7Data = {
    zooplabg: "/img/screenshot-2022-12-10-at-09-46-1@1x.png",
    zooplasPrivacyPolicy: "Zoopla’s Privacy Policy",
    goBack: "Go Back",
    spanText1: <React.Fragment>This service is operated by Zoopla Limited. If you visit our website, use our apps or contact us, this policy is for you. It&#x27;s about how we protect your data and respect your privacy.<br />We last updated this policy in </React.Fragment>,
    spanText2: "March 2022.",
    spanText3: " We update it from time to time as we make improvements or when laws change. Please check it regularly to make sure you know exactly how we use your data.",
    screenshot20221209At10291: "/img/screenshot-2022-12-09-at-10-29@1x.png",
    screenshot20221209At10292: "/img/screenshot-2022-12-09-at-10-29-1@1x.png",
    overlapGroup2: "/img/line-30@2x.png",
    line31: "/img/line-31@2x.png",
};

const macBookAir4Data = {
    overlapGroup5: "/img/screenshot-2022-12-10-at-09-46-1@1x.png",
    zoopla: "Zoopla",
    pleaseCheckYourEm: <React.Fragment>Please Check your email for <br />Verification Code</React.Fragment>,
    enterVerificationCodeTheWeSendYou: "Enter verification code the we send you",
    gdprAndPrivacy: "GDPR and Privacy",
    inputType: "number",
    inputPlaceholder: "verification code",
    termsAndCondition: "Terms and Condition",
    submitCodeToViewFloorPlan: "Submit Code to view Floor Plan",
};

