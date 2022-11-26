import React from 'react';
import styled from 'styled-components';

function ThemeButton({ title }) {
    return <StyledBtn>{title}</StyledBtn>;
}

const StyledBtn = styled.div`
    width: 144px;
    height: 74px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
`;

export default ThemeButton;
