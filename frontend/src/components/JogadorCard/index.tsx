import JogadorScore from "../JogadorScore";

function JogadorCard() {

    const jogador = {
        id: 1,
        image: "https://gremio.blob.core.windows.net/imgs-site/md-jogador-acao-760af28962cdf938537a5e131492d91b.jpg",
        title: "Brenno",
        count: 100,
        score: 0.2
    };

    return (
        <div>
            <img className="chgremio-movie-card-image" src={jogador.image} alt={jogador.title} />
            <div className="chgremio-card-bottom-container">
                <h3>{jogador.title}</h3>
                <JogadorScore />
                <div className="btn btn-primary chgremio-btn">Avaliar</div>
            </div>
        </div>
    );
}

export default JogadorCard;