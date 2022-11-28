import React, { useState } from 'react';
import styled from 'styled-components';
import ThemeButton from '../components/ThemeButton';
import styleSet from '../style/styleSet';
import ProductCard from '../components/ProductCard';
import {
    mockTheme1Produdcts as products1,
    mockTheme2Produdcts as products2,
} from '../data/mockData';

const Home = () => {
    const [products, setProducts] = useState('product1'); //string
    const _themeButtonClickListener = (e) => {
        setProducts(e.target.id);
    };
    return (
        <StyledHome>
            <StyledTitleBox>코멘토 쇼핑</StyledTitleBox>
            <StyledBar />
            <ButtonBox>
                <ThemeButton
                    id={0}
                    title="# 겨울 방한템"
                    onClick={_themeButtonClickListener}
                />
                <ThemeButton
                    id={1}
                    title="# 따순머그컵"
                    onClick={_themeButtonClickListener}
                />
            </ButtonBox>
            <StyledBar2 />
            {products == 1
                ? products1.map((product) => (
                      <ProductCard
                          key={product.id}
                          title={product.name}
                          imgSrc={product.thumbnail}
                          summary={product.description}
                      />
                  ))
                : products2.map((product) => (
                      <ProductCard
                          key={product.id}
                          title={product.name}
                          imgSrc={product.thumbnail}
                          summary={product.description}
                      />
                  ))}

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
    width: ${styleSet.width}px;
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
