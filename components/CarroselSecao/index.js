import React, { useState, useEffect, Component } from 'react'
import item1 from './../../images/tela1.png'
import Slider from './slider'

const data = [
    {
        img: item1,
        sessao: 'Faturamento'
    },
    {
        img: item1,
        sessao: 'Controle de Estoque'
    },
    {
        img: item1,
        sessao: 'Gestão Financeira'
    },
    {
        img: item1,
        sessao: 'Vendas'
    },
    {
        img: item1,
        sessao: 'Etiquetas Personalizadas'
    }
]

export default class Carossel extends Component {
    render() {
        return (
            <Slider list={data} />
        )
    }
}