import * as React from "react";

export interface MainProps { compiler: string; framework: string; }

export class Main extends React.Component<MainProps, {}> {
  render() {
    return <h1>Test component: {this.props.compiler}, {this.props.framework}</h1>;
  }
}