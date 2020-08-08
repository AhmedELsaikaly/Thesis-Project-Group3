//import used technologies
import React from "react";

//import CSS

//import used files

//create CheckBox Compo
const CheckBox = (props) => {
  return (
    <div id="checkElement" className="form-check form-check-inline">
      <label className="form-check-label">
        <input
          className="form-check-input"
          key={props.id}
          type="checkbox"
          defaultChecked={props.isChecked}
          onClick={props.handleCheckChieldElement}
          value={props.value}
        />
        {props.value}
      </label>
    </div>
  );
};

//create CheckBox Compo
export default CheckBox;

//check and validate
