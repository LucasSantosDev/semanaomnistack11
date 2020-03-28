import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

import './styles.css';

import api from '../../../services/api';

import logoImg from '../../../assets/logo.svg';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  useEffect(() => {
    if (!ongId) {
      history.push('/');
      return;
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {
      const response = await api.post('incident', data, {
        headers: {
          Authorization: ongId
        }
      });

      toast.info(`O ID do caso é: ${response.data.id}`);

      history.push('/profile');
    } catch (error) {
      toast.error('Erro ao cadastrar Caso');
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#e02041" /> Voltar para home
          </Link>
        </section>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          ></textarea>
          <input
            type="text"
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <div className="input-group">
            <button
              className="button-default"
              type="button"
              onClick={() => (setTitle(''), setDescription(''), setValue(''))}
            >
              Cancelar
            </button>
            <button className="button-primary" type="submit">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
