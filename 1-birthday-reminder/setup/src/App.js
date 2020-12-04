import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const clearList = () => {
    setPeople([]);
  };
  console.log(people)
  return (
    <section className="container">
      <p>There are {people.length} birthday(s) today!</p>
      <List people={people}></List>
      <button onClick={clearList}>Clear All</button>
    </section>
  );
}

export default App;
