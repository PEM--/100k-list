import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo"

import Item from '../ui/Item'
import Loading from '../ui/Loading'

// Item.defaultProps = {
//   columnSizes: {
//     civility: 50,
//     country: 100,
//     firstName: 100,
//     lastName: 100
//   }
// };


class List extends React.Component {
  render() {
    const { data, items } = this.props
    if (data.loading) return <Loading>Loading...</Loading>
    return (<table>
      <thead>
        <tr>
          <td>Civility</td>
          <td>First name</td>
          <td>Last name</td>
          <td>Country</td>
        </tr>
      </thead>
      <tbody>
        {data.items
          .map(({ id, ...others}) => <Item key={id} {...others} />)}
      </tbody>
    </table>)
  }
}
export default graphql(gql`
  query items {
    items {
      id civility country firstName lastName
    }
  }
`)(List)