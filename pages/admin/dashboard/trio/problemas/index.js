import React, { Component } from 'react'
import Menu from './../../../../../components/Dashboard/SidebarSubMenu'
import Problemas from './../../../../../components/ProblemasBug/index'

export default class problemas extends Component {
    render() {
        return(
            <>
                <Menu />
                <Problemas />
            </>
        )
    }
}