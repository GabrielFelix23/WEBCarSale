import React from 'react'
import * as S from './styles'

import Header from '../../components/header'
import Footer from '../../components/footer'
import TaskCar from '../../components/TaskCar';

function Home() {
  return (
    <S.Container>
      <Header/>
        
        <S.ContainerTaskCar>
          <TaskCar/>
          <TaskCar/>
          <TaskCar/>
        </S.ContainerTaskCar>
          
      <Footer/>
    </S.Container>
  );
}

export default Home;
