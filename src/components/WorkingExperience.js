import React
  , { Component } from 'react';
import { Col
  , Button
  , Form
  , FormGroup
  , Label
  , Input
  , FormText } from 'reactstrap';

class EducationComponant extends Component {
    constructor(props) {
      super(props);
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
                <Input type="text" name="companyName" id="companyName" placeholder="Company Name" />
              </Col>
              <Col sm={4}>
                <Input type="date" name="startDate" id="startDate"  placeholder="Start Date" />
              </Col>
              <Col sm={4}>
                <Input type="date" name="endDate" id="endDate" placeholder="End Date" />
              </Col>
          </FormGroup>

          <FormGroup row>
              <Label for="role" sm={6}>Role</Label>
              <Label for="responsibility" sm={6}>Responsibility</Label>
            </FormGroup>
            <FormGroup row> 
              <Col sm={6}>
                <Input type="text" name="role" id="role" placeholder="Role" />
              </Col>
              <Col sm={6}>
              <Input type="text" name="responsibility" id="responsibility" placeholder="Responsibility" />
              </Col>
          </FormGroup>
        </Form>
      );
    }
   }
   
   export default EducationComponant;