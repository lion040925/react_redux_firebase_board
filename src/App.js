import React, { Component } from "react";

import BoardList from "./BoardList";
import BoardForm from "./BoardForm";

class App extends Component {
  render() {
    return (
      <div>
        <h3>React Firestore Study</h3>

        <BoardList />
        <BoardForm />
      </div>
    );
  }
}

export default App;
