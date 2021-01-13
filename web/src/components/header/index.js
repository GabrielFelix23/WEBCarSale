import React from 'react'
import * as S from './styles'

import logo from '../../used/logo.png'

function Header(){
    return(
        <S.Container>
            <img src={logo} alt="Logo"/>
            <S.Nav>
                <a href="#">Home</a>
                <small className="divider"/>
                <a href="#">Carros</a>
                <small className="divider"/>
                <a href="#">Vender veículos</a>
            </S.Nav>
        </S.Container>
    )
}

export default Header