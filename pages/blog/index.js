import React, {useState} from 'react'
import Footer from'../../components/Footer'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Siderbar'
import HeroSectionBlog from '../../components/HeroSectionBlog'
import Services from'../../components/Services'

const BlogIndex = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSectionBlog/>
            <Services />
            <Footer />
        </>
    )
}

export default BlogIndex
