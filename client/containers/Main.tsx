import * as React from "react";

import { GlobalStyle } from "../themes/GlobalStyle"

export interface MainProps { compiler: string; framework: string; }

export class Main extends React.Component<MainProps, {}> {
  render() {
    return (<React.Fragment>
        <GlobalStyle />
        <h1>Test component: {this.props.compiler}, {this.props.framework}</h1>
      </React.Fragment>);
  }
}