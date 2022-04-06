import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {

  return (
    <div>
    <div className="background_image"></div>
    <div className="opacity"></div>
    <div className="login__page">
        <p className="p_h1">Films, séries TV et bien<br></br>plus en illimité.</p>
        <p className="p_h2">Où que vous soyez. Annulez à tout moment.</p>
      <form className="form">
          <h1>Se connecter</h1>
          <Input
          name="username"
          id="username"
          type="email"
          classes="form__input"
          required={true}
          placeholder="Adresse e-mail"
          />
          <Input
          name="password"
          id="password"
          type="email"
          classes="form__input"
          required={true}
          placeholder="Mot de passe"
          />
        <Button title="Commencer >" classes="btn btn__color-red" type="submit"/>
      </form>
    </div>
    </div>
  );
};

export default Login;