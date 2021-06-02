import styled from 'styled-components'

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0eff1;
    :before {
        content: '',
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f0eff1;
    }
`

export const Card = styled.div`
    display: column;
    background-color: #fff;
    margin: 100px 0px 100px 0px;
    width: 400px;
    height: 400px;
    box-shadow: 0px 5px 20px black;
    align-items: center;
    text-align: center;
`

export const Form = styled.div`
    display: column;
    background-color: #fff;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin: 20px 20px 20px 20px;
    border: none;
`

export const Label = styled.h1`
    font-size: 34px;
    margin-right: 20px;
    margin-bottom: 50px;
`

export const Input = styled.input`
    height: 30px;
    width: 320px;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px 20px 30px 0px;
    font-size: 12px;

    &:focus {
        outline: none;
        border-left: 6px solid #006ff5;
    }
`

export const ButtonLogin = styled.a`
    font-size: 38px;
    padding: 20px;
    border: none;
    text-decoration: none;
    background-color: #006ff5;
    border-radius: 5px;
    font-size: 24px;
    color: white;

    &:hover {
        box-shadow: 0px 0px 10px #006ff5;
        border-radius: 5px;
    }
`
