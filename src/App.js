import React from "react";
import styled from "styled-components";
import SearchBox from './components/InputBox';

function App() {


  return (
    <>
      <h1>Lista de tarefas</h1>
      <SearchBox frasePadrao="Faça uma busca..."/>
      <SearchBox frasePadrao="Digite seu nome"/>
      <SearchBox frasePadrao="Digite sua senha"/>
    </>
  );
}

export default App;