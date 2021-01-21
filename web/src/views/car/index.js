import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import * as S from './styles'

import api from '../../api/'

function Car({match}) {
  const[list, setList] = useState([])

  async function CarList(){ 
    await api.get(`/filter/${match.params.id}`)
      .then((response) => {
        setList(response.data)
      })
  }

  useEffect(() => {
    CarList()
  }, [list])

  return (
    <S.Container>      
        <S.ContainerTaskCar>  
          <S.TaskCar>
            <h3>Brand: {list.brand}</h3>
            <h3>Model: {list.model}</h3>
            <h3>Chassis: {list.chassis}</h3>
            <h3>Year: {list.year}</h3>
            <h3>KM/H: {list.km}</h3>
            <h3>Exchange: {list.exchange}</h3>
            <h3>Doors: {list.doors}</h3>
            <h3>Color: {list.color}</h3>
            <h3>Shield: {list.shield}</h3>
            <h3>State: {list.state}</h3>
            <h3>City: {list.city}</h3>
          </S.TaskCar>  
        </S.ContainerTaskCar>
        
        <S.ContainerButtons>
          <Link to='/'>Voltar</Link>
        </S.ContainerButtons>
    </S.Container>
  )
}

export default Car;
