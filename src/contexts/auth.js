import React, { useState, createContext, useEffect } from "react";
import Axios from 'axios';
import { AsyncStorage } from "react-native";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    async function loadStorage() {
      const userStorage = await AsyncStorage.getItem('token');
      if(userStorage) {
        setUser(JSON.parse(userStorage));
        setLoading(true);
      };
      setLoading(false);
    }
    loadStorage();
  }, []);


  async function salvarNoStorage(data) {
    await AsyncStorage.setItem('token', JSON.stringify(data));
  }

  async function signIn() {
    try {
      const data = await Axios.get('https://api.jsonbin.io/b/5efb43c3bb5fbb1d25617e3b/1', {
        method: 'get',
        headers: {
          'secret-key': '$2b$10$VINy4h8fxCh7Mn8rjFQfdec4Y60L8hEgcSg4ywDPC/JDIUq6HjIfC'
        }
      });

      if(data.data.nome !== 'Deyvison') {
        setLoading(false);
        alert('Dados inválidos');
        return 
      }
      setUser(data.data);
      salvarNoStorage(data.data);
      return;
    } catch (err) {
      return;
    }
  }

  const criarUsuario = async (nome, email, senha) => {
    const usuario = await fetch('https://api.jsonbin.io/b/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      'secret-key': '$2b$10$VINy4h8fxCh7Mn8rjFQfdec4Y60L8hEgcSg4ywDPC/JDIUq6HjIfC',
      data: {
        nome: nome,
        email: email,
        senha: senha
      }
    });
    setUser(usuario)
  }
  
  return (
    <AuthContext.Provider value={{ logado: !!user, user, setUser, signIn, criarUsuario, loading,setLoading }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
