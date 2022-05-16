
import React from "react";

function App() {
  return (
    <div> 
      <h1>Hello World!</h1> 
      <Food fav="kimchi" somthing={true} papapapa={['hello', 1, 2, 3, 4, true]} />
    </div>
  );
}

function Food() {
  return <h1>I love potato</h1>;
}

export default App;
