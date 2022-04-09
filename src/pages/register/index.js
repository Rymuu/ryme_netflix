import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const Register = () => {
    const router = useRouter();
    const [user, setUser] = useState();
    const submitRegister = (e) => {
      axios
    .post('http://localhost:3001/users', {
      username: user.username,
      email: user.email,
      password: user.password,
    })
    .then(response => {
      // Handle success.
      if(response.error) {
        console.log("error")
      } else {
        console.log(response)
        localStorage.setItem('token', response.data.accessToken);
        router.push("/browse")
      }
      console.log('User profile', response.user);
      
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error.response);
    });
        console.log(e);
        e.preventDefault();
        console.log("send");
        console.log(user);
  }
  

    return (
        <div>
            <div className="background"></div>

            <div className="register__page">
                <div className="line"></div>
                <form className="form" onSubmit={(e)=> submitRegister(e)}>
                    <h1>Créez un mot de passe pour activer votre abonnement</h1>
                    <p className="form__content">Une seule étape puis c'est fini !</p>
                    <p className="form__content">Plus rien à remplir.</p>
                    <Input
                        name="username"
                        id="username"
                        type="text"
                        classes="form__input"
                        required={true}
                        handleChange={(e) => setUser({...user, username : e.target.value})}
                        placeholder="Pseudo"
                    />
                    <Input
                        name="email"
                        id="email"
                        type="email"
                        classes="form__input"
                        required={true}
                        handleChange={(e) => setUser({...user, email : e.target.value})}
                        placeholder="Adresse e-mail"
                    />
                    <Input
                        name="password"
                        id="password"
                        type="password"
                        classes="form__input"
                        required={true}
                        handleChange={(e) => setUser({...user, password : e.target.value})}
                        placeholder="Mot de passe"
                    />
                    <Button title="S'identifier" classes="btn btn__color-red-form" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Register;