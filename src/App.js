import React from "react";

function App() {
  let name = ["vivek", "aditi", "shivam", "a", "b"];
  let a = 5;
  return (
    <div>
      {name.map((val, index) => {
        return (
          <div key={index}>
            <h1>{index}</h1>
          </div>
        )
      })}
      <div>
        { a%2===0 ? <h1>Even</h1> : a%3==0 ? "Divivsible by 3": "Not divisible by 3" }
        <h1>Hello world</h1>
        <h2>Hello h2</h2>
        <h1>{name}</h1>
      </div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_Homepage.svg/800px-Google_Homepage.svg.png" />
    </div>
  );
}

export default App;
