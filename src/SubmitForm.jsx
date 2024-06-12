import React, { useContext } from "react";
import RequestFormButton from './RequestFormButton'
import StylesContext from "./StylesContext"

export default function SubmitForm() {
  const buttonStyling = React.useContext(StylesContext)
  
  return (
    <div style={{display: "flex"}}>
      <form style={{display: "inline-block"}}>
        <label>
          Name of Comic:
          <input style={buttonStyling}  type="text" />
        </label>
        <label>
          Year of Release:
          <input style={buttonStyling}  type="text" />
        </label>
        <label>
          Your Email:
          <input style={buttonStyling}  type="text" />
        </label>

        <RequestFormButton />
      
      </form> 
    </div>
  );
}
