import * as React from "react";
import styled from "styled-components";

import ClickableTh from './ClickableTh';

const TheadTag = styled.thead`
  background: lightgray;
`;

const TableHeader = (props) => (<TheadTag>
  <tr>
    <ClickableTh text="Civility" type="civility" { ...props } />
    <ClickableTh text="First Name" type="fisrtName" { ...props } />
    <ClickableTh text="Last Name" type="lastName" { ...props } />
    <ClickableTh text="Country" type="country" { ...props } />
  </tr>
</TheadTag>);
export default TableHeader;
