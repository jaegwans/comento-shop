import React from 'react';
import styled from 'styled-components';
import { click } from '@testing-library/user-event/dist/click';

const Review = ({
    key,
    username,
    score,
    createDate,
    profileImage,
    reviewText,
}) => {
    return (
        <StyledReview>
            <div className="profile">
                <img
                    src={profileImage}
                    width="40px"
                    style={{ borderRadius: 10, marginRight: '10px' }}
                />
                <div className="profileDetail">
                    <div>{score}</div>
                    <div>
                        {username} | {createDate}
                    </div>
                </div>
            </div>
            <div className="reviewText">{reviewText}</div>
        </StyledReview>
    );
};

const StyledReview = styled.div`
    width: 334px;
    height: 81px;
    background-color: #eeeeee;
    margin: 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .reviewText {
        margin-left: 5px;
    }
    .profile {
        margin-left: 5px;
        display: flex;
        justify-content: flex-start;
    }
    .profileDetail {
        display: flex;
        flex-direction: column;
        font-size: 13px;
        color: gray;
    }
`;
export default Review;
