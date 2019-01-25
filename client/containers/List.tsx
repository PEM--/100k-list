import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo"

import Item from '../ui/Item'
import Loading from '../ui/Loading'
import Table from '../ui/Table'

// Item.defaultProps = {
//   columnSizes: {
//     civility: 50,
//     country: 100,
//     firstName: 100,
//     lastName: 100
//   }
// };

type Props = {
  data: any
}

class List extends React.Component<Props, {}> {
  handleHeaderClick = (headerName: string): void => {
    console.log('headerName', headerName)
  }
  render() {
    const { data } = this.props
    if (data.loading) return <Loading>Loading data over HTTP...</Loading>
    return (<Table onHeaderClick={this.handleHeaderClick}>
      {data.items
        .map(item => <Item key={item.id} {...item} />)}
    </Table>)
  }
}
export default graphql(gql`
  query items {
    items {
      id civility country firstName lastName
    }
  }
`)(List)