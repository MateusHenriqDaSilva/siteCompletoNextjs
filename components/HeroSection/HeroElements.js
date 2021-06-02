import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;

    :before {
        content: '',
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%),rgba(0,0,0,0.6) 100%),
        linear-gradient(100deg, rgba(0,0,0,0.2) 0%, transparent 100%);

    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
` 
export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ?  `'col2 col1'` : `'col1 col2'`)};
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
    margin-bottom: 100px;
`
export const Column1 = styled.div`
    padding: 0 15px;
    grid-area: col1;
    justify-content: center;
    align-items: center;
`

export const Column2 = styled.div`
    padding: 0 15px;
    grid-area: col2;
`


export const Imagem = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);

`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
` 

export const HeroH1 = styled.h1`
    color: #000;
    font-size: 40px;
    text-align: center;

    @media screen and (max-width: 760px) {
        font-size: 40px;
    }

    @media screen and (max-width: 400px) {
        font-size:32px;
    }
`

export const HeroP = styled.p`
    margin-top: -24px;
    color: #000;
    font-size: 1.2em;
    max-width: 450px;
    font-weight: 500;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 400px) {
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    margin-right: 250px;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 0px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 0px;
    font-size: 20px;
`