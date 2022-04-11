import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import 'react-toastify/dist/ReactToastify.css';
import withAuth from "../../HOC/withAuth";
import CategoryTitle from "../../components/CategoryTitle";
import Icon from "../../public/icones/aggretsuko.png";


const Index = () => {

    const router = useRouter();
    const [user, setUser] = useState(typeof window !== "undefined" ? JSON.parse(localStorage.getItem("mylist")) : []);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
    }, []);

    return (
        <div className="profil__page">
            <div className="profil__content">
                <div className="profil__image">
                    <img src={Icon.src} alt="image" className="image" />
                </div>
                <div className="profil__info">
                    <h1>Pseudo : {user.username}</h1>
                    <h1>Adresse email : {user.email}</h1>
                </div>
            </div>
        </div>
    );
};

export default withAuth(Index);