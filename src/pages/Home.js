import React from 'react';
import styled from 'styled-components';
import ThemeButton from '../components/ThemeButton';
import styleSet from '../style/styleSet';
import ProductCard from '../components/ProductCard';
import card1 from '../imgs/card1.png';
import card2 from '../imgs/card2.png';
import card3 from '../imgs/card3.png';

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
            <ProductCard
                imgSrc={card1}
                title="비숑 블랙 머그잔"
                summary="쌀쌀한 날씨에 따뜻한 우유, 커피 한잔하기 좋은 
블랙 & 화이트 비숑 머그잔입니다."
            />
            <ProductCard
                imgSrc={card2}
                title="가열 보온 티코스터 온열 원터치 컵 받침대"
                summary="언제나 따뜻하게 최대 12시간 동안 
최대 60도의 온도로 따듯한 차를 즐길 수 있습니다."
            />
            <ProductCard
                imgSrc={card3}
                title="벨루즈까사 솜사탕 파스텔 머그 4종 세트"
                summary="솜사탕처럼 부드러운 쉐입에 스트라이프 조각이 
더해져 심플하면서도 세련된 파스텔 컬러의 머그"
            />

            {/* 객체로 내용을 래핑해 Props로 보내고 싶었으나 시간문제로 못함 */}
        </StyledHome>
    );
};

export default Home;

const StyledHome = styled.div`
    width: ${styleSet.width};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ButtonBox = styled.div`
    display: flex;
    width: ${styleSet.width}px;
    height: 150px;

    gap: 13px;
    align-items: center;
    padding-left: 24px;
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
`;

const StyledBar = styled.div`
    width: ${styleSet.width};
    height: 1px;

    /* Gray_05 */

    background: #eeeeee;
`;
const StyledBar2 = styled.div`
    width: ${styleSet.width}px;
    height: 8px;

    /* Gray_05 */

    background: #eeeeee;
`;
