import React from "react";
import "../styles/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  console.log(props.title);
  return (
    <>
      <div className="expense-item">
        <div>
          <ExpenseDate datenew={props.date}/>
        </div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </div>
    </>
  );
};

export default ExpenseItem;
