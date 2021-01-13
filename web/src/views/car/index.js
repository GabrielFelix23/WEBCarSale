import React from 'react'
import * as S from './styles'

import Header from '../../components/header'
import Footer from '../../components/footer'

function Car() {
  return (
    <S.Container>
      <Header/>
        
        <S.ContainerTaskCar>
            <h1>Car</h1>
        </S.ContainerTaskCar>
          
      <Footer/>
    </S.Container>
  )
}

export default Car;
