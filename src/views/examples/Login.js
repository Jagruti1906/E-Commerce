import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom"

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
import auth from "reducers/auth";

import {login} from "../../actions/auth"

const Login = ({login, auth, history}) => {

    const [username,setUsername] = useState("");
    const [password,setPass] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = {
        username,
        password
      }
      login({formData});
    }

    useEffect(() => {
      if(auth.isAuthenticated) {
        history.push("/admin/index")
      }
    },[auth.isAuthenticated])

    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <bold>Sign in with credentials</bold>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Username" type="text" value={username} onChange={e => setUsername(e.target.value)} required/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" autoComplete="new-password" value={password} onChange={e=> setPass(e.target.value)} required/>
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button" onClick={handleSubmit}>
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardHeader>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <Link
                className="text-center text-light"
                to="/auth/register"
              >
                <small>Create New Account</small>
              </Link>
            </Col>
          </Row>
        </Col>
      </>
    );
  }

const mapsStateToProps = state => ({
  auth: state.auth
})

export default connect(mapsStateToProps, {login})(Login);
