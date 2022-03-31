import React, {useState} from 'react';
import api from './api';

function App() {
  const [musics, setMusics] = useState(""); // Não inicializar como undefined, pois quebra o código (Quando for fazer uma requisição)
  const [load, setLoad] = useState(false);

  async function searchMusics() { // asysnc é para deixar a função assincrona
    setLoad(true);

    api.get('https://62438e0439aae3e3b7441351.mockapi.io/musics')
    .then((response) => {
      setMusics(response.data[1].title);
      setLoad(false);
    })
    .catch((error) => {
      console.log(error);
      setLoad(false);
    })
    
    // const response = await api.get('url'); 
    // Não monta uma promise, ele ja retorna os dados depois de pronto (Colocar dentro de um try/catch para trativa de erro)
  }

  return (
    <>
    {
      !load? 
      <>
        <h1>Music</h1>
        <h1>{musics}</h1>
        <button onClick={searchMusics}>Search Musics</button>
      </> 
      : 
      <>
        <h1>Loading...</h1>
      </>
    }
    </>
  );
}

export default App;
