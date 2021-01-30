import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'

import car from '../../used/car.png'

function TaskCar({id, name, price, km}) {
  return (
    <S.Container>
        <S.Box>
            <img src={car} alt="Car"/>
            <S.Value>
                <small>Carro: {name}</small>
                <small>R$ {price.toFixed(3)}</small>
                <small>KM/H {km.toFixed(3)}</small>
            </S.Value>
            <Link to={`/filter/${id}`}>Ver +</Link>
        </S.Box>
    </S.Container>
  )
}

export default TaskCar
