
import React, { Component } from 'react'
import PersonalInformationComponent from './component/PersonalInformationComponent';
export default class PersonalInformationContainer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <PersonalInformationComponent />  
            </div>
        );
    }
}