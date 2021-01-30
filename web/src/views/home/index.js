import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import * as S from './styles'

import TaskCar from '../../components/TaskCar';
import api from '../../api'
import logo from '../../used/car.png'

import isConnected from '../../util/get_macaddress'

function Home() {
  const[list, setList] = useState([])
  const[redirect, setRedirect] = useState(false)

  async function connectApI(){
    await api.get(`/filter/all/${isConnected}`)
    .then((response) => {
      setList(response.data)
    })
  }

  useEffect(() => {
    if(!isConnected){
      setRedirect(true)
    }

    connectApI()
  }, [])

  return (
    <S.Container>   
        {redirect && <Redirect to="/qrcode"/>}   
        <S.ContainerTaskCar>
          {list == '' ? 
            <div className="ContainerInfo">
              <img src={logo} alt="Logo"/>
              <h1>Nenhum carro cadastrado!</h1>
            </div>
            :
            list.map((l) => (
              <TaskCar id={l._id} name={l.model} price={l.price} km={l.km}/>
            ))
          }
        </S.ContainerTaskCar>
    </S.Container>
  );
}

export default Home;
