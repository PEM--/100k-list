import * as React from "react";
import * as ReactDOM from "react-dom";

import { Main } from "./containers/Main";

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) module.hot.accept();
}

ReactDOM.render(<Main />, document.getElementById("root"));