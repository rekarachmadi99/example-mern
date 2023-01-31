import React from "react";
import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  Row,
} from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Row className="d-flex justify-content-center mt-2">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Form onSubmit={saveUser}>
                <FormGroup>
                  <FormLabel>Name</FormLabel>
                  <FormControl
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="name"
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Email</FormLabel>
                  <FormControl
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Gender</FormLabel>
                  <FormSelect
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="Male">Male</option>
                    <option value="Famale">Famale</option>
                  </FormSelect>
                </FormGroup>
                <div className="d-grid mt-2">
                  <Button type="submit">Save</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddUser;
