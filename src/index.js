import React from "react";
import ReactDOM from "react-dom";
import { hotjar } from "react-hotjar";
import "./index.css";
import PalabrasContainer from "./containers/PalabrasContainer";
import registerServiceWorker from "./registerServiceWorker";

hotjar.initialize(1465233, 6);

ReactDOM.render(<PalabrasContainer />, document.getElementById("root"));
registerServiceWorker();
