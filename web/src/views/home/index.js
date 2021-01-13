import React, {useState, useEffect} from 'react'
import * as S from './styles'

import Header from '../../components/header'
import Footer from '../../components/footer'
import TaskCar from '../../components/TaskCar';
import api from '../../api'

function Home() {
  const[list, setList] = useState([])

  async function connectApI(){
    await api.get('/task/filter/all/11:11:11:11:11')
    .then((response) => {
      setList(response.data)
    })
  }

  useEffect(() => {
    connectApI()
  }, [])

  return (
    <S.Container>
      <Header/>
        
        <S.ContainerTaskCar>
          {
            list.map((l) => (
              <TaskCar name={l.model} price={l.price}/>
            ))
          }
        </S.ContainerTaskCar>
          
      <Footer/>
    </S.Container>
  );
}

export default Home;
