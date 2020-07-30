import React from 'react';
import Menu from './component/Menu'
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './component/BannerMain';
import Carousel from './component/Carousel';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Menu/>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"o que pe Front-End? Trabalhando na area"}
        />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}/>
        <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}/>
        <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}/>
        <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}/>
        <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}/>
        <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}/>
       
      <Footer/>
    </div>
  );
}

export default App;
