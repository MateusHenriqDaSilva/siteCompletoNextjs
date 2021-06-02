import React from 'react'
import {
    ConteudoContainer,
    ConteudoWrapper,
    ConteudoText,
    ConteudoTitulo,
    Img,
    PulaLinha
} from './ConteudoElements' 
const conteudo = ({id, titulo, texto, imagem, referencesId}) => {
    return (
        <>
            <ConteudoContainer id={id}>
                <ConteudoWrapper refereId={referencesId}>
                    <ConteudoTitulo>
                        {titulo}
                    </ConteudoTitulo>
                    <ConteudoText>
                        {texto}
                    </ConteudoText>
                    <Img src={imagem} />
                </ConteudoWrapper>
            </ConteudoContainer>
        </>
    )
}

export default conteudo;
