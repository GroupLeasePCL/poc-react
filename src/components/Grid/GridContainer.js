import React, { Component } from 'react'
import Grid from './component/Grid'

export default class GridContainer extends Component {
    constructor(props) {
      super(props)
    //   Mocking Data
      this.state = {
        dataSource: [{
            applicantId: 1,
            firstName: 'Mark',
            lastName: 'Otto',
            emailAddress: '@mdo',
            address: '111 XXX Street Bangkok'
        },{
            applicantId: 2,
            firstName: 'Jacob',
            lastName: 'Thornton',
            emailAddress: '@fat',
            address: '111 XXX Street Bangkok'
        },{
            applicantId: 3,
            firstName: 'Larry',
            lastName: 'The Bird',
            emailAddress: '@twitter',
            address: '111 XXX Street Bangkok'
        }]
      }
    }
  
    render() {
      return (
        <Grid 
        dataSource = {this.state.dataSource}
        />
      )
    }
  }

