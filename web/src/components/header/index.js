import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'

import logo from '../../used/logo.png'

function Header(){
    return(
        <S.Container>
            <img src={logo} alt="Logo"/>
            <S.Nav>
                <Link to="/">Home</Link>
                <small className="divider"/>
                <a href="/sell">Vender veículos</a>
                <small className="divider"/>
                <Link to="/qrcode">QRCode</Link>
            </S.Nav>
        </S.Container>
    )
}

export default Header