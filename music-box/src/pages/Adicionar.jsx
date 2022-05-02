import React, { useState } from "react";
import api from '../api';
import Menu from '../components/Menu'
import halfCircles from '../img/half-circles-pink-blue.png';

function Adicionar() {
    
    const [titleInput, setTitleInput] = useState('');
    const [artistInput, setArtistInput] = useState('');
    const [genreInput, setGenreInput] = useState('');
    const [yearInput, setYearInput] = useState('');
    const [imageInput, setImageInput] = useState('');

    function setMusic(event){
        setTitleInput((event.target.value))
    }

    function sendData(event){
        event.preventDefault();
        console.log("Sending data");

        const object = {
            title: titleInput,
            artist: artistInput,
            genre: genreInput,
            year: yearInput,
            image: imageInput,
        }

        api.post(
            "/musics", object
        )
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    return (
        <>
            <Menu />
            <div className="container">
                <div className="add-music">

                    <div className="formulario">

                        <h1>adicionar</h1>

                        <br />

                        <form onSubmit={sendData}>
                            <label>Música: <br />
                            <input onInput={setMusic} type="text" /> {/* Sem arrow function */}
                            </label> <br />
                            
                            <label>Artista: <br />
                            <input onInput={(event) => {setArtistInput(event.target.value)}} type="text" /> {/* Com arrow function */}
                            </label><br />

                            <label>Genêro: <br />
                            <input onInput={(event) => {setGenreInput(event.target.value)}} type="text" />
                            </label><br />

                            <label>Ano de Lançamento: <br />
                            <input onInput={(event) => {setYearInput(event.target.value)}} type="text" />
                            </label><br />
                            
                            <label> Imagem (url): <br />
                            <input onInput={(event) => {setImageInput(event.target.value)}} type="text" />
                            </label><br />

                            <button type="submit" className="btn">Enviar</button>
                        </form>
                    </div>

                    <div className="img-lateral">
                        <img src={halfCircles} alt=""/>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Adicionar;