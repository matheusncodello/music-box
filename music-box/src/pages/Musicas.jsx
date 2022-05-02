import React, { useState, useEffect } from 'react';
import api from '../api';
import ItemMusica from '../components/ItemMusica'
import Menu from '../components/Menu'
import {useNavigate} from 'react-router-dom'

function Musicas() {

    const nav = useNavigate();

    /* 
    - o useState serve para definirmos estados em nossos componentes React
    - precisamos do useState caso a gente queira utilizar valores dinâmicos e REATIVOS
    - um estado é observado pelo React, então ao alterarmos seu valor, o React observará aquela alteração e utilizará o valor atualizado 
    - definimos um useState utilizando um vetor de 2 posições, onde na primeira posição, temos a definição do getter e na segunda posição, o setter do estado
    - o useState recebe como argumento qual será o valor inicial do estado (state)
    */
    const [musics, setMusics] = useState([])

    /* 
    - useEffect é referente a um efeito que adicionamos em nosso componente Musicas.jsx 
    - podemos utilizar de diversos useEffect diferentes em nosso código, cada um tendo um efeito isolado
    - cada efeito, recebe como argumentos uma função de callback (que será executada quando o efeito for atingido) e o estado que será observado
    - o useEffect tem o comportamento padrão de ser invocado quando o componente é montado (renderizado na tela pela primeira vez) e quando possui alguma alteração de estado (ou seja, quando algum useState do componente for alterado)
    - caso o useEffect esteja observando algum estado, o efeito será invocado sempre que o estado observado tiver seu valor alterado (como ao observar um contador, que a cada incremento, invocará um efeito diferente)
    */
    useEffect(() => {
        searchMusics()
    }, []) 
    // Vetor vazio serve para ele só executar apenas quando a página carrega, ou se quiser, 
    // colocar algo no vetor para ele observar algo quando for alterado. Ex: musics

    function searchMusics(){

        //  Uma Promise é um objeto de "promessa" que será resolvida em algum momento, mas por enquanto, apenas nos deu a confirmação de que a requisição será processada EM ALGUM MOMENTO (depende de quando encontrar todos os resultados na base e se a internet vai colaborar).
        // Essa Promise irá nos devolver uma resposta após o término do processamento da requisição, onde temos duas possibilidades:
        //  1. Essa Promise será resolvida corretamente, conseguindo processar a requisição;
        //  2. Ou irá nos indicar algum erro ocorrido durante esse processo;

        api.get("/musics") // realiza a requisição Get para buscar os dados (recebendo uma Promise que será resolvida)
        .then((res) => {
            // .then() executa um trecho de código assim que a Promise recebida ao fazermos a requisição for resolvida

            console.log(res)

            // aqui, usamos o setter do estado de musicas para atribuir os valores do vetor de dados da res da requisição
            setMusics(res.data)
        })
        .catch((error) => {
            // .catch() executa um bloco de código caso ocorra algum ERRO durante a execução da requisição,
            // tanto por termos acessado o endereço errado ou por algum erro da parte do servidor
            console.log(error);
        })
    }

    return (
        <>
            <Menu />

            <div className="container">
                <div className="filter">
                    <button onClick={() => (nav("/adicionar"))} className="btn">Adicionar</button>
                </div>
            </div>

            <div className="container">
                <div className="music-boxes">
                    {

                        // {} servem para invocar o javascript dentro do fragmento JSX que será retornado 
                        /* 
                        - .map() serve para iterarmos um vetor, ou seja, percorrer todos os elementos do vetor de forma separada
                        - o map recebe como argumentos uma função de callback (que será executada para cada iteração de um elemento do vetor)
                        - essa função de callback receberá como parâmetro o próprio elemento que está sendo percorrido naquela iteração do vetor 
                        - (pode utilizar o nome que quiser para o parâmetro, nesse caso, usamos "item" como identificação do elemento do vetor)
                        - essa função .map() retornará alguma coisa, de acordo com o que foi implementado na funçao de callback 
                        */
                                
                        // utilizando o estado de musicas que possui um vetor para renderizarmos o componente ItemMusica para cada um dos elementos que tivemos dentro do estado
                        musics.map((item) => {
                            return (
                                <ItemMusica 
                                    key={item.id} 
                                    title={item.title} 
                                    artist={item.artist} 
                                    genre={item.genre} 
                                    year={item.year} // Para passar número, usar chaves, ex: {123}
                                    image={item.image}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Musicas; // exportando Musicas para usarmos o componente em outros arquivos