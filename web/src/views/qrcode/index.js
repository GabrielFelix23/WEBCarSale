import React, {useState} from 'react'
import * as S from './styles'
import Qr from 'qrcode.react'
import { Redirect } from 'react-router-dom'

function QRCode(){
    const [mac, setMac] = useState()
    const [ redirect, setRedirect] = useState(false)

    async function macAddress() {
        await localStorage.setItem('@CarSale/macaddress', mac)
        setRedirect(true)
        window.location.reload()
    }

    return(
        <S.Container>
            {redirect && <Redirect to="/"/>}
            
            <h1>Aproxime a câmera do seu celular!</h1>
            <Qr value="getMacaddress" size={250}/>
            <S.ContainerInput>
                <h2>Entre com o número fornecido pelo QRCode:</h2>
                <input type="text" value={mac} onChange={(e) => setMac(e.target.value)}/>
                <button type="button" onClick={macAddress}>Pronto</button>
            </S.ContainerInput>  
        </S.Container>
    )
}

export default QRCode