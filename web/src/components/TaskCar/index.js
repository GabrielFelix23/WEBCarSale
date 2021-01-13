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
                <small>R$ {price}</small>
                <small>KM/H {km}</small>
            </S.Value>
            <Link to={`/filter/${id}`}>Ver +</Link>
        </S.Box>
    </S.Container>
  )
}

export default TaskCar
