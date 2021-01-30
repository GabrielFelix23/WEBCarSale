import React from 'react'
import * as S from './styles'
import Qr from 'qrcode.react'

function QRCode(){
    return(
        <S.Container>
            <h1>Aproxime a câmera do seu celular.</h1>
            <Qr value="getMacaddress" size={250}/>
            <S.ContainerInput>
                <h2>Entre com o número que apareceu no seu celular!</h2>
                <input type="text"/>
                <button type="button">Pronto</button>
            </S.ContainerInput>  
        </S.Container>
    )
}

export default QRCode