import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Siderbar'
// import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import {conteudoInicial} from '../components/InfoSection/Data'
import Footer from'../components/Footer'
// import Carossel from'../components/CarroselSecao'
import Carossel from'../components/CarroselSecao'
import Celular from'../components/CelularSessao'
import Depoimento from'../components/DepoimentoSessao'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            {/* <HeroSection /> */}
            {
                conteudoInicial.map((elemento) => {
                    return (<InfoSection {...elemento}/>)
                })
            }
            <Carossel />
            <Celular />
            <Depoimento />
            <Footer />
        </>
    )
}

export default Home