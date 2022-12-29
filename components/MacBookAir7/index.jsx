import React from "react";
import "./MacBookAir7.css";

function MacBookAir7(props) {
  const {
    zooplabg,
    zooplasPrivacyPolicy,
    goBack,
    spanText1,
    spanText2,
    spanText3,
    screenshot20221209At10291,
    screenshot20221209At10292,
    overlapGroup2,
    line31,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="macbook-air-7 screen" name="form4" action="form4" method="post">
        <div className="overlap-group3-1">
          <img className="zoopla-bg" src={zooplabg} alt="ZooplaBG" />
          <div className="overlap-group1-4">
            <div className="zooplas-privacy-policy inter-bold-black-32px">{zooplasPrivacyPolicy}</div>
            <div className="overlap-group-6">
              <a href="javascript:SubmitForm('form4')">
                <div className="button-1"></div>
              </a>
              <div className="go-back inter-bold-white-16px">{goBack}</div>
            </div>
          </div>
          <p className="this-service-is-oper manjari-normal-black-24px">
            <span className="manjari-normal-black-24px">{spanText1}</span>
            <span className="span1">{spanText2}</span>
            <span className="manjari-normal-black-24px">{spanText3}</span>
          </p>
          <p className="the-data-protection">
            The Data Protection Act
            <br />
            The Data Protection Act 2018 controls how your personal information is used by organisations, businesses or
            the government.
            <br />
            The Data Protection Act 2018 is the UK’s implementation of the General Data Protection Regulation (GDPR).
            <br />
            Everyone responsible for using personal data has to follow strict rules called ‘data protection principles’.
            They must make sure the information is:
            <br />
            used fairly, lawfully and transparently
            <br />
            used for specified, explicit purposes
            <br />
            used in a way that is adequate, relevant and limited to only what is necessary
            <br />
            accurate and, where necessary, kept up to date
            <br />
            kept for no longer than is necessary
            <br />
            handled in a way that ensures appropriate security, including protection against unlawful or unauthorised
            processing, access, loss, destruction or damage
            <br />
            There is stronger legal protection for more sensitive information, such as:
            <br />
            race
            <br />
            ethnic background
            <br />
            political opinions
            <br />
            religious beliefs
            <br />
            trade union membership
            <br />
            genetics
            <br />
            biometrics (where used for identification)
            <br />
            health
            <br />
            sex life or orientation
            <br />
            There are separate safeguards for personal data relating to criminal convictions and offences.
            <br />
            Your rights
            <br />
            Under the Data Protection Act 2018, you have the right to find out what information the government and other
            organisations store about you. These include the right to:
            <br />
            be informed about how your data is being used
            <br />
            access personal data
            <br />
            have incorrect data updated
            <br />
            have data erased
            <br />
            stop or restrict the processing of your data
            <br />
            data portability (allowing you to get and reuse your data for different services)
            <br />
            object to how your data is processed in certain circumstances
            <br />
            You also have rights when an organisation is using your personal data for:
            <br />
            automated decision-making processes (without human involvement)
            <br />
            profiling, for example to predict your behaviour or interests
          </p>
          <img
            className="screenshot-2022-12-09-at-1029"
            src={screenshot20221209At10291}
            alt="Screenshot 2022-12-09 at 10.29"
          />
          <img
            className="screenshot-2022-12-09-at-1029-1"
            src={screenshot20221209At10292}
            alt="Screenshot 2022-12-09 at 10.29"
          />
          <a href="javascript:history.back()">
            <div className="group-1-2">
              <div className="overlap-group2-3" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                <img className="line-31-6" src={line31} alt="Line 31" />
              </div>
            </div>
          </a>
        </div>
      </form>
    </div>
  );
}

export default MacBookAir7;
