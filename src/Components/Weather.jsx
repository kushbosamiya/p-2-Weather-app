import React, { Component } from "react";

const Weather = (props) => {
  return (
    <div className="Container parent_cont">
      <div className="Cards pt-4">
        <h1>{props.city}</h1>
        <h5>
          <i className="{`wi-thunderstorm display-1`} " />
        </h5>
        {props.temp_celsius ? <h1>{props.temp_celsius}&deg;</h1> : null}

        {minmaxTemp(props.temp_min, props.temp_max)}

        <h4>{props.description}</h4>
      </div>
    </div>
  );
};
function minmaxTemp(min, max) {
  if (min && max) {
    return (
      <h3>
        <span>{min}&deg;</span>
        <span>{max}&deg;</span>
      </h3>
    );
  }
}
export default Weather;
