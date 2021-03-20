import React, {useState, useEffect} from "react";

function App() {

  const [contagem, setContagem] = useState(0);
  
  function aumentarContagem() {
    return setContagem(contagem + 1);
  }

  useEffect(() => {
    if(contagem > 0) {
      document.title = "Contagem: " + contagem;
    }
  }, [contagem]);

  return (
    <>
      <h1>Contagem: {contagem}</h1>
      <button onClick={aumentarContagem}>Clique para aumentar</button>

    </>
  );
}

export default App;