import React from 'react';
import styled from 'styled-components';

function ProductCard({ imgSrc, title, summary }) {
    return (
        <StyledProductCard>
            <img src={imgSrc} width="341px" height="204px" />
            <h3>{title}</h3>
            <p>{summary}</p>
        </StyledProductCard>
    );
}

const StyledProductCard = styled.div`
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
`;

export default ProductCard;
