import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'

import car from '../../used/car.png'

function TaskCar({name, price}) {
  return (
    <S.Container>
        <S.Box>
            <img src={car} alt="Car"/>
            <S.Value>
                <small>Carro: {name}</small>
                <small>R$: {price}</small>
            </S.Value>
            <a href="/">Ver +</a>
        </S.Box>
    </S.Container>
  )
}

export default TaskCar
