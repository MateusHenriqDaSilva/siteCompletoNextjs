import React, {useState} from 'react'
import Footer from'../../components/Footer'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Siderbar'
import HeroSectionBlog from '../../components/HeroSectionBlog'
import Services from'../../components/Services'
import Admin from '../../components/Admin'
import {usuarios} from '../../components/Admin/Data'

const AdminIndex = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Admin />
        </>
    )
}

export default AdminIndex
