import React from "react";

const addButton = () => {
  return (
    <button className="grocerie__button grocerie__button--add">
      <img
        src={require("../assets/images/add.png")}
        alt="Add icon"
        className="button__icon"
      />
    </button>
  );
};

const removeButton = () => {
  return (
    <button className="grocerie__button grocerie__button--remove">
      <img
        src={require("../assets/images/subtract.png")}
        alt="Remove icon"
        className="button__icon"
      />
    </button>
  );
};

const Grocerie = props => {
  return (
    <div
      className="list__grocerie clearfix"
      onClick={() => props.action(props.grocerie.id)}
    >
      {props.type === "selection"
        ? addButton()
        : props.type === "selected"
        ? removeButton()
        : null}
      <h2
        onClick={e => props.handleTitleClick(e, props.grocerie.id)}
        className={
          props.type === "selection"
            ? "grocerie__name"
            : props.grocerie.isCompleted
            ? "td-lt grocerie__name"
            : "td-n grocerie__name"
        }
      >
        {props.type === "selection"
          ? props.grocerie.label
          : props.grocerie.count + " " + props.grocerie.label}
      </h2>
    </div>
  );
};

export default Grocerie;
