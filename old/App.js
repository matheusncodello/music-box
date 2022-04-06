import React, {useState} from 'react';// importando biblioteca React das dependências do projeto
// Lembrando que "./" indica que o arquivo a seguir está no mesmo diretório && "../" indica que o arquivo está no diretório anterior
import api from "./api"; // importando a instância do Axios que criamos em api.js
import Votacao from "./components/Votacao"; // importando o componente Votacao que está no diretório "components"

function App() {
  const [musics, setMusics] = useState(""); // Não inicializar como undefined, pois quebra o código (Quando for fazer uma requisição)
  const [load, setLoad] = useState(false);

  async function searchMusics() { // asysnc é para deixar a função assincrona
    setLoad(true);


    //  Uma Promise é um objeto de "promessa" que será resolvida em algum momento, mas por enquanto, apenas nos deu a confirmação de que a requisição será processada EM ALGUM MOMENTO (depende de quando encontrar todos os resultados na base e se a internet vai colaborar).
    // Essa Promise irá nos devolver uma resposta após o término do processamento da requisição, onde temos duas possibilidades:
    //  1. Essa Promise será resolvida corretamente, conseguindo processar a requisição (como a pizza chegando na sua casa quentinha e saborosa)
    //  2. Ou irá nos indicar algum erro ocorrido durante esse processo (como o motoboy cair da moto ou perderem sua pizza?);

    // COMEÇANDO A UTILIZAR A INSTÂNCIA AXIOS PARA REALIZAR A REQUISIÇÃO!
    api.get('https://62438e0439aae3e3b7441351.mockapi.io/musics') // realiza a requisição Get para buscar os dados (recebendo uma Promise que será resolvida)
    .then((response) => {
      // .then() executa um trecho de código assim que a Promise recebida ao fazermos a requisição for resolvida 
      // (ou seja, deixou de ser somente o pedido, e a response FINALMENTE chegou)

      // aqui, usamos o Setter do estado que criamos na linha 8 para atribuir ao estado musicas o valor do TÍTULO da ocorrência de ÍNDICE 29 do atributo DATA (vetor de dados recebidos) da RESPOSTA OBTIDA!
      setMusics(response.data[1].title);
      // No React, não podemos renderizar um objeto {atributo: valor}, então, precisamos acessar o atributo título para renderizar somente a String (ele dá erro e trava a aplicação caso tentemos renderizar um objeto ou vetor diretamente na tela)
      
      setLoad(false);
    })
    .catch((error) => {
      // .catch() executa um bloco de código caso ocorra algum ERRO durante a execução da requisição, tanto por termos acessado o endereço errado ou por algum erro da parte do servidor
      console.log(error); // exibindo no console o erro que ocorreu durante a execução da requisição
      setLoad(false);
    })
    
    // const response = await api.get(); 
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
        <Votacao title="Lua Nova" /> {/* invocando o componente Votacao, passando como parâmetro o título "Lua Nova" */}
        <Votacao title="Dois filhos de Francisco" /> {/* invocando o componente Votacao, passando outro título como parâmetro */}
        <Votacao title="Batman" />
        <Votacao title="Gente Grande" />
        <Votacao title="Shrek" />
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
