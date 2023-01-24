import React from "react";
import "../styles/Card.css";

const Card = (props) => {

  const classes='card' + props.className

  //3. this acts a shell for 'Expenses' and 'ExpensesItem' same css comp as this acts as reusable comp
  return (
    //5. whatever wrapped inside <Card/> will act as prop- hence default built in para to render is by using 'props.children'
    <div className={classes}>{props.children}</div>
  );
};

export default Card;
