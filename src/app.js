import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

class App extends React.Component {
  handleTitleClick() {
    alert("You clicked the title");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adopt Me!"
      ),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "bird",
        breed: "Cockatiel"
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "cat",
        breed: "Mixed"
      })
    ]);
  }
}

// Render what(instance of an class), where
render(React.createElement(App), document.getElementById("root"));
