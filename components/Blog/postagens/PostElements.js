import styled from 'styled-components'

export const PostagemContainer = styled.div`
    color: #fff;
    display: column;
    height: 400px;
    background-color: #dddddd;
`

export const PostagemWrap = styled.div`
    color: #fff;
    display: column;
    position: absolute;
    background: black;
    height: 400px;
    opacity: 0.4;
    width: 100%;
    margin-top: -400px;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const PostagemText = styled.h5`
    position: absolute;
    z-index: 1;
    margin-top: -250px;
    margin-right: 30%;
    margin-left: 20%;
    left: 230px;
    color: #fff;
    font-size: 38px;
    line-height: 44px;
    
    @media screen and (max-width: 568px) {
        margin: -220px 0px 0px 120px;
        font-size: 36px;
    }
`

export const ContainerImage = styled.div`
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 400px;
    overflow: hidden;
` 

export const Imagem = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`