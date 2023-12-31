import './App.css';
import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isChanging, setIsChanging] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsChanging(false); 

    if (firstName.trim() !== "" && lastName.trim() !== "") {
      setIsClicked(true);
    }
  }

  const handleChange1 = (e) => {
    setFirstName(e.target.value);
    setIsChanging(true);
  }

  const handleChange2 = (e) => {
    setLastName(e.target.value);
    setIsChanging(true);
  }

  return (
    <div className="App">
      <h1><strong> Full Name Display </strong></h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          First Name
        </label>
        <input
          value={firstName}
          onChange={handleChange1}
          className="inputField"
          type="text"
          name="firstName"
          pattern=".*\S.*"
          title="Please fill out the field"
          required
        />

        <label>
          Last Name
        </label>
        <input
          value={lastName}
          onChange={handleChange2}
          className="inputField"
          type="text"
          name="lastName"
          pattern=".*\S.*"
          title="Please fill out the field"
          required
        />

        <button className="submitBtn" type="submit" value="Submit"> Submit </button>
      </form>
      {isClicked && !isChanging && firstName && lastName && (
        <div>
          <p>Full Name: {firstName + ' ' + lastName}</p>
        </div>
      )}
    </div>
  );
}

export default App;
