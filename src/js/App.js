import React from "react";
/* Uncomment if using class */
/* import { Component } from "react"; */
import "../css/app.css";

/* React Component using function */
function App(props) {
  console.log(props.value);
  return (
    <div>
      <div className="parcel red">
        <h1>PARCEL</h1>
      </div>
      <div className="react blue">
        <h1>REACT</h1>
      </div>
    </div>
  );
}

/* React Component using class */
/* class App extends Component {
  constructor(props){
    super(props);
    console.log(props.value);
  }

  render() {
    return (
      <div>
        <div className="parcel red">
          <h1>PARCEL</h1>
        </div>
        <div className="react blue">
          <h1>REACT</h1>
        </div>
      </div>
    );
  }
} */

export default App;
