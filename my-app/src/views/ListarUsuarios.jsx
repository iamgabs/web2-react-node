// ListarUsuarios.jsx
import React, { useState, useEffect } from "react";
import "../styles/css/table.css";

const ListarUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  const formatarData = (dataMongo) => {
    const data = new Date(dataMongo);
    const dia = data.getDate().toString().padStart(2, "0");
    const mes = (data.getMonth() + 1).toString().padStart(2, "0");
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/users/all");
        if (response.ok) {
          const data = await response.json();
          const usuariosFormatados = data.map((usuario) => ({
            ...usuario,
            data: formatarData(usuario.data),
          }));
          setUsuarios(usuariosFormatados);
        } else {
          console.error("Erro ao buscar usuários");
        }
      } catch (error) {
        console.error("Erro ao buscar usuários", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <table className="table-2 mr-10 mb-10">
        <thead>
            <th>Nome</th>
            <th>Data de aniversário</th>
            <th>CPF</th>
            <th>Endereço</th>
            <th>CEP</th>
        </thead>
        <tbody className="table-odd-color-light-blue ">
            {usuarios.map((usuario) => (
            <tr key={usuario._id}>
                <td>{usuario.nome}</td>
                <td>{usuario.data}</td>
                <td>{usuario.cpf}</td>
                <td>{usuario.adr}</td>
                <td>{usuario.cep}</td>
            </tr>
            ))}
        </tbody>
     </table>
    </div>
  );
};

export default ListarUsuarios;
