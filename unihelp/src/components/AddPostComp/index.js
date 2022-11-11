import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import FormText from "react-bootstrap/esm/FormText";
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import {
  CContainer,
  CButton,
  CFormGroup,
  CFormLabel,
  CH1,
} from "./AddPostElements";

const AddPostComp = () => {
  const { addDocument, response } = useFirestore("forumPost");

  const [school, setSchool] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const { user } = useAuthContext();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`
      School: ${school}
      Content: ${content}
      Title: ${title}
    `);

    addDocument({
      poster: user.email,
      school,
      content,
      title,
      votes: 0,
      comments: [],
      upVoters:[],
      downVoters:[]
    });
  };

  useEffect(() => {
    if (response.success) {
      setSchool("");
      setContent("");
      setTitle("");
      window.location.replace("/forum");
    }
  }, [response.success]);

  return (
    <CContainer id="form">
      <Form onSubmit={handleSubmit}>
        <CFormGroup className="mx-3 my-5">
          <CH1> Create new Forum Thread</CH1>
          <CFormLabel> School </CFormLabel>
          <Form.Control
            as="select"
            onChange={(e) => setSchool(e.target.value)}
            value={school}
          >
            <option selected>-- select an option --</option>
            <option>NUS</option>
            <option>NTU</option>
            <option>SMU</option>
          </Form.Control>

          <CFormLabel className="mt-3 font-weight-bold">
            {" "}
            Forum Thread Title{" "}
          </CFormLabel>

          <Form.Control
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="e.g. I need help with Mods!"
          />

          <CFormLabel className="mt-3 font-weight-bold">
            {" "}
            Forum Content{" "}
          </CFormLabel>

          <Form.Control
            as="textarea"
            row={10}
            onChange={(e) => setContent(e.target.value)}
            value={content}
            placeholder="e.g. What prof to bid for IS110?"
          />

          <CButton variant="primary" type="submit">
            POST
          </CButton>
        </CFormGroup>
      </Form>
    </CContainer>
  );
};

export default AddPostComp;
