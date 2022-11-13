import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
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
import { ReactSession } from 'react-client-session';
import toast, { Toaster } from "react-hot-toast";


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
    let error = []

    if (title.trim() === '') {
      error.push('title')
    }
    if (content.trim() === '') {
      error.push('content')
    }
    if (school ==='') {
      error.push('school')
    }
    if (error.length > 0) {
      toast.error(`Please enter ${error.join(', ')}`);    
      return
    }





    addDocument({
      poster: user.email,
      school,
      content,
      title,
      votes: 0,
      comments: [],
      upVoters: [],
      downVoters: []
    });

    ReactSession.set("addedPost", true)

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
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          // Default options for specific types
          error: {
            duration: 2000,
          },
          style: {
            border: "2px solid #5271ff",
            padding: "16px",
          },
        }}
      />
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
              <option selected></option>
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
      </>
      );
};

      export default AddPostComp;
