import React from "react";
import Grocerie from "./Grocerie";

let GroceriesList = props => {
  return (
    <div className="shopping__groceries-list">
      <h2 className="groceries-list__title">Groceries</h2>

      {props.groceries.map(grocerie => (
        <Grocerie
          key={grocerie.id}
          grocerie={grocerie}
          action={props.addItem}
          type="selection"
          handleTitleClick={() => {}}
        />
      ))}
    </div>
  );
};

export default GroceriesList;
