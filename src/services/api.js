//Usando axios para trabablhar com requisições
import axios from 'axios'

const api = axios.create({
    //Url base para fazer a pesquisa da api 
    baseURL: "https://viacep.com.br/ws/"
})
//exportando por padrão...
export default api