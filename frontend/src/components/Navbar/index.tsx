import { ReactComponent as GitHubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="chgremio-nav-content">
                    <h1>Avaliação Grêmio x Mirassol</h1>
                    <a href="https://github.com/chseidler" target="_blank" rel="noreferrer">
                        <div className="chgremio-contact-container">
                            <GitHubIcon />
                            <p className="chgremio-contact-link">/chseidler</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;