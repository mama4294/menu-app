import React from "react";
import menuList from "../data.json";

class MenuItemComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.selection === "dinner")
      return (
        <div>
          <ItemNames header="Appetizers" type="app" />
          <ItemNames header="Main Course" type="main" />
          <ItemNames header="Dessert" type="dessert" />
        </div>
      );
    else if (this.props.selection === "drinks")
      return (
        <div>
          <ItemNames header="Signature Cocktails" type="cocktail" />
          <ItemNames header="Beer" type="beer" />
          <ItemNames header="Non-Alcoholic" type="non-alcoholic" />
        </div>
      );
  }
}

class ItemNames extends React.Component {
  constructor(props) {
    super(props);
    this.filteredList = menuList.filter((item) => {
      return item.type === this.props.type;
    });
  }

  render() {
    return (
      <>
        <SubHeader text={this.props.header} />
        <ul className="text-left pl-5">
          {this.filteredList.map((menuItem, i) => (
            <li className="pb-2 font-medium text-gray-700" key={i}>
              {menuItem.name}
              <p className="text-gray-500 font-normal text-sm">
                {" "}
                {menuItem.description}
              </p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

class SubHeader extends React.Component {
  render() {
    return (
      <h3 className="text-lg font-medium border-b-2 text-left text-gray-900 my-3">
        {this.props.text}
      </h3>
    );
  }
}

export default MenuItemComponent;
