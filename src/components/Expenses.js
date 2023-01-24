import React from "react";
import ExpenseItem from "./ExpenseItem";
import "../styles/Expenses.css";
import Card from "./Card";

const Expenses = (props) => {
  return (
    <>
      {/* 5. thus replace the 'div' with 'Card' custom component thereby adding the css to these which are common */}
      <div className="expenses">
      {/* <Card className='expenses'> */}
        <ExpenseItem
          title={props?.item[0].title}
          amount={props?.item[0].amount}
          date={props?.item[0].date}
        />
        <ExpenseItem
          title={props?.item[1].title}
          amount={props?.item[1].amount}
          date={props?.item[1].date}
        />
        <ExpenseItem
          title={props?.item[2].title}
          amount={props?.item[2].amount}
          date={props?.item[2].date}
        />
      {/* </Card> */}
      </div>
    </>
  );
};

export default Expenses;
