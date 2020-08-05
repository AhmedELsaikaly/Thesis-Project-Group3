//import used technologies
import React from "react";

//Create CheckBox compo
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

//export checkBox Compo
export default CheckBox;
