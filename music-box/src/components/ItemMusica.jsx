import React from 'react';
import editIcon from '../img/edit-icon.png';
import deleteIcon from '../img/delete-icon.png';

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
                        <input className="input-music-enable" type="text" defaultValue={props.desc1}/>
                    </p>
                    <p>
                        <strong className="card-title">artista: </strong>
                        <input className="input-music-enable" type="text" defaultValue={props.desc2}/>
                    </p>
                    <p>
                        <strong className="card-title">categoria: </strong>
                        <input className="input-music-enable" type="text" defaultValue={props.desc3}/>
                    </p>
                    <p>
                        <strong className="card-title">ano: </strong>
                        <input className="input-music-enable" type="text" defaultValue={props.desc4}/>
                    </p>
                    <button className="btn-salvar-enable">Salvar</button>
                </div>
            </div>
        </>
    )
}

export default ItemMusica;