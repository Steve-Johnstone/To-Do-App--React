import React from "react";

function Joke(props) {
  return (
    <div>
      <h1 style={{ color: "green", display: !props.question && "none" }}>
        Joke: {props.question}
      </h1>
      <h2 style={{ color: "red" }}>Punchline: {props.punchline}</h2>
    </div>
  );
}

export default Joke;
