import React from 'react'
import styled from 'styled-components'
import {PostagemContainer,PostagemWrap,ContainerImage,Imagem,PostagemText} from './PostElements'

const Posts = ({id,imgIcone,label,cabecalho,url}) => {
    return (
        <>
            <PostagemContainer >
                    <ContainerImage>
                        <Imagem src={imgIcone} />
                    </ContainerImage>
                    <PostagemText >{cabecalho}</PostagemText>
                    <PostagemWrap></PostagemWrap>
            </PostagemContainer>
        </>
    )
}

export default Posts