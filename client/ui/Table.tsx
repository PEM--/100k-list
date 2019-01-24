import * as React from "react";
import styled from "styled-components";

import TableHeader from "./TableHeader"

const TableTag = styled.table`
  border-spacing: 0;
  width: 100%;
  th, td {
    padding: .25em;
    &:not(:first-of-type) {
      border-left: 1px solid gray;
    }
  }
`;

const Table = ({ children }) => (
  <TableTag>
    <TableHeader />
    <tbody>
      {children}
    </tbody>
  </TableTag>
)

export default Table;