import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import * as S from './styles'

import logo from '../../used/logo.png'
import isConnected from '../../util/get_macaddress'

function Header(){
    const [redirect, setRedirect] = useState(false)

    async function Exit() {
        await localStorage.removeItem('@CarSale/macaddress')
        setRedirect(true)
        window.location.reload()
    }

    return(
        <S.Container>
            {redirect && <Redirect to="/qrcode"/>}

            <img src={logo} alt="Logo"/>
            <S.Nav>
                <Link to="/">Home</Link>
                <small className="divider"/>
                <a href="/sell">Vender veículos</a>
                <small className="divider"/>
                {isConnected ? 
                    <button type="button" onClick={Exit}>SAIR</button>
                    :
                    <Link to="/qrcode">QRCode</Link>
                }
            </S.Nav>
        </S.Container>
    )
}

export default Header