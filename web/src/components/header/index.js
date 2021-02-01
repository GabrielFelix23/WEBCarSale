import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import {IoMdExit} from 'react-icons/io'

import * as S from './styles'

import logo from '../../used/logo.png'
import isConnected from '../../util/get_macaddress'

function Header(){
    const [redirect, setRedirect] = useState(false)
    const [actived, setActived] = useState(isConnected ? 'home' : 'qrcode')

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
                <Link to="/" onClick={() => setActived('home')} className={actived == 'home' ? 'linkActived' : 'linkInative'}>Home</Link>
                <small className="divider"/>

                <Link to="/sell" onClick={() => setActived('sell')} className={actived == 'sell' ? 'linkActived' : 'linkInative'}>Vender veículos</Link>
                <small className="divider"/>

                {isConnected ? 
                    <button type="button" onClick={Exit}>
                        <IoMdExit/>
                    </button>
                    :
                    <Link to="/qrcode" onClick={() => setActived('qrcode')} className={actived == 'qrcode' ? 'linkActived' : 'linkInative'}>Vincular com Celular</Link>
                }
            </S.Nav>
        </S.Container>
    )
}

export default Header