import React, { useState } from "react";
import "./App.css";
import MenuItemComponent from "./components/MenuItem";

function App() {
  let [menuSelection, setMenuSelection] = useState("drinks");

  return (
    <div className="App">
      <div className="container">
        <div className="border-2 p-2 md:p-8 m-4 bg-white shadow-md w-auto">
          <Header />
          <Buttons
            menuSelection={menuSelection}
            onMenuSelChange={(myMenuSel) => setMenuSelection(myMenuSel)}
          />
          {menuSelection === "drinks" && (
            <MenuItemComponent selection={"drinks"} />
          )}
          {menuSelection === "dinner" && (
            <MenuItemComponent selection={"dinner"} />
          )}
        </div>
      </div>
    </div>
  );
}

class Header extends React.Component {
  render() {
    return (
      <div className="text-gray-800">
        <h1 className="text-3xl font-bold border-b-4 border-gray-800 ">
          Dinner at the Platform
        </h1>
        <p>1650 Wewatta St. Unit 726</p>
      </div>
    );
  }
}

const Buttons = ({ menuSelection, onMenuSelChange }) => {
  return (
    <div className="my-2">
      <button
        onClick={() => onMenuSelChange("dinner")}
        className={`p-2 m-2 rounded ${
          menuSelection === "dinner"
            ? "bg-gray-600 text-gray-100"
            : "bg-transparent text-gray-700 border border-gray-500 hover:bg-gray-800 hover:text-gray-100"
        }`}
      >
        Dinner
      </button>
      <button
        onClick={() => onMenuSelChange("drinks")}
        className={` p-2 m-2 rounded ${
          menuSelection === "drinks"
            ? "bg-gray-600 text-gray-100"
            : "bg-transparent text-gray-700 border border-gray-500 hover:bg-gray-800 hover:text-gray-100"
        }`}
      >
        Drinks
      </button>
    </div>
  );
};

export default App;
