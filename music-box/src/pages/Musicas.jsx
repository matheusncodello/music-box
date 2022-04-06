import React from 'react';
import ItemMusica from '../components/ItemMusica'
import Menu from '../components/Menu'

function Musicas() {
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
                    <ItemMusica desc1="Música" desc2="Artista" desc3="Categoria" desc4="Ano"/> {/* Para passar número, usar chaves, ex: {123} */}
                    <ItemMusica desc1="Música" desc2="Artista" desc3="Categoria" desc4="Ano"/>
                    <ItemMusica desc1="Música" desc2="Artista" desc3="Categoria" desc4="Ano"/>
                    <ItemMusica desc1="Música" desc2="Artista" desc3="Categoria" desc4="Ano"/>
                    <ItemMusica desc1="Música" desc2="Artista" desc3="Categoria" desc4="Ano"/>
                    <ItemMusica desc1="Música" desc2="Artista" desc3="Categoria" desc4="Ano"/>
                </div>
            </div>
        </>
    )
}

export default Musicas;