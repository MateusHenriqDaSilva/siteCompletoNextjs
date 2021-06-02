import styled from 'styled-components'

export const Button = styled.a`
    border-radius: 10px;
    width: 300px;
    background: ${({ primary }) => (primary ? '#006ff5' : '#006ff5')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#fff' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.4s ease-in-out;
        background: ${({ primary }) => (primary ? '#2ac1ff' : '#2ac1ff')}
    }
`