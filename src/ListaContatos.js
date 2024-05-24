import { useState } from "react";

export default function ListaContatos() {

  const [contatos, setContatos] = useState([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const adicionarContato = () => {
    if (contatos.length < 12 && nome && telefone) {
      setContatos([...contatos, { nome, telefone }]);
      setNome('');
      setTelefone('');
    }
  };

  return (
    <div className="container">
      <h2>Lista de Contatos</h2>
      <div className="inputs">
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />

        <input
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="Telefone"
        />

        <button onClick={adicionarContato}>Adicionar Contato</button>
      </div>
      <div className="contatos">
        <ul>
          {contatos.map((contato, index) => (
            <li key={index}>
              {index+1} - {contato.nome} <span>{contato.telefone}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

  );

} 
