// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import CadastroForm from "./views/CadastroForm";
import ListarUsuarios from "./views/ListarUsuarios";
import "./styles/css/index.css";

function App() {
  return (
    <Routes>
      <Route path="/users" element={<ListarUsuarios />} />
      <Route path="/" element={<CadastroForm />} /> 
    </Routes>
  );
}

export default App;
