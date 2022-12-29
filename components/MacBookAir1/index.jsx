import React from "react";
import { Link } from "react-router-dom";
import "./MacBookAir1.css";

function MacBookAir1(props) {
  const { overlapGroup1, x2FloorPlan } = props;

  return (
    <div className="container-center-horizontal">
      <form className="macbook-air-1 screen" name="form1" action="form1" method="post">
        <div className="overlap-group1-1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
          <a href="javascript:SubmitForm('form1')">
            <div className="floor-plan-1">
              <div className="overlap-group-2">
                <Link to="/macbook-air-2">
                  <div className="rectangle-29"></div>
                </Link>
                <div className="rectangle-14-1"></div>
                <div className="rectangle-15-1"></div>
                <div className="x2-floor-plan">{x2FloorPlan}</div>
              </div>
            </div>
          </a>
        </div>
      </form>
    </div>
  );
}

export default MacBookAir1;
