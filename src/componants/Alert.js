import React from "react";

const Alert = (props) => {
  return (
    <div style={{ height: "65px" }}>
      {props.setAlert && (
        <div>
          <div
            className={`alert alert-${props.setAlert.type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>{props.setAlert.type}</strong> {props.setAlert.message}
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;
