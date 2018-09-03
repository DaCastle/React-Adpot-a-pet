import React from "react";

//react element : dom element, {attributes/props as key/value pairs}, child/ren
const Pet = props => {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, props.name),
  //     React.createElement("h2", {}, props.animal),
  //     React.createElement("h2", {}, props.breed)
  //   ]);

  return (
    // this is using jsx. litteral translation to above example.
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};

export default Pet;
