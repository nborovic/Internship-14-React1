import React, { Component } from "react";
import GroceriesList from "./components/GroceriesList";
import BasketList from "./components/BasketList";
import "./styles/common.css";
import "./styles/shopping.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        {
          id: 1,
          label: "Strawberry",
          count: 0,
          isCompleted: false
        },
        {
          id: 2,
          label: "Blueberry",
          count: 0,
          isCompleted: false
        },
        {
          id: 3,
          label: "Orange",
          count: 0,
          isCompleted: false
        },
        {
          id: 4,
          label: "Banana",
          count: 0,
          isCompleted: false
        },
        {
          id: 5,
          label: "Apple",
          count: 0,
          isCompleted: false
        },
        {
          id: 6,
          label: "Carrot",
          count: 0,
          isCompleted: false
        },
        {
          id: 7,
          label: "Celery",
          count: 0,
          isCompleted: false
        },
        {
          id: 8,
          label: "Mushroom",
          count: 0,
          isCompleted: false
        },
        {
          id: 9,
          label: "Green Pepper",
          count: 0,
          isCompleted: false
        },
        {
          id: 10,
          label: "Eggs",
          count: 0,
          isCompleted: false
        },
        {
          id: 11,
          label: "Chese",
          count: 0,
          isCompleted: false
        },
        {
          id: 12,
          label: "Butter",
          count: 0,
          isCompleted: false
        }
      ]
    };
  }

  addItem = id => {
    let groceriesCopy = this.state.groceries;
    groceriesCopy[id - 1].count++;

    this.setState({ groceries: groceriesCopy });
  };

  removeItem = id => {
    let groceriesCopy = this.state.groceries;
    groceriesCopy[id - 1].count--;

    this.setState({ groceries: groceriesCopy });
  };

  removeAllItems = () => {
    let groceriesCopy = this.state.groceries;
    groceriesCopy.forEach(grocerie => (grocerie.count = 0));

    this.setState({ groceries: groceriesCopy });
  };

  changeItemCompletion = (e, id) => {
    let groceriesCopy = this.state.groceries;
    groceriesCopy[id - 1].isCompleted = groceriesCopy[id - 1].isCompleted
      ? false
      : true;

    this.setState({ groceries: groceriesCopy });
    e.stopPropagation();
  };

  render() {
    return (
      <main>
        <div className="main__shopping">
          <GroceriesList
            groceries={this.state.groceries}
            addItem={this.addItem}
          />
          <BasketList
            groceries={this.state.groceries}
            removeItem={this.removeItem}
            removeAllItems={this.removeAllItems}
            changeItemCompletion={this.changeItemCompletion}
          />
        </div>
      </main>
    );
  }
}

export default App;
