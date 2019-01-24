import * as React from "react";
import styled from "styled-components";

const TheadTag = styled.thead`
  background: lightgray;
`;

const TableHeader = () => (
  <TheadTag>
    <tr>
      <th>Civility</th>
      <th>First name</th>
      <th>Last name</th>
      <th>Country</th>
    </tr>
  </TheadTag>
);
export default TableHeader;