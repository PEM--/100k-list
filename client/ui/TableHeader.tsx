import * as React from "react";
import styled from "styled-components";

import ClickableTh from './ClickableTh';

const TheadTag = styled.thead`
  background: lightgray;
`;

const TableHeader = (props) => (<TheadTag>
  <tr>
    <ClickableTh text="Civility" { ...props } />
    <ClickableTh text="First Name" { ...props } />
    <ClickableTh text="Last Name" { ...props } />
    <ClickableTh text="Country" { ...props } />
  </tr>
</TheadTag>);
export default TableHeader;
