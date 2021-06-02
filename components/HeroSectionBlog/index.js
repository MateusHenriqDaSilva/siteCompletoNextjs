import React from 'react'
import fundo from '../../images/fundao.png'
import {
    HeroContainer,
    HeroBg,
    Imagem,
    HeroContent,
    HeroH1,
} from './HeroElements'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <Imagem src={fundo} />
            </HeroBg>
            <HeroContent>
                <HeroH1>Postagens e Tutoriais</HeroH1>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

