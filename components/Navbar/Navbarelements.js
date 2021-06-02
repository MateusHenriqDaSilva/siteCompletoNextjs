import styled from 'styled-components'

export const Nav = styled.nav`
    margin: 0px;
    padding: 0px;
    list-style: none;
    overflow: hidden;
    background-color: #fff;
    align-items: center;
    font-size: 1rem;
    font-family: 'Assistant', sans-serif;

    position: sticky;

    z-index: 999;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 999;
    height: 70px;
    width: 100%;
    padding: 0 24px;
    margin: 0px 
    max-width: 1100px;
    z-index: 999;
`
export const NavLogo = styled.a`
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.7rem;
    display: flex;
    align-items: center;
    margin-left: 80px;
    text-decoration: none;
    z-index: 999;
`
export const NavLogoImg = styled.img`
    margin-left: -50px;
    height: 280px;
    width: 260px;
    z-index: 999;
    @media screen and (max-width: 960px) {
        height: 300px;
        width: 260px;
    }
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
    list-style: none;
    text-align: center;
    z-index: 999;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
    font-weight: bold;
    z-index: 999;
`

export const NavLinks = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    color: black;
    z-index: 999;

    &.active {
        border-bottom: 6px solid #66d3fa;
    }
    &:hover {
        background-color: #66d3fa;
    }
`

export const NavLinksRouter = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    z-index: 999;
    cursor: pointer;

    &.active {
        border-bottom: 6px solid #66d3fa;
    }
    &:hover {
        background-color: #66d3fa;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 60px;
    z-index: 999;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled.a`
    display: inline-block;
    background: transparent;
    font-weight: bold;
    vertical-align: middle;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    padding: 21px 15px;
    color: black;
    cursor: pointer;
    text-decoration: none;  
    z-index: 999;
    margin: 0px 20px;
    font-family: 'Assistant', sans-serif;

    &:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #006ff5;
        -webkit-transform: scaleY(0);
        transform: scaleY(0);
        -webkit-transform-origin: 50% 0%;
        transform-origin: 50% 0%;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transition-duration: 0.4s;
        font-family: 'Assistant', sans-serif;

        transition-duration: 0.4s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }

    &:hover, &:focus, &:active{
        color: #fff;
    }

    &:hover:before, &:focus:before, &:active:before {
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
    }
`

// background: transparent;
// white-space: nowrap;
// padding: 10px 22px;
// color: #fff;
// font-size: 16px;
// outline: none;
// cursor: pointer;
// transition: all 0.5s ease-out;
// backgroud
// background: linear-gradient(to top, white 50%, #e84118 50%);
// background-size: 100% 200%;
// background-position: bottom;
// text-decoration: none;
// display: block;
// padding: 1rem;

// &:hover {
//     background: #3dbaf0;
//     color: #010606;
//     background-position: top;
//     font-weight: bold;
// }

export const NavBtnLinkEntrar = styled.a`
white-space: nowrap;
padding: 5px 18px;
color: black;
border: 0.1rem solid #f0eff1;
font-size: 16px;
outline: none;
border-radius: 30px;
cursor: pointer;
transition: all 0.2 ease-in-out;
text-decoration: none;
z-index: 999;
font-family: 'Assistant', sans-serif;
font-weight: bold;
background: #006ff5;
color: #fff;

&:hover {
    transition: all 0.2s ease-in-out;
    border: 0.1rem solid #006ff5;
    font-weight: bold;
    color: black;
    color: #fff;
}
`
// background: #2ac1ff;
// white-space: nowrap;
// padding: 10px 32px;
// color: #fff;
// font-size: 16px;
// outline: none;
// cursor: pointer;
// transition: all 0.2 ease-in-out;
// text-decoration: none;

// &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #2ac1ff;
//     font-weight: bold;
//     color: #fff;
// }


// botao estilo link
// display: inline-block;
// background: transparent;
// vertical-align: middle;
// background-color: #0050db;
// -webkit-transform: translateZ(0);
// transform: translateZ(0);
// box-shadow: 0 0 1px rgba(0, 0, 0, 0);
// -webkit-backface-visibility: hidden;
// z-index: 999;
// backface-visibility: hidden;
// -moz-osx-font-smoothing: grayscale;
// position: relative;
// -webkit-transition-property: color;
// transition-property: color;
// -webkit-transition-duration: 0.3s;
// transition-duration: 0.3s;
// padding: 21px 15px;
// color: black;
// font-weight: bold;
// border-radius: 40px;
// text-decoration: none;  

// &:before {
//     content: "";
//     position: absolute;
//     z-index: -1;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: #2ac1ff;
//     -webkit-transform: scaleY(0);
//     transform: scaleY(0);
//     -webkit-transform-origin: 50% 0%;
//     transform-origin: 50% 0%;
//     -webkit-transition-property: transform;
//     transition-property: transform;
//     -webkit-transition-duration: 0.3s;
//     transition-duration: 0.3s;
//     -webkit-transition-timing-function: ease-out;
//     transition-timing-function: ease-out;
// }
// &:hover, &:focus, &:active{
//     color: black;
// }

// &:hover:before, &:focus:before, &:active:before {
//     -webkit-transform: scaleY(1);
//     transform: scaleY(1);
// }