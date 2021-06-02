import { useRouter } from 'next/router'
import Posts  from '../../../components/Blog/postagens'
import {postagens}  from '../../../components/Blog/Data'
import Footer from'../../../components/Footer'
import Navbar from '../../../components/Navbar'
import React, {useState} from 'react'
import Sidebar from '../../../components/Siderbar'
import ConteudoPostagem from './../../../components/Blog/ConteudoPostagem/index'
import {tela} from './../../../components/Blog/ConteudoPostagem/Data'

const postagem = () => {
    const router = useRouter();
    const id = router.query.id
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            {postagens.map((elemento) => {
                if (elemento.id == id){
                    return (<Posts {...elemento}/>)
                }
            })}
            {tela.map((elemento) => {
                if(elemento.referencesId == id) {
                    return(<ConteudoPostagem {...elemento}/>)
                }
            })}
            <Footer />
        </>
    )
}

export default postagem 