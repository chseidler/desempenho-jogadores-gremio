import { Link } from "react-router-dom";
import './styles.css';

function Form() {

    const jogador = {
        id: 1,
        image: "https://gremio.blob.core.windows.net/imgs-site/md-jogador-acao-760af28962cdf938537a5e131492d91b.jpg",
        title: "Brenno",
        count: 100,
        score: 0.2
    };


    return (
        <div className="chgremio-form-container">
            <img className="chgremio-movie-card-image" src={jogador.image} alt={jogador.title} />
            <div className="chgremio-card-bottom-container">
                <h3>{jogador.title}</h3>
                <form className="chgremio-form">
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

export default Form;