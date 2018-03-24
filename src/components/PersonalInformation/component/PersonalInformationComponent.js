import React, {Component} from 'react'
import {Col, Form, FormGroup, Input, Label} from 'reactstrap';

export default class PersonalInformationComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <h1>Personal Information</h1>
                <Form>
                    <FormGroup row>
                      <Label for="firstname" sm={12} md={4} lg={4}
                             className="control-label">Firstname</Label>
                        <Label for="lastName" sm={12} md={4} lg={4}>LastName</Label>
                        <Label for="birthName"sm={12} md={4} lg={4}>Birthdate</Label>
                    </FormGroup>

                    <FormGroup row>
                        <Col sm={12} md={4} lg={4}>
                            <Input type="text" name="firstName" id="exampleFirstName" placeholder="Firstname" />
                        </Col>
                        <Col sm={12} md={4} lg={4}>
                            <Input type="text" name="lastName" id="exampleLastName" placeholder="Lastname" />
                        </Col>
                        <Col sm={12} md={4} lg={4}>
                            <Input type="date" name="birthdate" id="exampleBirthdate" placeholder="Birtdate" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="address" sm={12} md={4} lg={4}>Address</Label>
                    </FormGroup>

                    <FormGroup row>
                        <Col sm={12} md={12} lg={12}>
                            <Input type="text" name="address" id="exampleAddress" placeholder="Address" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="email" sm={12} md={4} lg={4}>Email Address</Label>
                        <Label for="contactNumber" sm={12} md={4} lg={4}>Contact Number</Label>
                        <Label for="mobileNumber" sm={12} md={4} lg={4}>Mobile Number</Label>
                    </FormGroup>

                    <FormGroup row>
                        <Col sm={12} md={4} lg={4}>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email Address" />
                        </Col>
                        <Col sm={12} md={4} lg={4}>
                            <Input type="text" name="contact" id="exampleContact" placeholder="Contact Number" />
                        </Col>
                        <Col sm={12} md={4} lg={4}>
                            <Input type="text" name="mobile" id="exampleMobile" placeholder="Mobile Number" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="email" sm={12} md={4} lg={4}>Position Applied</Label>
                        <Label for="contactNumber" sm={12} md={4} lg={4}>Expected Salary(THB)</Label>
                        <Label for="reference" sm={12} md={4} lg={4}>Reference</Label>
                    </FormGroup>

                    <FormGroup row>
                        <Col sm={12} md={4} lg={4}>
                            <Input type="text" name="position" id="examplePosition" placeholder="Position Applied" />
                        </Col>
                        <Col sm={12} md={4} lg={4}>
                            <Input type="text" name="salary" id="exampleSalary" placeholder="Expected Salary(THB)" />
                        </Col>
                        <Col sm={12} md={4} lg={4}>
                            <Input type="text" name="reference" id="exampleReference" placeholder="Reference" />
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}