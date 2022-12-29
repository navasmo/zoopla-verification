import React from "react";
import { Link } from "react-router-dom";
import "./MacBookAir5.css";

function MacBookAir5(props) {
  const {
    overlapGroup5,
    floorPlans,
    overlapGroup,
    line311,
    line27,
    line28,
    line29,
    groundFloor,
    image1,
    line32,
    line33,
    line34,
    text2,
    line301,
    line312,
    line302,
    line313,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="macbook-air-5 screen">
        <div className="overlap-group5-2" style={{ backgroundImage: `url(${overlapGroup5})` }}>
          <div className="floor-plan-2">
            <div className="group-5-2">
              <div className="flex-row-1">
                <div className="floor-plans-1 inter-bold-black-20px">{floorPlans}</div>
                <Link to="/macbook-air-1" className="align-self-flex-end">
                  <div className="group-1-1">
                    <div className="overlap-group-4" style={{ backgroundImage: `url(${overlapGroup})` }}>
                      <img className="line-31-3" src={line311} alt="Line 31" />
                    </div>
                  </div>
                </Link>
              </div>
              <img className="line-27-1" src={line27} alt="Line 27" />
              <img className="line-28-1" src={line28} alt="Line 28" />
              <img className="line-29-1" src={line29} alt="Line 29" />
              <div className="ground-floor-1 inter-bold-black-12px">{groundFloor}</div>
              <div className="flex-row-2">
                <img className="image-1" src={image1} alt="image 1" />
                <div className="overlap-group1-3">
                  <div className="rectangle-25-1"></div>
                  <div className="rectangle-26-1"></div>
                  <img className="line-32-1" src={line32} alt="Line 32" />
                  <img className="line-33-1" src={line33} alt="Line 33" />
                  <img className="line-34-1" src={line34} alt="Line 34" />
                </div>
              </div>
              <div className="overlap-group2-2">
                <div className="overlap-group-5">
                  <div className="rectangle-14-2"></div>
                  <div className="rectangle-15-2"></div>
                </div>
                <div className="text-2 inter-bold-white-20px">{text2}</div>
              </div>
            </div>
          </div>
          <Link to="/macbook-air-6">
            <div className="group-5-3">
              <div className="line-container-2">
                <img className="line-30-2" src={line301} alt="Line 30" />
                <img className="line-31-4" src={line312} alt="Line 31" />
              </div>
            </div>
          </Link>
          <Link to="/macbook-air-6">
            <div className="group-6-1">
              <div className="line-container-2">
                <img className="line-30-3" src={line302} alt="Line 30" />
                <img className="line-31-5" src={line313} alt="Line 31" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MacBookAir5;
