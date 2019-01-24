import * as React from "react";


const Item = ({
  key,
  civility,
  country,
  firstName,
  lastName
}) => (<tr>
  <td>{civility}</td>
  <td>{firstName}</td>
  <td>{lastName}</td>
  <td>{country}</td>
</tr>);
export default Item;