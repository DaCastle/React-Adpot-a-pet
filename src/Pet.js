import React from 'react';

//react element : dom element, {attributes/props as key/value pairs}, child/ren
const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

export default Pet;