import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft, FiEye, FiEyeOff, FiLoader } from "react-icons/fi";
import InputMask from "react-input-mask";

import api from "~/services/api";
import treatmentResponse from "~/helpers/treatmentResponse";
import validationMessageError from "~/helpers/validationMessageError";
import "./styles.css";

import logoImg from "~/assets/logo.svg";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);
  const [typeinput, setTypeInput] = useState("password");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    setLoading(true);

    if (loading) {
      return;
    }

    const data = {
      name,
      email,
      password,
      whatsapp: whatsapp.replace(/\D/g, ""),
      city,
      state
    };

    try {
      await api.post("ong", data);

      treatmentResponse([
        {
          msg: "Informações de acesso enviados para o e-mail cadastrado",
          type: "info"
        }
      ]);

      history.push("/");
    } catch (error) {
      if (error.response) {
        const validationError = validationMessageError(error);

        if (validationError.messages.length > 0) {
          treatmentResponse(validationError.messages);
        } else {
          treatmentResponse([{ msg: "Erro ao cadastrar ONG", type: "error" }]);
        }
      }
    }

    setLoading(false);
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar
            os casos da sua ONG.
          </p>

          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#e02041" /> Já tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nome da ONG"
            value={name}
            required="required"
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            required="required"
            onChange={e => setEmail(e.target.value)}
          />
          <div className="input-password">
            <input
              type={typeinput}
              placeholder="Senha"
              value={password}
              required="required"
              onChange={e => setPassword(e.target.value)}
            />
            {typeinput === "password" ? (
              <FiEye
                onClick={() => setTypeInput("text")}
                title="Mostrar senha"
                className="icon-eye"
                size={25}
                color="#e02041"
              />
            ) : (
              <FiEyeOff
                onClick={() => setTypeInput("password")}
                title="Esconder senha"
                className="icon-eye"
                size={25}
                color="#e02041"
              />
            )}
          </div>
          <InputMask
            mask="(99) 99999-9999"
            value={whatsapp}
            required="required"
            onChange={e => setWhatsapp(e.target.value)}
            placeholder="WhatsApp"
          />

          <div className="input-group">
            <input
              type="text"
              placeholder="Cidade"
              value={city}
              required="required"
              onChange={e => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="UF"
              maxLength="2"
              style={{ width: 80, textTransform: "uppercase" }}
              value={state}
              required="required"
              onChange={e => setState(e.target.value)}
            />
          </div>

          <button className="button-primary personal-button" type="submit">
            {!loading ? (
              "Cadastrar"
            ) : (
              <>
                Cadastrando
                <FiLoader size={38} color="#fff" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
