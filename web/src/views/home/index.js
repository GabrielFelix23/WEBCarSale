import React from 'react'
import * as S from './styles'

import Header from '../../components/header'
import Footer from '../../components/footer'

function Home() {
  return (
    <S.Container>
      <Header/>
      <h1>Home</h1>
      <Footer/>
    </S.Container>
  );
}

export default Home;
