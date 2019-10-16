import React from "react";

function Conditional(props) {
  return (
    <div>
      <h1>NavBar</h1>
      {props.isLoading ? (
        <h1>Loading motherfucker!</h1>
      ) : (
        <h1>Not loading motherfucker!</h1>
      )}
      <h1>Footer</h1>
    </div>
  );
}

export default Conditional;
