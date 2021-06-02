
import React from 'react'
import { Button } from '../ButtonElements'
import {animateScroll as scroll} from 'react-scroll';

import {InfoContainer, 
        InfoWrapper, 
        InfoRow, 
        Column1, 
        Column2, 
        TextWrapper, 
        TopLine,
        Heading,
        Subtitle,
        BtnWrap,
        ImgWrap,
        Img
    } from './infoElements'

const InfoSection = ({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText,
    topText,
    headline, 
    darkText, 
    description, 
    buttonLabel, 
    img, 
    alt, primary, dark, dark2}) => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            {/* <div style={{margin: '0px 0px 40px 0px'}}id={id}></div> */}
                            <TextWrapper>
                                <TopLine id={id} topText={topText}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap >
                                    <Button to="/" onClick={toggleHome}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}>
                                            {buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>  
        </>
    )
}

export default InfoSection
