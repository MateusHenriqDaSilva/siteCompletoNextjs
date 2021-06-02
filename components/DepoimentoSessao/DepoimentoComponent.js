import React, { Component } from 'react'
import styled from 'styled-components'
import pessoa1 from './../../images/pessoa1.jpg'
import pessoa2 from './../../images/pessoa2.jpg'
import pessoa3 from './../../images/pessoa3.jpg'

export const DepoimentoContainer = styled.div`
  color: #fff;
  background: #f0eff1;
  margin: 0px 60px;
  @media screen and (max-width: 768px) {
      padding: 100px 0;
  }
`
export const DepoimentoTextura = styled.div`
  color: black;
  height: 510px;
  width: 100%;
  align-items:center;
  justify-content: center;
  display:flex;
`
export const Card = styled.div`
  height: 370px;
  border-radius: 15px;
  box-shadow: 0px 0px 5px black;
  width:20%;
  justify-content: center;
  background: #fff;
  align-items:center;
  text-align:center;
  margin:30px 0px 0px 20px;
`

export const Texto = styled.h1`
  align-items:center;
  font-size: 1.3rem;
  justify-content: center;
  color:#fff;
  padding:5px;
  align-items:center;
`

export const Cabecalho = styled.div`
  background: #006ff5;
  border-radius: 15px 15px 0px 0px;
  height: 100px;
`

export const ImagemIcon = styled.img`
  height: 100px;
  width: 100px;
  box-shadow: 0px 0px 10px black;
  border-radius: 50%;
  align-items:center;
  margin:8px 0px 0px 0px;
`

export const Descricao = styled.p`
  align-items:center;
  font-size: 1rem;
  margin: 0px 0px 0px 10px;
  justify-content: center;
  color:black;
  padding:5px;
  color: #666666;
  text-align:left;
`

export default class DepoimentoSessao extends Component {
  render() {
    return (
      <DepoimentoContainer>
        <DepoimentoTextura>
          <Card>
            <Cabecalho>
              <Texto>Taberna</Texto>
              <ImagemIcon src={pessoa1} />
              <Descricao>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só.
            </Descricao>
            </Cabecalho>
          </Card>
          <Card>
            <Cabecalho>
              <Texto>La Femme</Texto>
              <ImagemIcon src={pessoa2} />
              <Descricao>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só.
              </Descricao>
            </Cabecalho>
          </Card>
          <Card>
            <Cabecalho>
              <Texto>Mari Firmino</Texto>
              <ImagemIcon src={pessoa3} />
              <Descricao>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só.
              </Descricao>
            </Cabecalho>
          </Card>
          <Card>
            <Cabecalho>
              <Texto>Mari Firmino</Texto>
              <ImagemIcon src={pessoa3} />
              <Descricao>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só.
              </Descricao>
            </Cabecalho>
          </Card>
        </DepoimentoTextura>
      </DepoimentoContainer>
    )
  }
}