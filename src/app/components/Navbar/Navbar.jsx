'use client'
import './Navbar.css';
import {useState, useEffect} from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTarget = (targetId) => {
        //router.push("/") - pokud chceš při kliknutí na odkaz změnit URL, například z podstránky na homepage
        setTimeout(() => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }, 200);
    };

    return (
        <div className={`nav ${scrolled ? 'scrolled' : ''}`}>
            <nav className="container">
                <img
                    onClick={() => scrollToTarget('hero')}
                    className="nav-logo"
                    src="/images/Logo.webp"
                    alt="Morphly"
                    draggable="false"
                    loading="eager"
                    placeholder="blur"
                />
                
                <div className={`burger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li onClick={() => scrollToTarget('features')}><span>Features</span>
                    </li>
                    <li onClick={() => scrollToTarget('pricing')}><span>Pricing</span>
                    </li>
                    <li onClick={() => scrollToTarget('reviews')}><span>Reviews</span>
                    </li>
                    <li onClick={() => scrollToTarget('faq')}><span>FAQ</span>
                    </li>
                    <li>
                        <button onClick={() => scrollToTarget('contact')} className={`btn btn-primary`}>
                            Get started
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
