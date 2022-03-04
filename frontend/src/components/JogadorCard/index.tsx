import JogadorScore from "../JogadorScore";
import { Link } from "react-router-dom";
import { Player } from "types/player";

type Props = {
    player: Player;
}

function JogadorCard( { player } : Props) {

    return (
        <div>
            <img className="chgremio-movie-card-image" src={player.image} alt={player.name} />
            <div className="chgremio-card-bottom-container">
                <h3>{player.name}</h3>
                <JogadorScore />

                <Link to={`/form/${player.id}`}>
                    <div className="btn btn-primary chgremio-btn">Avaliar</div>
                </Link>
            </div>
        </div>
    );
}

export default JogadorCard;