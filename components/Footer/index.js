import React from 'react';
import {FaFacebook, FaInstagram, FaYoutube, FaLinkedin} from 'react-icons/fa'
import {FooterContainer, 
    FooterWrap, 
    SocialMedia, 
    SocialMediaWrap,
    WebsiteRights, 
    SocialIcons, 
    SocialIconLink } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <WebsiteRights>2019-2021 © Todos direitos 
reservados a Essencial Soft {new Date().getFullYear()}</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/essencialsoftware/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/essencialsoft/?hl=pt" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.youtube.com/channel/UCxeYv2JQz49CUro4EHTfloA" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/company/essencialsoftware" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer >
    )
}

export default Footer
