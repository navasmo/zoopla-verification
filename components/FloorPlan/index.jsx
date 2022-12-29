import React from "react";
import "./FloorPlan.css";

function FloorPlan(props) {
  const { floorPlans, line27, line28, line29, groundFloor, image1, text1, line32, line33, line34 } = props;

  return (
    <div className="floor-plan">
      <div className="group-5-1">
        <div className="floor-plans inter-bold-black-20px">{floorPlans}</div>
        <div className="flex-col">
          <img className="line-27" src={line27} alt="Line 27" />
          <img className="line-28" src={line28} alt="Line 28" />
          <img className="line-29" src={line29} alt="Line 29" />
          <div className="ground-floor inter-bold-black-12px">{groundFloor}</div>
          <img className="image-2" src={image1} alt="image 2" />
          <div className="overlap-group1">
            <div className="overlap-group">
              <div className="rectangle-14"></div>
              <div className="rectangle-15"></div>
            </div>
            <div className="text-1 inter-bold-white-20px">{text1}</div>
          </div>
        </div>
        <div className="overlap-group-1">
          <div className="rectangle-25"></div>
          <div className="rectangle-26"></div>
          <img className="line-32" src={line32} alt="Line 32" />
          <img className="line-33" src={line33} alt="Line 33" />
          <img className="line-34" src={line34} alt="Line 34" />
        </div>
      </div>
    </div>
  );
}

export default FloorPlan;
