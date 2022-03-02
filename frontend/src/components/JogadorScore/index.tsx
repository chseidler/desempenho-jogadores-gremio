import JogadorStars from '../JogadorStars';
import './styles.css';

function JogadorScore() {

    const score = 3.5;
    const count = 13;
    
    return (
        <div className="chgremio-score-container">
        <p className="chgremio-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
        <JogadorStars />
        <p className="chgremio-score-count">{count} avaliações</p>
    </div>
    );
}

export default JogadorScore;