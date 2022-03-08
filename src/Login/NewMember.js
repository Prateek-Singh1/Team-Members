import React from "react";
import "./Signup.css";

const NewMember = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          <b>X</b>
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default NewMember;
