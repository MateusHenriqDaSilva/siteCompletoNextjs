import styled from 'styled-components'
import Link from 'next/link'
//estilizando elementos
export const Cards = styled.div`
    padding: 4rem;
    max-width: 100%;
    background-color: #f0f0f2;
`

export const Cards__container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 100%;
  width: 90%;
`
export const Cards__wrapper = styled.div`
    position: relative;
`

export const Cards__items = styled.ul`
    margin-bottom: 24px;
`
export const Cards__item = styled.li`
    display: flex;
    flex: 1;
    border-radius: 10px;
    background: #fff;
    
    @media screen and (min-width: 1024px) {
        display: flex;
    }

    @media screen and (max-width: 1024px) {
        margin-bottom: 2rem;
    }
`

export const Cards__item__link = styled.a`
    display: flex;
    flex-flow: column;
    cursor: pointer;
    width: 100%;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;
`

export const Cards__item__pic_wrap = styled.figure`
    position: relative;
    width: 100%;
    padding-top: 67%;
    overflow: hidden;

    &::after{
        content: attr(data-category);
        position: absolute;
        bottom: 0;
        margin-left: 10px;
        padding: 6px 8px;
        max-width: calc((100%) - 60px);
        max-width: 100%;
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        background-color: #245eff;
        box-sizing: border-box;
    }
`

export const Cards__item__img = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    transition: all 0.2s linear;

    &:hover{
        transform: scale(1.1);
    }
`
export const Cards__item__info = styled.div`
    padding: 20px 30px 30px;
`

export const Cards__item__text = styled.h5`
    color: #000000;
    font-size: 18px;
`
