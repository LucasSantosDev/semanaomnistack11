import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';

import './styles.css';

import api from '../../../services/api';
import { dot3, formatCurrencyBR } from '../../../helpers/utils';

import logoImg from '../../../assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');

  const history = useHistory();

  useEffect(() => {
    if (!ongId) {
      history.push('/');
      return;
    }

    (async () => {
      const response = await api.get('/profile', {
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(response.data);
    })();
  }, []);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/incident/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (error) {
      toast.error('Erro ao deletar caso, tente novamente mais tarde.');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>

        <Link to="/incidents/new" className="button-primary">
          Cadastrar novo caso
        </Link>

        <button type="button" onClick={() => handleLogout()}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>

      <ul>
        {incidents.map(i => (
          <li key={`${i.id}`}>
            <strong>CASO:</strong>
            <p>{i.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{dot3(i.description)}</p>

            <strong>VALOR:</strong>
            <p>{formatCurrencyBR(i.value)}</p>

            <button type="button" onClick={() => handleDeleteIncident(i.id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
