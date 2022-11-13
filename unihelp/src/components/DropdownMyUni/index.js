import { HighSchoolQualification, HighSchoolQualificationArray } from '../../components/HighSchoolQualification';
import { EnglishArray, EnglishTest } from '../../components/EnglishTest';
import Form from 'react-bootstrap/Form';
import { ReactSession } from "react-client-session";
import React, { useState } from 'react';

export default function DropdownMyUni() {
    ReactSession.setStoreType("localStorage");
    const [qualification, setQualification] = useState('');
    const [englishTest, setEnglishTest] = useState('');
    ReactSession.set("qualification", qualification);
    ReactSession.set("englishTest", englishTest);
    console.log(ReactSession.get("qualification"))
    console.log(ReactSession.get("englishTest"))
    return (
        <>
            <Form.Group className="mb-3 col-6" controlId="select">
                <Form.Label>Academic Qualification Submitted</Form.Label>
                <Form.Control as="select"
                    onChange={(e) => setQualification(e.target.value) } value={qualification}>
                    {HighSchoolQualificationArray.map((qualification) =>
                        <option key={qualification}>{qualification}</option>
                    )}
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3 col-6" controlId="select">
                <Form.Label>English Test Submitted</Form.Label>
                <Form.Control as="select"
                    onChange={(e) => setEnglishTest(e.target.value)} value={englishTest}>
                    {EnglishArray.map((qualification) =>
                        <option key={qualification}>{qualification}</option>
                    )}
                </Form.Control>
            </Form.Group>
        </>
    );

}