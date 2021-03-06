import React, {useState, useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom'
import * as S from './styles'

import api from '../../api/'

function Car({match}) {
  const [list, setList] = useState([])
  const [redirect, setRedirect] = useState(false)

  async function CarList(){ 
    await api.get(`/filter/${match.params.id}`)
      .then((response) => {
        setList(response.data)
      })
  }

  async function clear(){
    const res = window.confirm("Deseja realmente deletar a postagem?")
    if(res == true){
      await api.delete(`/delete/${match.params.id}`)
      .then(() => {
        setRedirect(true)
        window.location.reload()
      })
    }
  }

  useEffect(() => {
    CarList()
  }, [list])

  return (
    <S.Container>  
      
        {redirect && <Redirect to="/"/>}
        <S.ContainerTaskCar>  
          <S.TaskCar>
            <h3>Marca: {list.brand}</h3>
            <h3>Modelo: {list.model}</h3>
            <h3>R${list.price}</h3>
            <h3>Chassi: {list.chassis}</h3>
            <h3>Ano: {list.year}</h3>
            <h3>Km/h: {list.km}</h3>
            <h3>Câmbio: {list.exchange}</h3>
            <h3>Portas: {list.doors}</h3>
            <h3>Cor: {list.color}</h3>
            <h3>Blindado: {list.shield}</h3>
            <h3>Estado: {list.state}</h3>
            <h3>Cidade: {list.city}</h3>
          </S.TaskCar>  
        </S.ContainerTaskCar>
        
        <S.ContainerButtons>
          <Link className="backButton" to='/'>Voltar</Link>
          <Link className="editButton" to={`/sell/${list._id}`}>Editar</Link>
          <Link className="deleteButton" onClick={clear}>Deletar</Link>
        </S.ContainerButtons>
    </S.Container>
  )
}

export default Car;
