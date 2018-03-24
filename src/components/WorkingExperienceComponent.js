import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class WorkingExperienceComponent extends Component {
    
    handleChange(e) {
      var change = {}
      change[e.target.name] = e.target.value
      this.props.callbackFromParent(change)
    }

    render() {
      return (
        <Form>
          <h5>Working Experience</h5>
            <FormGroup row>
              <Label for="companyName" sm={4}>Company Name</Label>
              <Label for="startDate" sm={4}>Start Date</Label>
              <Label for="endDate" sm={4}>End Date</Label>
            </FormGroup>
            <FormGroup row>
              <Col sm={4}>
                <Input type="text" name="companyName" id="companyName" placeholder="Company Name" onChange={this.handleChange.bind(this)} />
              </Col>
              <Col sm={4}>
                <Input type="date" name="startDate" id="startDate"  placeholder="Start Date" onChange={this.handleChange.bind(this)} />
              </Col>
              <Col sm={4}>
                <Input type="date" name="endDate" id="endDate" placeholder="End Date" onChange={this.handleChange.bind(this)} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="role" sm={6}>Role</Label>
              <Label for="responsibility" sm={6}>Responsibility</Label>
            </FormGroup>
            <FormGroup row> 
              <Col sm={6}>
                <Input type="text" name="role" id="role" placeholder="Role" onChange={this.handleChange.bind(this)} />
              </Col>
              <Col sm={6}>
                <Input type="text" name="responsibility" id="responsibility" placeholder="Responsibility" onChange={this.handleChange.bind(this)} />
              </Col>
            </FormGroup>
        </Form>
      );
    }
}
   
export default WorkingExperienceComponent;