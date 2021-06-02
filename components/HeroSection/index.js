import React, { useState } from 'react'
import ponte from './../../images/fundo.png'
import fundo from './../../images/image.svg'
import { Button } from '../ButtonElements'
import {
    HeroContainer,
    HeroBg,
    Imagem,
    HeroContent,
    HeroP,
    HeroBtnWrapper,
    ArrowForward, ArrowRight,InfoRow,Column1
} from './HeroElements'

const HeroSection = () => {
    const [ hover, setHover ] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                {/* <Imagem src={ponte} /> */}
            </HeroBg>
            <HeroContent>
            <InfoRow>
                    <Column1>
                        <HeroP>
                        Nós acreditamos no seu sonho e estamos aqui para ajudar a realizá-lo.
                        Conheça a ferramenta de gestão e vendas que vai ajudar a promover o desenvolvimento de seus negócios
                        </HeroP>
                            <HeroBtnWrapper>
                                <Button href="https://wa.me/message/Y7XC55BYSK5GD1" onMouseEnter={onHover}
                                    onMouseLeave={onHover} primary='True' dark='False'>
                                    clique para Entrar em Contato {hover ? <ArrowForward /> : <ArrowRight />}
                                </Button>
                            </HeroBtnWrapper>
                        </Column1>
                    <Imagem src={fundo} />
                </InfoRow>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

