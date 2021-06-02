import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

export const ProblemaContainer = styled.div`
    color: #fff;
    display:flex;
    justify-content: center;
    align-items:center;
    text-align:center;
    margin: 0px 0px;
    height: 565px;
    width: 100%;
    background: #8E8E8E;
    background: -webkit-linear-gradient(top left, #8E8E8E, #FFFFFF);
    background: -moz-linear-gradient(top left, #8E8E8E, #FFFFFF);
    background: linear-gradient(to bottom right, #8E8E8E, #FFFFFF);

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`
export const ContainerItem = styled.div`
    color: black;
    height: 500px;
    width: 500px;
    display:column;
    justify-content: center;
    align-items:center;
    text-align:center;
`
export const Coluna = styled.div`
    background:#D5F3FE;
    padding: 10px;
    height: 60px;
    display: flex;

    align-items:center;
    text-align:center;
    &:nth-child(even) {
        background: #fff;
    }
    &:hover{
        box-shadow: 0px 0px 20px #D5F3FE;
    }
`
export const ItemsImg = styled.img`
    width: 50px;
    border-radius: 5px;
    margin-left: 100px;
    height: 50px;
`

export const ItemsTexto = styled.a`
    font-size: 1rem;
    cursor: pointer;
    color:black;
    font-weight: bold;
    margin: 0px 0px 0px 20px;
`
export default class CategoriaProblemas extends Component {
    state = {
        listaDecategoria: [],
    }

    // classe de montagem padrao que constroi o componente
    componentWillMount() {
        this.setState({ listaDecategoria: this.props.listaDecategoria })
    }

    render() {
        const { listaDecategoria } = this.state
        return (
            <>
                <ProblemaContainer>
                    <ContainerItem>
                        {/* Estou listando o objeto e retornando ele dentro de colunas */}
                        {
                            listaDecategoria.map((elemento) => {
                                return (
                                    <Coluna>
                                        <ItemsImg src={elemento.img}></ItemsImg>
                                        <Link href={`/admin/dashboard/trio/problemas/${elemento.link}`} passRef>
                                            <ItemsTexto>
                                                {elemento.titulo}
                                            </ItemsTexto>
                                        </Link>
                                    </Coluna>
                                )
                            })
                        }
                    </ContainerItem>
                </ProblemaContainer>
            </>
        )
    }
}