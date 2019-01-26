import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo"

import Item from '../ui/Item'
import Loading from '../ui/Loading'
import Table from '../ui/Table'

interface Props {
  data: any
}

class List extends React.Component<Props, {}> {
  state = { order: null, direction: "asc" }
  handleHeaderClick = (headerName: string): void => {
    const newState = { ...this.state };
    // Set new sort order
    if (!this.state.order) {
      newState.order = headerName;
    // Inverse current order
    } else if (this.state.order === headerName) {
      newState.direction = this.state.direction === "asc" ? "desc" : "asc";
    // Replacing sort order
    } else {
      newState.order = headerName;
      newState.direction = "asc";
    }
    console.log('newState', newState)
    this.setState(newState);
  }
  render() {
    const { data } = this.props
    if (data.loading) return <Loading>Loading data over HTTP...</Loading>
    return (<Table onHeaderClick={this.handleHeaderClick} {...this.state}>
      {data.items.map(item => <Item key={item.id} {...item} />)}
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