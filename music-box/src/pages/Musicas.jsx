import React, { useState, useEffect } from 'react';
import api from '../api';
import ItemMusica from '../components/ItemMusica'
import Menu from '../components/Menu'

function Musicas() {

    const [musics, setMusics] = useState([])

    useEffect(() => {
        searchMusics()
    }, []) 
    // Vetor vazio serve para ele só executar apenas quando a página carrega, ou se quiser, 
    // colocar algo no vetor para ele observar algo quando for alterado. Ex: musics

    function searchMusics(){

        api.get()
        .then((res) => {
            console.log(res)
            setMusics(res.data)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <>
            <Menu />

            <div className="container">
                <div className="filter">
                    <button className="btn">Adicionar</button>
                </div>
            </div>

            <div className="container">
                <div className="music-boxes">
                    {
                        musics.map((item) => {
                            return (
                                <>
                                    <ItemMusica key={item.id} title={item.title} artist={item.artist} genre={item.genre} year={item.year}/>
                                </>
                            )
                        })
                        

                        /*
                        Quando é colocado as {}, pode se usar JS dentro do HTML.

                        <ItemMusica desc1="G-Gang" desc2="Snoop Dogg" desc3="Rap" desc4={1995}/>
                        Para passar número, usar chaves, ex: {123} 
                        */
                    }
                </div>
            </div>
        </>
    )
}

export default Musicas;