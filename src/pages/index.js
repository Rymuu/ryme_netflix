import React, { useState } from "react";
import Input from "../components/Input"
import Button from "../components/Button";
import { useRouter } from "next/router";


const Index = () => {
  
  const router = useRouter();

  return (
    <div>
      <div className="background_image"></div>
      <div className="opacity"></div>
      <div className="home__page">
        <p className="p_h1">Films, séries TV et bien<br></br>plus en illimité.</p>
        <p className="p_h2">Où que vous soyez. Annulez à tout moment.</p>
        <p fontSize="larger">Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver<br></br>votre abonnement.</p>
        <form className="form">
          <div className="form__content" onSubmit={() => router.push("/register")}></div>
          <Input
            name="email"
            id="email"
            type="email"
            classes="form__input"
            required={true}
            placeholder="Adresse e-mail"
          />
          <Button title="Commencer >" classes="btn btn__color-red" function={() => router.push("/register")}/>
          <div />
        </form>
      </div>
    </div>
  );
};

export default Index;