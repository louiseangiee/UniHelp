import styled from "styled-components";
import Card from "react-bootstrap/Card";

export const ForumCard = styled(Card)`
margin-bottom: 20px;
padding-left: 0px;
padding-right: 0px;
height: 100%;
border-radius: 20px;
width: 100%;


&:hover {
    border-color: #5271FF;
    transform: scale(1.005);
    transition: all 0.1s ease-in-out;
    cursor: pointer;
}
`;