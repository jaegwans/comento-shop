import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function ProductCard({ imgSrc, title, summary, id }) {
    const navigate = useNavigate();
    return (
        <StyledProductCard
            onClick={() => {
                navigate(`product/${id}`);
                console.log(id);
            }}
        >
            <img src={imgSrc} alt="title" />
            <h3>{title}</h3>
            <p>{summary}</p>
        </StyledProductCard>
    );
}

const StyledProductCard = styled.button`
    all: unset;
    width: 342px;
    height: 296px;
    margin-top: 40px;
    h3 {
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 26px;
        margin-top: 12px;
    }
    p {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        margin-top: 12px;
        /* or 131% */

        letter-spacing: -0.01em;
    }
    img {
        object-fit: cover;
        width: 341px;
        height: 204px;
    }
`;

export default ProductCard;
