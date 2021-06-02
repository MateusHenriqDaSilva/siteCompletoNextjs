
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import Headroom from "react-headroom";
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavBtn,
    NavBtnLink,
    NavBtnLinkEntrar,
    NavLogoImg
} from './Navbarelements';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../images/marca.png'
import logo2 from '../../images/logoMarcaBranca.png'

const Navbar = ({ toggle }) => {
    // const [scrollNav, setScrollNav] = useState(false)

    // const changeNav = () => {
    //     if (window.scrollY >= 80) {
    //         setScrollNav(true)
    //     } else {
    //         setScrollNav(false)
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', changeNav)
    // }, [])

    const toggleHome = ({href, name}) => {
        scroll.scrollToTop()
    }
    return (
        <>
            <Headroom>
                <IconContext.Provider value={{ color: 'black' }}>
                    <Nav >
                        <NavbarContainer>
                            <NavLogo href='/' onClick={toggleHome}><NavLogoImg src={logo}></NavLogoImg></NavLogo>
                            <MobileIcon onClick={toggle}>
                                <FaBars style={{ color: '#fff' }} />
                            </MobileIcon>
                            {/* <NavMenu>
                                <NavItem>
                                    <NavLinks href='/'
                                    smooth={true} 
                                    duration={500} 
                                    spy={true}
                                    exact='true' 
                                    offset={-80}>Início</NavLinks>
                                </NavItem>
                                <NavItem>
                                        <NavLinksRouter href='/blog'>Blog</NavLinksRouter>
                                </NavItem>
                            </NavMenu> */}
                            <NavBtn>
                                <NavBtnLink href='/' >Inicio</NavBtnLink>
                                <Link href={'/blog'} passRef>
                                    <NavBtnLink>Blog</NavBtnLink>
                                </Link>
                                <NavBtnLink href="https://get.teamviewer.com/6yy2vrx">Suporte</NavBtnLink>
                            </NavBtn>
                            <NavBtn>
                                <NavBtnLinkEntrar href="https://testeonline.adiantibuilder.com.br/12contato/e_soft/" target="_blank">Entrar</NavBtnLinkEntrar>
                            </NavBtn>
                        </NavbarContainer>
                    </Nav>
                </IconContext.Provider>
            </Headroom>
        </>
    )
}

export default Navbar