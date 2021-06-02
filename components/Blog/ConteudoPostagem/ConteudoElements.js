import styled from 'styled-components'

//estilizando elementos
export const ConteudoContainer =styled.div`
    background-color: #dddddd;
`
export const ConteudoWrapper = styled.div`
    display: column;
    height: 100%;
    padding: 20px 0px 20px 0px;
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    background-color: #fff;
    z-index: 99;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`
export const ConteudoTitulo = styled.h5`
    font-size: 40px;
    font-weight: bold;
    color:black;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 26px;
    }
`
export const PulaLinha = styled.br`
    align-items:center;
    font-size: 1.3rem;
`
export const ConteudoText = styled.h5`
    font-size: 20px;
    font-weight: bold;
    color:black;
    margin-top: 20px;
    justify-content: center;
    text-align: center;
    margin-bottom: 20px;
`

export const Img = styled.img`
    width: 100%;
    padding-right: 0;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 30px
`