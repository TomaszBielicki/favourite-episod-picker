import React, { Fragment, useContext } from "react";
import { Store } from "./Store";

export default function App(): JSX.Element {
  const store = React.useContext(Store);

  return (
    <React.Fragment>
      <h1>Rick and Morty</h1>
      <p>Pick your favourit episod</p>
    </React.Fragment>
  );
}
