import React, { Component } from 'react'
import styled from 'styled-components'
import Celular from './../../images/fundoCelularSessao.png'

export const CelularContainer = styled.div`
  color: #fff;
  margin: 70px 60px;
  @media screen and (max-width: 768px) {
      padding: 100px 0;
  }
`

export const CelularTextura = styled.div`
  color: black;
  display:flex;
  height: 510px;
  width: 100%;
`
export const Coluna1 = styled.div`
  height: 510px;
  width: 50%;
`

export const Coluna2 = styled.div`
  height: 510px;
  width: 50%;
`

export const ContainerDoTitulo = styled.div`
  display: flex;
  padding: 20px;
  margin: 90px 0px 0px 30px;
  justify-content: left;
  align-items:left;
`

export const Titulo = styled.h1`
  align-items:center;
  font-size: 1.2rem;
  margin-right: 100px;
`

export const ContainerDoTexto = styled.div`
  display: flex;
  padding:20px;
  margin: 30px 160px 0px 0px;
  justify-content: center;
  align-items:center;
`

export const Texto = styled.p`
  align-items:center;
  font-size: 1rem;
  margin-right: 40px;
  padding:20px;
  text-align:left;
`

export const CelularImagem = styled.img`
  height: 400px;
  margin: 0px 0px 0px 180px;
`

export default class CelularSessao extends Component {
  render() {
    return (
      <CelularContainer>
        <CelularTextura>
          <Coluna1>
            <CelularImagem src={Celular}></CelularImagem>
          </Coluna1>
          <Coluna2>
          <ContainerDoTitulo>
              <Titulo>Acesso Facil de qualquer lugar</Titulo>
            </ContainerDoTitulo>
            <ContainerDoTexto>
              <Texto>Com o E-Gerencial, você gerencia a sua loja de forma simples
                e eficiente. Cadastre seus produtos e clientes, crie orçamentos
                e realize vendas de forma ágil e personalizada. Com o aplicativo
                para força de vendas, você emite pedidos de onde estiver direto no seu celular.
              </Texto>
            </ContainerDoTexto>
          </Coluna2>
        </CelularTextura>
      </CelularContainer>
    )
  }
}