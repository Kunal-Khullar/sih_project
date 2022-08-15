import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useMutation, useQuery } from "@apollo/client";
import "./login.css";
import { TEST_QUERY, TEST_MUTATION } from "../../graphql/requests";
const Login = () => {
  const [user, setUser] = useState("");
  const [email, setMail] = useState("");
  const [pass, setPass] = useState("");
  const history = useNavigate();
  const testdata = useQuery(TEST_QUERY);
  const [getToken, { data: meal }] = useMutation(TEST_MUTATION, {
    variables: {
      username: email,
      password: pass,
    },
  });
  const conditionalLogin = async () => {
    console.log(email, pass);
    const tokendata = await getToken({
      variables: {
        username: email,
        password: pass,
      },
    });
    if (tokendata) {
      console.log(tokendata);
    } else {
      console.log("lauda");
    }
    if (testdata) {
      console.log(testdata);
    }
    // if(user==="student")
    // {
    //  history("/student")
    // }
    // else if(user==="institute")
    // {
    //   history("/institue")
    // }
    // else if(user==="manager")
    // {
    //   history("/manager")
    // }
    // else
    // {
    //     alert("Invalid Login Credentials");
    // }
  };

  return (
    <div>
      <Row id="navrow">
        <Col id="col1">
        <h5>PROJECT LOGO</h5>
        </Col>
        <Col id="col2">
        <Button className="mybtn2">Sign Up</Button>
        </Col>
      </Row>
      <Row id="loginrow">

        <Col>
        
        </Col>
        <Col>
          <Form className="form-container" id="loginform">
            <Row>
            <p id="id1">Login as:</p>
            <Form.Group>
              
              <Form.Select id='usertype' name="Login As:"
                value={user}
                onChange={(e) => {
                  setUser(e.target.value);
                }}
              >
                Login As:
                <option value="S">Student</option>
                <option value="I ">Insititute</option>
                <option value="M">Manager</option>
              </Form.Select>
            </Form.Group>
            </Row>
          
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                value={email}
                type="text"
                placeholder="Enter Username"
                onChange={(e) => {
                  setMail(e.target.value);
                }}
              />
              
            </Form.Group>
           
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                placeholder="Password"
              />
            </Form.Group>

            <Button
              className="mybtn"
              onClick={conditionalLogin}
              variant="primary"
              type="button"
            >
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
