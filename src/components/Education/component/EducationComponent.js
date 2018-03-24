import React, { Component } from 'react'
import {
    Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';
export default class EducationComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
            <h1>Education</h1>
                <Form>
                    <FormGroup row>
                        <Label for="degree" sm={12} md={6} lg={6} class="control-label">Degree</Label>
                        <Label for="university" sm={12} md={6} lg={6}>University</Label>
                    </FormGroup>

                    <FormGroup row>
                        <Col sm={12} md={6} lg={6}>
                            <Input type="text" name="degree" id="exampleDegree" placeholder="Degree" />
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <Input type="text" name="university" id="exampleUniversity" placeholder="University" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="major" sm={12} md={8} lg={8} class="control-label">Major</Label>
                        <Label for="gpa" sm={12} md={4} lg={4}>GPA</Label>
                    </FormGroup>

                    <FormGroup row>
                        <Col sm={12} md={8} lg={8}>
                            <Input type="text" name="major" id="exampleMajor" placeholder="Major" />
                        </Col>
                        <Col sm={12} md={4} lg={4}>
                            <Input type="text" name="gpa" id="exampleGpa" placeholder="GPA" />
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    };
}