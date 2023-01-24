import React from "react";
import "../styles/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (props) => {
  return (
    <>
      {/* 4. thus replace the 'div' with 'Card' custom component thereby adding the css to these which are common */}
      {/* <div className="expense-item"> */}

      <Card className="expense-item">
        <div>
          <ExpenseDate datenew={props.date} />
        </div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </Card>
      {/* </div> */}
    </>
  );
};

export default ExpenseItem;
