import React,{useState,useEffect} from "react";
import {connect} from "react-redux";
import {signup} from "../../actions/auth";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

const Register = ({signup, auth, history}) => {

  const [username,setUsername] = useState("");
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [phone,setPhone] = useState("");
  const [city,setCity] = useState("");
  const [country,setCountry] = useState("");
  const [address,setAddress] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const formData = {
      username,
      first_name: firstName,
      last_name: lastName,
      address,
      city,
      country,
      email,
      password,
      mobile_number: phone
    }
    signup({formData});
  }

  useEffect(() => {
    if(auth.msg === "successful") {
      history.push("/auth/login")
    }
  },[auth])

    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <bold>Sign up with credentials</bold>
              </div>
              <Form role="form">
                <Row>
                  <Col lg="6">
                  <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="First Name" type="text" value={firstName} onChange={e=>setFirstName(e.target.value)} required/>
                  </InputGroup>
                </FormGroup>
                  </Col>
                  <Col lg="6">
                  <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Last Name" type="text" value={lastName} onChange={e=>setLastName(e.target.value)} required/>
                  </InputGroup>
                </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6">
                  <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Username" type="text" value={username} onChange={e=>setUsername(e.target.value)} required/>
                  </InputGroup>
                </FormGroup>
                  </Col>
                  <Col lg="6">
                  <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-mobile-button" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Phone Number" value={phone} onChange={e=>setPhone(e.target.value)} required/>
                  </InputGroup>
                </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6">
                  <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" autoComplete="new-email" value={email} onChange={e=>setEmail(e.target.value)} required/>
                  </InputGroup>
                </FormGroup>
                  </Col>
                  <Col lg="6">
                  <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" autoComplete="new-password" value={password} onChange={e=>setPassword(e.target.value)} required/>
                  </InputGroup>
                </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-pin-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Address" type="text" value={address} onChange={e=>setAddress(e.target.value)} required/>
                  </InputGroup>
                </FormGroup>
                <Row>
                  <Col lg="6">
                  <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-world" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="City" type="text" value={city} onChange={e=>setCity(e.target.value)} required/>
                  </InputGroup>
                </FormGroup>
                  </Col>
                  <Col lg="6">
                  <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-world" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Country" type="text" value={country} onChange={e=>setCountry(e.target.value)} required/>
                  </InputGroup>
                </FormGroup>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="button" onClick={handleClick}>
                    Create account
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {signup})(Register);
