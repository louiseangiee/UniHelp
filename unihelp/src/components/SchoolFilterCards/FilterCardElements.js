import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

export const FilterCard = styled(Card)`
    align-items: center;
    height: 100%;

    &:hover {
        border-color: #5271FF;
        transform: scale(1.005);
        transition: all 0.1s ease-in-out;
        cursor: pointer;
    }
`
