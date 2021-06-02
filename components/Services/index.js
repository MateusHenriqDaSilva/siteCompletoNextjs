import React from 'react'
import Card from'../Blog'
import {postagens} from '../Blog/Data'



import {
    ServicesContainer,
    ServicesWrapper,
} from './ServicesElements'

const Services = () => {
    return (
        <>
            <ServicesContainer>
                <ServicesWrapper>
                    {
                        postagens.map((elemento) => {
                            return (<Card {...elemento} />)
                        }) 
                    }
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
