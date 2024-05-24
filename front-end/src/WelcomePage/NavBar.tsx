import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

const NavBar: React.FC = () => {
    const [show, setShow] = useState(true);
    const history = useHistory();

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShow(currentScrollY <= 0 || currentScrollY < lastScrollY);
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navBarClass = show ? "navBar-container" : "navBar-container navBar-hidden";

    const handleLoginClick = () => {
        history.push('/connexion');
    };

    const handleSignUpClick = () => {
        history.push('/connexion');   
    };

    return (
        <div className={navBarClass}>
            <div className="navBar-logo">
                <img src="../Image/AzuLogo.png" alt="Logo" />
            </div>
            <div className="navBar-buttons">
                <button onClick={handleLoginClick} className="navBar-button">
                    Se connecter
                </button>
                <button onClick={handleSignUpClick} className="navBar-button">
                    Créer un compte
                </button>
            </div>
        </div>
    );
}

export default NavBar;
