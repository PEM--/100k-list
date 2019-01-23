import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo"

import Loading from '../ui/Loading'

class List extends React.Component {
  render() {
    console.log('this.props', this.props)
    const { data } = this.props
    if (data.loading) return <Loading>Loading...</Loading>
    return (<ul><li>Hello world</li></ul>)
  }
}
export default graphql(gql`
  query items {
    items {
      id civility country firstName lastName
    }
  }
`)(List)