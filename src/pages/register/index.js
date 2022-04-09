import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Link from "next/link";

const Register = () => {

    return (
        <div>
            <div className="background"></div>

            <div className="register__page">
                <div className="line"></div>
                <form className="form">
                    <h1>Créez un mot de passe pour activer votre abonnement</h1>
                    <p className="form__content">Une seule étape puis c'est fini !</p>
                    <p className="form__content">Plus rien à remplir.</p>
                    <Input
                        name="username"
                        id="username"
                        type="text"
                        classes="form__input"
                        required={true}
                        placeholder="Pseudo"
                    />
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
                    <Button title="S'identifier" classes="btn btn__color-red-form" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Register;