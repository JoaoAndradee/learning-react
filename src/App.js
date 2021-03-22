import React, { useState } from "react";
import styled from "styled-components";
import SearchBox from './components/InputBox';

function App() {

  const [searchText, setSearchText] = useState();

  function handleSearchInput(novoTexto) {
    setSearchText(novoTexto);
  }
  
  return (
    <>
      <h1>Lista de tarefas</h1>
      <SearchBox
       frasePadrao="Faça uma busca..."
       onChangeText={handleSearchInput}
      />

      <SearchBox
       frasePadrao= {searchText}
      />

    <hr/>

    Texto sendo buscado: {searchText}
    
    </>
  );
}

export default App;