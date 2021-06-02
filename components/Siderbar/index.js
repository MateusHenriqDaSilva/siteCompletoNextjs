import React from 'react'
import { SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SideBtnWrap,
    SidebarRoute,
    SidebarLinkRouter
} from './SideBarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
                    <SidebarContainer isOpen={isOpen} onClick={toggle}>
                        <Icon onClick={toggle}>
                            <CloseIcon />
                        </Icon>
                        <SidebarWrapper>
                            <SidebarMenu>
                                <SidebarLinkRouter href="/">Inicio</SidebarLinkRouter>
                                <SidebarLinkRouter href="/blog">Blog</SidebarLinkRouter>
                            </SidebarMenu>
                                <SideBtnWrap>
                                    <SidebarRoute>Entrar</SidebarRoute>
                                </SideBtnWrap>
                        </SidebarWrapper>
                    </SidebarContainer>
    )
}

export default Sidebar