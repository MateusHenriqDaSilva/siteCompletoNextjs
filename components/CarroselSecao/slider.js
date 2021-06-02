import React, { Component } from 'react'
import styled from 'styled-components'

export const CaroselContainer = styled.div`
    color: black;
    margin: 100px 60px 0px 100px;
    background: white;
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const Cabecalho = styled.div`
    display: flex;
    height: 60px;
    padding: 10px;
    width: 100%;
    align-items:center;
`

export const TituloDoCabecalho = styled.h1`
    align-items:center;
    font-size: 1.2rem;
    margin-left: 40px;
`

export const ConteinerConteudo = styled.div`
    display:flex;
    height: 410px;
    margin: 20px;
    width: 100%;
`
export const ConteinerTexto = styled.div`
    height: 510px;
    width: 35%;
`
export const ConteinerAtivo = styled.div`
    display:flex;
    height: 380px;
    width: 65%;
    margin-left: 20px;
`
// color:#006ff5;
export const Texto = styled.div`
    align-items:center;
    font-size: 1rem;
    font-weight: bold;
    text-align:center;
    margin: 20px 80px;
    justify-content: center;
    font-family: 'Assistant', sans-serif;
`
export const LinkContainer = styled.div`
    align-items:center;
    font-weight: bold;
    text-align:center;
    align-items: center;
    
    justify-content: center;
    font-family: 'Assistant', sans-serif;
`
export const TodasAsFuncionalidadesDetalhes = styled.a`
    font-size: 1.1rem;
    color: #006ff5;
`

export const ListaDeTelas = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 100px;
    font-size: 1rem;
    color: black;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const ElementoLista = styled.button`
    color: black;
    font-family: 'Assistant', sans-serif;
    font-size: 0.9rem;
    outline: none;

    font-weight: bold;
    cursor: pointer;
    background-position: bottom;
    text-decoration: none;
    display: block;
    padding:5px;

    outline: none;
    cursor: pointer;
    border: 0;
    padding: 0;
    display: inline-block;

    margin: 0 0px 0px 17px;
    transition: all 0.2s;
    background: #fff;
    border-bottom: 4px solid ${props => props.active ? '#3dbaf0' : '#fff'};;

    &:hover {
        border-bottom: 4px solid #3dbaf0;
    }
`
export const Item = styled.img`
    height: 400px;  
    width: 85%;

`

const SliderContainer = styled.div`
  width: ${props => props.width || '700px'};
  position: relative;
  min-height: ${props => props.height || '200px'};
  margin-bottom: 15px;
  overflow-x: hidden;

  @media (max-width: 576px) {
    width: 100%;
  }
`
const ControlBar = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
`
const range = '13px'
const ControlItem = styled.button`
  outline: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  display: inline-block;
  min-height: ${range};
  max-height: ${range};
  min-width: ${range};
  max-width: ${range};
  margin: 0 8px;
  border-radius: 50%;
  transition: all 0.2s;
  background: ${props => props.active ? '#3dbaf0' : 'lightgray'};
`

const SliderItem = styled.img`
  width: 100%;
  max-height: 100%;
`

const Link = styled.a`
  left:${props => props.left * -100}%;
  width: 100%;
  height: 90%;
  max-height: 90%;
  position: absolute;
  border-radius:20px;
  transition: left .3s;
`
export const BotaoExperimentar = styled.a`
  display: flex;
  justify-content: center;
  font-weight: bold;
  align-items:center;
  height: 40px;
  cursor: pointer;
  margin: 40px;
  background: #006ff5;
  border-radius: 10px;
  color:white;
  text-decoration: none;
  font-size: 0.8rem;

  &:hover {
    transition: all 0.4s ease-in-out;
    background: #2ac1ff;
  }
`

export default class Slider extends Component {
  state = {
    active: 0,
    list: [],
    start: 0,
    end: 0
  }

  componentWillMount = () => {
    this.setState({ list: this.props.list })
  }

  setPosition = (position) => {
    this.setState({ active: position })
  }

  touchStart = (e) => {
    this.setState({ start: e.changedTouches[0].screenX })
  }

  touchEnd = (e) => {
    this.setState({ end: e.changedTouches[0].screenX })
    this.handleGesture()
  }

  handleGesture = () => {
    const { start, end } = this.state
    console.log(start, end)
    if (start > end && start - end > 50) {
      this.next()
    } else if (end > start && end - start > 50) {
      this.prev()
    }
  }

  render() {
    const { list, active } = this.state
    return (
      <CaroselContainer>
        <Cabecalho>
          <TituloDoCabecalho>Tudo que voce precisa no E-Gerencial</TituloDoCabecalho>
          <ListaDeTelas>
            {
              list.map((elemento, key) => (
                <ElementoLista
                  key={key}
                  active={active === key}
                  onClick={() => this.setPosition(key)}
                >{elemento.sessao}</ElementoLista>
              ))
            }
          </ListaDeTelas>
        </Cabecalho>
        <ConteinerConteudo>
          <ConteinerTexto>
            <Texto>
              Descomplique as rotinas administrativas da sua
              loja, controle o estoque e realize vendas com o
              E-Gerencial. Tudo o que o seu negócio precisa para
              continuar crescendo.
            </Texto>
            <LinkContainer>
              <TodasAsFuncionalidadesDetalhes href="/blog/postagem/1">
                Todas as Funcionalidades em <br />Detalhes
            </TodasAsFuncionalidadesDetalhes>
            </LinkContainer>
                <BotaoExperimentar href="">Experimentar Agora</BotaoExperimentar>
          </ConteinerTexto>
          <ConteinerAtivo>
            <SliderContainer
              onTouchStart={this.touchStart}
              onTouchEnd={this.touchEnd}
              height={this.props.height}
              width={this.props.width}
            >
              {
                list.map((data, key) => (
                  <Link
                    key={key}
                    target={this.props.target}
                    title={this.props.title}
                    left={active - key}
                    active={active === key}
                  >
                    <SliderItem src={data.img} alt={data.alt} />
                  </Link>
                ))
              }
              <ControlBar>
                {
                  list.map((_, key) => (
                    <ControlItem
                      key={key}
                      active={active === key}
                      onClick={() => this.setPosition(key)}
                    />
                  ))
                }
              </ControlBar>
            </SliderContainer>
          </ConteinerAtivo>
        </ConteinerConteudo>
      </CaroselContainer>
    )
  }
}