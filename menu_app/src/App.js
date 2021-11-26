import React, { useState } from "react";
import "./App.css";
import MenuItemComponent from "./components/MenuItem";

function App() {
  let [menuSelection, setMenuSelection] = useState("drinks");

  return (
    <div className="App">
      <Buttons
        menuSelection={menuSelection}
        onMenuSelChange={(myMenuSel) => setMenuSelection(myMenuSel)}
      />
      <div className="p-6 md:p-8 my-4 w-auto transition-all transform bg-white shadow-xl rounded-2xl max-w-xl mx-4 sm:mx-auto">
        <Header />
      </div>

      <div className="p-6 md:p-8 my-4 w-auto transition-all transform bg-white shadow-xl rounded-2xl max-w-xl mx-4 sm:mx-auto">
        {menuSelection === "drinks" && (
          <MenuItemComponent selection={"drinks"} />
        )}
        {menuSelection === "dinner" && (
          <MenuItemComponent selection={"dinner"} />
        )}
      </div>
    </div>
  );
}

class Header extends React.Component {
  render() {
    return (
      <div className="text-gray-500">
        <h1 className="text-2xl font-bold border-b-4 border-gray-500 ">
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
        className={`px-3 py-2 mx-1 font-medium rounded text-white bg-black ${
          menuSelection === "dinner"
            ? " bg-opacity-20"
            : "hover:bg-opacity-5 bg-opacity-0"
        }`}
      >
        Dinner
      </button>
      <button
        onClick={() => onMenuSelChange("drinks")}
        className={`px-3 py-2 mx-1 font-medium rounded text-white bg-black ${
          menuSelection === "drinks"
            ? " bg-opacity-20"
            : "hover:bg-opacity-5 bg-opacity-0"
        }`}
      >
        Drinks
      </button>
    </div>
  );
};

export default App;
