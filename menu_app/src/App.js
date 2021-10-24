import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="border-2 p-2 md:p-8 bg-white rounded-lg shadow-md">
          <Header />
          <MenuItemComponent />
        </div>
      </div>
    </div>
  );
}

class Header extends React.Component {
  render() {
    return (
      <div className="text-purple-800 pb-5 ">
        <h1 className="text-3xl font-bold">Drink Menu</h1>
        <p>1650 Wewatta St. Unit 726</p>
      </div>
    );
  }
}

class MenuItemComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <SubHeader text="Signature Cocktails" />
        <ul className="text-left">
          <li className="pb-2">
            French Gimlet
            <p className="text-gray-500">
              {" "}
              New Amsterdamn Gin, Elderflower Liqueur, Lime
            </p>
          </li>
          <li className="pb-2">
            Apple Cider Mule
            <p className="text-gray-500">
              {" "}
              New Amsterdamn Vodka, Ginger Beer, Apple Cider, Cinnemon
            </p>
          </li>
          <li className="pb-2">
            Manhattan
            <p className="text-gray-500">
              {" "}
              Makers 46 Bourbon, Vermouth, Angostura bitters
            </p>
          </li>
        </ul>
        <SubHeader text="Beer" />
        <ul className="text-left">
          <li className="">Summer Shandy Homebrew</li>
          <li className="">Sipping Tropical Sour</li>
          <li className="">June Shine Hard Kombucha</li>
          <li className="">White Claw</li>
          <li className="">Coors Light</li>
        </ul>
        <SubHeader text="Non-Alcoholic" />
        <ul className="text-left">
          <li className="">La Croix Sparkling Water</li>
        </ul>
      </div>
    );
  }
}

class SubHeader extends React.Component {
  render() {
    return (
      <div>
        <h3 className="text-l border-b-2 text-left uppercase font-bold my-3">
          {this.props.text}
        </h3>
      </div>
    );
  }
}

export default App;
