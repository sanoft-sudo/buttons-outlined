import React from "react";
import BasicHoverButtons from "./BasicHoverButtons";
import DisabledButtons from "./DisabledButtons";
import OutlinedButtons from "./OutlinedButtons";

const MainButtons = () => {
  return (
    <div className="row">
      <div className="col-md-4 col-sm-6 col-xs-12">
        <BasicHoverButtons />
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <OutlinedButtons />
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <DisabledButtons />
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12"></div>
    </div>
  );
};
export default MainButtons;
