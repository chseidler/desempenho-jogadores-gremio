import PlayerStars from '../PlayerStars';
import './styles.css';

type Props = {
    score: number;
    count: number;
}

function PlayerScore( { score, count } : Props) {
    
    return (
        <div className="chgremio-score-container">
        <p className="chgremio-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
        <PlayerStars score={score} />
        <p className="chgremio-score-count">{count} avaliações</p>
    </div>
    );
}

export default PlayerScore;