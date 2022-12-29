import React, { useEffect } from "react";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
import * as MuiMaterial from "@mui/material";
import "./Checkbox2.css";

function Checkbox2(props) {
  const { className } = props;

  return (
    <div className={`checkbox ${className || ""}`}>
      <MuiMaterial.Checkbox size="medium" disabled={false} color="secondary" defaultChecked={false} />
    </div>
  );
}

export default Checkbox2;
