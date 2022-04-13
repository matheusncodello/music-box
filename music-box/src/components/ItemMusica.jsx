import React from 'react';
import editIcon from '../img/edit-icon.png';
import deleteIcon from '../img/delete-icon.png';
// importando imagem como uma variável para ser utilizada

function ItemMusica(props) {
    return (
        <>
            <div className="card-music">
                <div className="icons">
                    <img src={editIcon} alt="" />
                    <img src={deleteIcon} alt="" />
                </div>
                <div className="info-music">
                    <p>
                        <strong className="card-title">música: </strong>
                        {/* componente com classe "card-title", utilizando className do React pois class é reservada do sistema */}
                        <input className="input-music-enable" type="text" defaultValue={props.title}/>
                        {/* input precisa utilizar o defaultValue caso queira digitar, senão o elemento será somente para LEITURA */}
                    </p>
                    <p>
                        <strong className="card-title">artista: </strong>
                        <input className="input-music-enable" type="text" defaultValue={props.artist}/>
                    </p>
                    <p>
                        <strong className="card-title">categoria: </strong>
                        <input className="input-music-enable" type="text" defaultValue={props.genre}/>
                    </p>
                    <p>
                        <strong className="card-title">ano: </strong>
                        <input className="input-music-enable" type="text" defaultValue={props.year}/>
                    </p>
                    <button className="btn-salvar-enable">Salvar</button>
                </div>
            </div>
        </>
    )
}

export default ItemMusica;