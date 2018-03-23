import React, { Component } from 'react'
import { Table } from 'reactstrap';

export default class Grid extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    renderHeader(dataSource){
        let headerList = dataSource[0]
        return Object.keys(headerList).map(header => {
            return(
                <th>{header}</th>
            )
        })
    }

    reArangeHeaderKey(header){
        
    }

    renderCel(row){
        return Object.keys(row).map((key, index) => {
            return (
                index === 0 ? <th scope="row">{row[key]}</th> : <td>{row[key]}</td>
            )
        })
    }

    renderRow(dataSource){
        return dataSource.map(row => {
            return (
                <tr> {this.renderCel(row)} </tr>
            ) 
        })
    }

    render() {
        return ( 
            <Table striped hover responsive size="lg">
                <thead>
                <tr>
                    {this.renderHeader(this.props.dataSource)}
                </tr>
                </thead>
                <tbody>
                    {this.renderRow(this.props.dataSource)}
                </tbody>
            </Table>
        )
    }
}