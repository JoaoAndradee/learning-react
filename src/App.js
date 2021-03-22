import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import SearchBox from './components/InputBox';

function App() {

  const [searchText, setSearchText] = useState();
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([
      {id: 123, title: "Ir ao supermercado", done: false},
      {id: 124, title: "Acordar cedo", done: true},
      {id: 125, title: "Cozinhar", done: false}
    ])
  }, [])

  function handleSearchInput(novoTexto) {
    setSearchText(novoTexto);
  }

  function addAction(newItem) {
    let newList = [...list, {title: newItem, done: false} ];
    setList(newList);
  }
  
  return (
    <>
      <h1>Lista de tarefas</h1>
      <SearchBox
       frasePadrao="Adicione uma tarefa"
       onEnter={addAction}
      />

    <hr/>

    <ul>
      {list.map((item, index) => {
        return (
          <li key={index}>
            {item.done && 
              <del>{item.title}</del>
            }
            {!item.done && 
              item.title
            }
          </li>
        );
      })}
    </ul>
    
    </>
  );
}

export default App;