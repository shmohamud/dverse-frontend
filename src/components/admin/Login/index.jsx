import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { setUser } from "../../../actions";

const Login = ({setUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = e => {
    e.persist();
    const { name, value } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };
  const handleLoginSubmit = e => {
    e.preventDefault();
    return setUser(email, password);
  };
  return (
    <div>
      <>
        <h1>Administrator Login</h1>
        <Form onSubmit={e => handleLoginSubmit(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={e => handleChange(e)}
              type="email"
              name="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={e => handleChange(e)}
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setUser: (email, password) => {
      dispatch(setUser(email, password));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Login));
