import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import styleSet from '../style/styleSet';
import { useParams } from 'react-router-dom';
import { getProductDetail, mockReviews } from '../data/mockData';
import { useNavigate } from 'react-router-dom';
import { click } from '@testing-library/user-event/dist/click';
import Review from '../components/Review';

const ProductDetail = () => {
    const navigate = useNavigate();
    const _onClickBackBtn = () => {
        navigate(-1);
    };

    const { productId } = useParams();
    const product = getProductDetail(productId);
    console.log(product.description);

    const [clicked, setclicked] = useState(true); //detail or review

    // console.log(product.description + 'logs');
    const _onClcickLabelBtn = (e) => {
        const { target } = e;
        const { innerText } = target;
        const flag = innerText === '상품 설명' ? 0 : 1;
        if (clicked !== flag) {
            setclicked(!flag);
        }
        console.log(clicked + '+clicked');
    };

    return (
        <StyledDetail>
            <StyledTitleBox>
                <button className="backBtn" onClick={_onClickBackBtn}></button>
                <div>코멘토 쇼핑</div>
            </StyledTitleBox>
            <StyledBar />
            <img className="thum" src={product.thumbnail} alt={product.name} />
            <StyledLabel>
                <h3>{product.name}</h3>
                <div>{product.price.toLocaleString('ko-KR')}원</div>
            </StyledLabel>
            <StyledBar />
            <StyledToggle>
                <button
                    className={clicked ? 'clicked' : null}
                    onClick={_onClcickLabelBtn}
                >
                    상품 설명
                </button>
                <button
                    className={clicked ? null : 'clicked'}
                    onClick={_onClcickLabelBtn}
                >
                    상품 후기
                </button>
            </StyledToggle>

            <StyledBar />
            {clicked ? (
                <StyldMainImage src={product.mainImage} />
            ) : (
                mockReviews.map((r) => (
                    <Review
                        key={r.id}
                        username={r.username}
                        score={r.score}
                        createDate={r.createdDate}
                        profileImage={r.profileImage}
                        reviewText={r.reviewText}
                    />
                ))
            )}
        </StyledDetail>
    );
};

export default ProductDetail;

const StyldMainImage = styled.img`
    width: 342px;
    object-fit: contain;
    margin: 25px 24px;
`;

const StyledToggle = styled.div`
    display: flex;
    flex-direction: row;
    width: ${styleSet.width}px;
    height: 48px;
    button {
        all: unset;
        width: ${styleSet.width / 2}px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            background-color: #eeeeee;
        }
    } //
    .clicked {
        background-color: #eeeeee;
    }
`;

const StyledLabel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 103px;
    width: ${styleSet.width}px;
    padding: 24px;
    h3 {
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 26px;
        /* identical to box height, or 130% */

        letter-spacing: -0.01em;
    }
    div {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        /* identical to box height, or 131% */
        color: rgba(0, 0, 0, 0.86);
        letter-spacing: -0.01em;
    }
`;

const StyledDetail = styled.div`
    width: ${styleSet.width};
    display: flex;
    flex-direction: column;
    align-items: center;
    .thum {
        width: 390px;
        height: 420px;
        object-fit: cover;
    }
`;
const StyledTitleBox = styled.div`
    width: ${styleSet.width}px;
    display: flex;
    justify-content: center;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    /* identical to box height */
    height: 60px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
    .backBtn {
        width: 10px;
        height: 10px;
        position: relative;
        right: 130px;
        /* Basic / Black */
        border-top: 2px solid #000000;
        border-left: 2px solid #000000;
        transform: rotate(-45deg);
    }
    button {
        all: unset;
    }
`;

const StyledBar = styled.div`
    width: ${styleSet.width}px;
    height: 1px;

    /* Gray_05 */

    background: #eeeeee;
`;
