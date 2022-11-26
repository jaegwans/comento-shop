import React from 'react';
import styled from 'styled-components';
import ThemeButton from '../components/ThemeButton';
import styleSet from '../style/styleSet';

const Home = () => {
    return (
        <StyledHome>
            <StyledTitleBox>코멘토 쇼핑</StyledTitleBox>
            <StyledBar />
            <ButtonBox>
                <ThemeButton title="# 겨울 방한템" />
                <ThemeButton title="# 따순머그컵" />
            </ButtonBox>
            <StyledBar2 />
        </StyledHome>
    );
};

export default Home;

const StyledHome = styled.div`
    width: ${styleSet.width};
    display: flex;
    flex-direction: column;
`;

const ButtonBox = styled.div`
    display: flex;
    width: ${styleSet.width};
    height: 150px;

    gap: 13px;
    align-items: center;
    padding-left: 24px;
`;

const StyledTitleBox = styled.div`
    width: ${styleSet.width};
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
`;

const StyledBar = styled.div`
    width: ${styleSet.width};
    height: 1px;

    /* Gray_05 */

    background: #eeeeee;
`;
const StyledBar2 = styled.div`
    width: ${styleSet.width};
    height: 8px;

    /* Gray_05 */

    background: #eeeeee;
`;
