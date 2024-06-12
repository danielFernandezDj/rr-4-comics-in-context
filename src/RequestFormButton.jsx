import React, { useContext } from "react";
import StylesContext from "./StylesContext";

export default function RequestFormButton() {
  const buttonStyling = React.useContext(StylesContext)
  
  return (
    <div style={{'margin': '10px'}} >
      <button style={buttonStyling} >
        Click Here!
      </button>
      <input style={{background: '#66b5ef', 'margin': '10px'}}  
        type="submit" value="Submit" />

    </div>
  );
}
