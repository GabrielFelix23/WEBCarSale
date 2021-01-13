import React from 'react'
import * as S from './styles'

import car from '../../used/car.png'

function TaskCar() {
  return (
    <S.Container>
        <S.Box>
            <img src={car} alt="Car"/>
            <S.Value>
                <small>Nome do carro:</small>
                <small>R$:</small>
            </S.Value>
        </S.Box>
    </S.Container>
  )
}

export default TaskCar
