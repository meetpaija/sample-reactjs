import React, { Component } from 'react';
import { Grid, Row, Panel, Panelbody, Form, FormControl, FormGroup, ControlLabel, Button, Col } from 'react-bootstrap';
import jsonData from '../data/jsonData';
import { browserHistory, Link } from 'react-router';
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.type]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    for (var data in jsonData) {
      console.log(jsonData[data])
      if (this.state.email === jsonData[data].email && this.state.password === jsonData[data].password) {
        browserHistory.push('/view');
        return;
      } else {

      }
    }
  }

  render() {
    return (
      <div>
        <br />
        <Grid >
          <Row >
            <Col md={3}> <h1>Log In</h1></Col>

          </Row>
          <Col><Link to="/register">register here</Link></Col>
          <hr />
          <Panel >
            <Panel.Body>
              <Form horizontal >
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Email
        </Col>
                  <Col sm={10}>
                    <FormControl type="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Password
        </Col>
                  <Col sm={10}>
                    <FormControl type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={1}>
                    <Button type="submit" onClick={this.handleSubmit}>Sign in</Button>
                  </Col>
                </FormGroup>

              </Form>
            </Panel.Body>
          </Panel>
        </Grid>
      </div>
    );
  }
}

export default Login;
