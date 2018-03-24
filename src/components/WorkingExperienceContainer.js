import React, { Component } from 'react';
import WorkingExperienceComponent from './WorkingExperienceComponent.js';

class WorkingExperienceContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.callback = this.callback.bind(this)
    }
    callback = (dataFromChild) => {
        this.setState(dataFromChild)
    }
    render() {
        return (
            <div>
                <WorkingExperienceComponent callbackFromParent={this.callback}/>  
            </div>
        );
    }
}

export default WorkingExperienceContainer;