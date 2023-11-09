// Em algum lugar do seu projeto React (por exemplo, UsersList.jsx)
import React, { useState, useEffect } from "react";

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/users/all");
                if (response.ok) {
                    const data = await response.json();
                    setUsers(data);
                } else {
                    console.error("Falha ao obter usuários.");
                }
            } catch (error) {
                console.error("Erro ao obter usuários:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Lista de Usuários</h1>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>{user.nome}</li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;
