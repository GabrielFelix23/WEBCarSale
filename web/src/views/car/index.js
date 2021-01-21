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
            <h3>Marca: {list.brand}</h3>
            <h3>Modelo: {list.model}</h3>
            <h3>Preço: {list.price}</h3>
            <h3>Chassi: {list.chassis}</h3>
            <h3>Ano: {list.year}</h3>
            <h3>KM/H: {list.km}</h3>
            <h3>Câmbio: {list.exchange}</h3>
            <h3>Portas: {list.doors}</h3>
            <h3>Cor: {list.color}</h3>
            <h3>Blingado: {list.shield}</h3>
            <h3>Estado: {list.state}</h3>
            <h3>Cidade: {list.city}</h3>
          </S.TaskCar>  
        </S.ContainerTaskCar>
        
        <S.ContainerButtons>
          <Link to='/'>Voltar</Link>
        </S.ContainerButtons>
    </S.Container>
  )
}

export default Car;
