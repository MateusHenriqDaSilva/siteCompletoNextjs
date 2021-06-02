import React, { useState } from 'react'
import {
    HeroContainer,
    Card,
    Form, 
    Input,
    Label,
    ButtonLogin
} from './AdminElements.js'

const Admin = ({user,password}) => {
    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")

    return (
        <>
            <HeroContainer>
                <Card>
                    <Form>
                        <Label>
                            Login
                        </Label>
                        <Input
                            placeholder="Digite o Usuario"
                            autoFocus
                            type="usuario"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            type="text"
                        />
                        {console.log(user)}
                        <Input
                            placeholder="Digite a Senha"
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            type="text"
                        />
                    </Form>
                    <ButtonLogin href={`/admin/dashboard/`}>Entrar</ButtonLogin>
                </Card>
            </HeroContainer>
        </>
    )
}

export default Admin
