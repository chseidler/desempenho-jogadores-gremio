import axios, { AxiosRequestConfig } from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Player } from "types/player";
import { BASE_URL } from "utils/requests";
import { validateEmail } from "utils/validate";
import './styles.css';

type Props = {
    playerId: string;
}

function FormCard({ playerId }: Props) {

    const navigate = useNavigate();

    const [player, setPlayer] = useState<Player>();

    useEffect(() => {
        axios.get(`${BASE_URL}/players/${playerId}`)
            .then(response => {
                setPlayer(response.data);
            });
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const email = (event.target as any).email.value;
        const score = (event.target as any).score.value;

        if (!validateEmail(email)) {
            return;
        }

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                playerId: playerId,
                score: score
            }
        }

        axios(config).then(response => {
            navigate("/");
        });

    }

    return (
        <div className="chgremio-form-container">
            <img className="chgremio-movie-card-image" src={player?.image} alt={player?.name} />
            <div className="chgremio-card-bottom-container">
                <h3>{player?.name}</h3>
                <form className="chgremio-form" onSubmit={handleSubmit}>
                    <div className="form-group chgremio-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group chgremio-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="chgremio-form-btn-container">
                        <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                    </div>
                </form >
                <Link to="/">
                    <button className="btn btn-primary chgremio-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >
    );
}

export default FormCard;