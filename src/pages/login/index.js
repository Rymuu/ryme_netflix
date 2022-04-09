import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Link from "next/link";

const Login = () => {

  return (
    <div>
    <div className="background_image"></div>
    <div className="opacity"></div>
    <div className="form__opacity"></div>
    <div className="login__page">
      <form className="form">
          <h1>Se connecter</h1>
          <Input
          name="email"
          id="email"
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
        <Button title="S'identifier" classes="btn btn__color-red-form" type="submit"/>
        <p className="form__content">Première visite sur Netflix ? 
        <Link href="/register"><a className="form__content__white"> Inscrivez vous</a></Link>.</p>
      </form>    
    </div>
    </div>
  );
};

export default Login;