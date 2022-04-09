import React, { useState } from "react";
import Input from "../components/Input"
import Button from "../components/Button";


const Login = () => {

  return (
    <div>
    <div className="background_image"></div>
    <div className="opacity"></div>
    <div className="home__page">
        <p className="p_h1">Films, séries TV et bien<br></br>plus en illimité.</p>
        <p className="p_h2">Où que vous soyez. Annulez à tout moment.</p>
        <p font-size="larger">Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver<br></br>votre abonnement.</p>
      <form className="form">
        <div className="form__content"></div>
          <Input
          name="username"
          id="username"
          type="email"
          classes="form__input"
          required={true}
          placeholder="Adresse e-mail"
          />
        <Button title="Commencer >" classes="btn btn__color-red" type="submit"/>
      <div/>
      </form>
    </div>
    </div>
  );
};

export default Login;