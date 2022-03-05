import PlayerScore from "../PlayerScore";
import { Link } from "react-router-dom";
import { Player } from "types/player";

type Props = {
    player: Player;
}

function PlayerCard( { player } : Props) {

    return (
        <div>
            <img className="chgremio-movie-card-image" src={player.image} alt={player.name} />
            <div className="chgremio-card-bottom-container">
                <h3>{player.name} - {player.position}</h3>
                <PlayerScore count={player.count} score={player.score} />

                <Link to={`/form/${player.id}`}>
                    <div className="btn btn-primary chgremio-btn">Avaliar</div>
                </Link>
            </div>
        </div>
    );
}

export default PlayerCard;