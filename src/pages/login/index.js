import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {

  const router = useRouter();
  const [user, setUser] = useState();

  const submitLogin = (e) => {
    axios
    .post('http://localhost:3001/login', {
      email: user.email,
      password: user.password,
    })
    .then(response => {
      // Handle success.
      console.log(e);
      console.log('User profile', response.user);
      console.log('User token', response.data.accessToken);
      localStorage.setItem("token", response.data.accessToken);
      router.push('/browse')
    
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error.response);
    });
    e.preventDefault(); 
  
    }

  return (
    <div>
    <div className="background_image"></div>
    <div className="opacity"></div>
    <div className="form__opacity"></div>
    <div className="login__page">
      <form className="form" onSubmit={(e)=> submitLogin(e)}>
          <h1>Se connecter</h1>
          <Input
          name="email"
          id="email"
          type="email"
          classes="form__input"
          required={true}
          placeholder="Adresse e-mail"
          handleChange={(e) => setUser({...user, email : e.target.value})}
          />
          <Input
          name="password"
          id="password"
          type="password"
          classes="form__input"
          required={true}
          placeholder="Mot de passe"
          handleChange={(e) => setUser({...user, password : e.target.value})}
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