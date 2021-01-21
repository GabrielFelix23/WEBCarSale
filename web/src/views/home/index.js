import React, {useState, useEffect} from 'react'
import * as S from './styles'

import TaskCar from '../../components/TaskCar';
import api from '../../api'

function Home() {
  const[list, setList] = useState([])
  const[macaddress, setMacaddress] = useState("11:11:11:11:11:11")

  async function connectApI(){
    await api.get(`/filter/all/${macaddress}`)
    .then((response) => {
      setList(response.data)
    })
  }

  useEffect(() => {
    connectApI()
  }, [])

  return (
    <S.Container>      
        <S.ContainerTaskCar>
          {
            list.map((l) => (
              <TaskCar id={l._id} name={l.model} price={l.price} km={l.km}/>
            ))
          }
        </S.ContainerTaskCar>
    </S.Container>
  );
}

export default Home;
