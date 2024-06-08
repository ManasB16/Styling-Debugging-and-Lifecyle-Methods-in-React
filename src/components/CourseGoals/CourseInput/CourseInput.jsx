// Write your code at relevant places in the code below:

import React, { useState } from "react";

import "./CourseInput.css";
import Button from "../../UI/Buttons/Button";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [valid, setValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.length == 0) {
      setValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!valid ? `invalid` : ``}`}>
        <label htmlFor="goalInput">Course Goal</label>
        <input id="goalInput" type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
