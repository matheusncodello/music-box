import axios from 'axios'; // importando biblioteca axios das dependências do projeto

// declarando constante com instância do axios que recebe objeto de configuração com a URL base para realizar as requisições
const api = axios.create({
    baseUrl: 'https://62438e0439aae3e3b7441351.mockapi.io/musics'
});

export default api; // exportando a constante api para que possa ser acessada por outros componentes