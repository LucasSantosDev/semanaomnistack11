import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { toast } from 'react-toastify';

import './styles.css';

import api from '../../../services/api';

import logoImg from '../../../assets/logo.svg';
import heroesImg from '../../../assets/heroes.png';

export default function Logon() {
  const [id, setId] = useState('');

  const history = useHistory();

  useEffect(() => {
    try {
      const ongId = localStorage.getItem('ongId');

      if (ongId) {
        history.push('/profile');
      }
    } catch (error) {}
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    toast.dismiss();

    try {
      const response = await api.post('/session', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (error) {
      toast.error('Erro ao efetuar login, tente mais tarde!');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <input
            type="text"
            name="id"
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button-primary" type="submit">
            Entrar
          </button>

          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#e02041" /> Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Hero" />
    </div>
  );
}
