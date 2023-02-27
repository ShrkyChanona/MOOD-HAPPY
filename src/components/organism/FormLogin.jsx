import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

import Logo from "../atoms/Logo";
import Title from "../atoms/Title";
import Span from "../atoms/Span";
import Data from "../molecules/Data";
import { data } from "../../data/data";
import "../../assets/styles/login.css";

function FormLogin() {
  const formLogin = useRef();
  const navigate = useNavigate();

  const handlerClick = (e) => {
    e.preventDefault();

    const dataUser = new FormData(formLogin.current);
    //fetch


    navigate('/');
  };

  return (
    <div class="padre">
      <Logo img={data.routes.logoH} />
      <Title text="Bienvenidos a Mood Happy" />
      <div>
        <form className="inputs-container" ref={formLogin}>
          <Data text='Nombre de Usuario:' type='text' placeholder='username' name="username" />
          <Data text='Contraña:' type='password' placeholder='password' name="password" />
          
        </form>
        <div className="span">
          <Span p="¿Aun no tienes cuenta?" />
          <Link to="/Register">Click</Link>
        </div>

        <div>
          <Span p="Terminos de servicio," />
          <Span p="Politica de privacidad," />
          <Span p="Condiciones de uso" />
        </div>
        <button class="btn" onClick={handlerClick}>Iniciar sesion</button>
      </div>
    </div>
  );
}

export default FormLogin;
