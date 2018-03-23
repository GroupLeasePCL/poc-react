import React, { Component } from 'react'
import EducationComponent from './component/EducationComponent';

export default class EducationContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>
                    <EducationComponent />
                </div>
            </div>
        );
    }
}