import React, { Component } from 'react'
import CategoriaProblemas from './CategoriaProblemas'
import imagem from './../../images/fundao.png'


const data = [
    {
        img: imagem,
        titulo: 'Certificado Digital',
        link: 'certificado-digital'
    },
    {
        img: imagem,
        titulo: 'Nota Fiscal',
        link: 'nota-fiscal'
    }
]

export default class Problemas extends Component {
    render(){
        return(
            <CategoriaProblemas listaDecategoria={data}/>
        )
    }
}