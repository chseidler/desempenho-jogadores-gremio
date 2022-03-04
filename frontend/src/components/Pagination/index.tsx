import { ReactComponent as Arrow } from 'assets/img/arrow.svg';
import { PlayerPage } from 'types/player';
import './styles.css';

type Props = {
    page: PlayerPage;
    onChange: Function;
}

function Pagination( { page, onChange } : Props) {
    return (
        <div className="chgremio-pagination-container">
            <div className="chgremio-pagination-box">
                <button className="chgremio-pagination-button" 
                disabled={page.first} onClick={() => onChange(page.number - 1)} >
                    <Arrow />
                </button>
                <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                <button className="chgremio-pagination-button" 
                disabled={page.last} onClick={() => onChange(page.number + 1)} >
                    <Arrow className="chgremio-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;