import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/brooke.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import App from "./common/App";
import { BrowserRouter as Router } from "react-router-dom";
import {store} from "./store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
 <Provider store={store}> <Router>
    <App/>
  </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
