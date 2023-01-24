import React from "react";
import "../styles/ExpenseDate.css";

const ExpenseDate = (props) => {
  //   console.log(props);

  const day = props.datenew.toLocaleString("en-us", { day: "2-digit" });
  const month = props.datenew.toLocaleString("en-us", { month: "long" });
  const year = props.datenew.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__day'>{day}</div>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
    </div>
  );
};

export default ExpenseDate;
