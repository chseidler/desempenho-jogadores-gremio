import { ReactComponent as Arrow } from 'assets/img/arrow.svg';
import './styles.css';

function Pagination() {
    return (
        <div className="chgremio-pagination-container">
            <div className="chgremio-pagination-box">
                <button className="chgremio-pagination-button" disabled={true} >
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="chgremio-pagination-button" disabled={false} >
                    <Arrow className="chgremio-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;