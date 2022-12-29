import React from "react";
import { Link } from "react-router-dom";
import FloorPlan from "../FloorPlan";
import Group6 from "../Group6";
import "./MacBookAir6.css";

function MacBookAir6(props) {
  const { overlapGroup5, overlapGroup2, line311, line30, line312, floorPlanProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="macbook-air-6 screen">
        <div className="overlap-group5" style={{ backgroundImage: `url(${overlapGroup5})` }}>
          <FloorPlan {...floorPlanProps} />
          <Link to="/macbook-air-1">
            <div className="group-1">
              <div className="overlap-group2" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                <img className="line-31" src={line311} alt="Line 31" />
              </div>
            </div>
          </Link>
          <Link to="/macbook-air-5">
            <div className="group-5">
              <div className="line-container">
                <img className="line-30" src={line30} alt="Line 30" />
                <img className="line-31-1" src={line312} alt="Line 31" />
              </div>
            </div><Group6 />
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default MacBookAir6;
