import React from "react";
import Grocerie from "./Grocerie";

const BasketList = props => {
  let basketListCount = 0;

  return (
    <div className="shopping__groceries-list">
      <h2 className="groceries-list__title">Basket</h2>
      {props.groceries.map(grocerie => {
        if (grocerie.count > 0) {
          basketListCount++;

          return (
            <Grocerie
              key={grocerie.id}
              grocerie={grocerie}
              action={props.removeItem}
              type="selected"
              handleTitleClick={props.changeItemCompletion}
            />
          );
        }
        return null; // Because of a warning in the console
      })}

      {!basketListCount ? (
        <Grocerie
          key="0"
          grocerie={{
            id: 0,
            label: "Your basket is empty!",
            count: "",
            isCompleted: false
          }}
          action={() => {}}
          type="info"
          handleTitleClick={() => {}}
        />
      ) : null}

      <button
        className={
          !basketListCount
            ? "display-none groceries-list__delete-button"
            : "display-iblock groceries-list__delete-button"
        }
        onClick={props.removeAllItems}
      >
        <img
          className="delete-button__icon"
          src={require("../assets/images/trash-icon.png")}
          alt="Delete icon"
        />
      </button>
    </div>
  );
};

export default BasketList;
