import * as React from "react";
import styled from "styled-components";

const TheadTag = styled.thead`
  background: lightgray;
`;

interface TableHeaderProps {
  onHeaderClick: () => void
}

export default class TableHeader extends React.Component<TableHeaderProps, {}> {
  render () {
    const { onHeaderClick } = this.props
    return (<TheadTag>
      <tr>
        <th><button onClick={onHeaderClick}>Civility</button></th>
        <th><button onClick={onHeaderClick}>First name</button></th>
        <th><button onClick={onHeaderClick}>Last name</button></th>
        <th><button onClick={onHeaderClick}>Country</button></th>
      </tr>
    </TheadTag>);
  }
}