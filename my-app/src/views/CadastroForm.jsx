// CadastroForm.jsx
import React, { useState } from "react";
import '../styles/css/index.css';

const CadastroForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    data: "",
    cpf: "",
    adr: "",
    cep: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await fetch("http://localhost:3001/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          nome: "",
          data: "",
          cpf: "",
          adr: "",
          cep: "",
        });

        setMessage("Usuário enviado com sucesso!");
      } else {
        // Trate erros aqui, se houver algum problema com a solicitação.
        setMessage("Falha ao enviar usuário.");
      }
    } catch (error) {
      setMessage("Erro ao enviar usuário.");
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <label htmlFor="date">Data de Aniversário:</label>
        <input
          type="date"
          name="data"
          value={formData.data}
          onChange={handleChange}
          required
        />
        <label htmlFor="cpf">CPF:</label>
        <input
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          required
        />
        <label htmlFor="adr">Endereço:</label>
        <input
          type="text"
          name="adr"
          value={formData.adr}
          onChange={handleChange}
          required
        />
        <label htmlFor="cep">CEP</label>
        <input
          type="text"
          name="cep"
          value={formData.cep}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CadastroForm;
