import {useState} from 'react'
import {FiSearch} from 'react-icons/fi'
import api from './services/api'
import './style.css'

function App() {
  //Constantes para pegar o valor do input e retornar as informações
  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  //Função assincrona
  async function handleSearch(){
    if(input === ""){
      alert('digite algum CEP')
      return
    }

    try {
      //    "Promise"        faz a requisição na api com base no valor do input
      const response = await api.get(`${input}/json`)
      console.log(response)
      setCep(response.data)
      setInput('')

    } catch {
      alert('CEP não encontrado')
      setInput('')
    }
  }
  
  return (
    <div className="container">
      <h1 className="title"> Busque o CEP desejado</h1>

      <div className="container-input">
        <input 
          type="text" 
          placeholder="Digite o CEP..."
          value={input}
          onChange={(e) => setInput(e.target.value)} />
        
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch  size={25} color='#fff'/>
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        //Só ira aparecer quando o objeto CEP tiver no minimo um elemento
        <main className='main'>
          <h2> CEP: {cep.cep}</h2>

          <span> {cep.logradouro} </span>
          <span>Complemento: {cep.complemento} </span>
          <span>Bairro: {cep.bairro} </span>
          <span>{cep.localidade} - {cep.uf} </span>
        </main>
      )}
    </div>
  );
}

export default App;