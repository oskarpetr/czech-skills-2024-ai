"use client"
import React from 'react'
import './Footer.css'

export default function Footer() {
    const scrollToTarget = (targetId) => {
        setTimeout(() => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 200);
    };

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="item about">
                        <img onClick={() => scrollToTarget("header")} src='/images/Logo.webp' alt='' draggable="false" loading="lazy" placeholder="blur" />
                        <p>Bring Your Imagination to Life with AI-Driven 3D Character Creation</p>
                    </div>
                    <div className="item empty"></div>
                    <div className="item empty"></div>
                    <div className="item links">
                        <h2>Sections</h2>
                        <button onClick={() => scrollToTarget("features")}>Features</button>
                        <button onClick={() => scrollToTarget("pricing")}>Pricing</button>
                        <button onClick={() => scrollToTarget("reviews")}>Reviews</button>
                        <button onClick={() => scrollToTarget("faq")}>FAQ</button>
                        <button onClick={() => scrollToTarget("contact")}>Contact</button>
                    </div>
                    <div className="item links">
                        <h2>Contact</h2>
                        <a href='tel:777777777' target='_blank' rel="noopener noreferrer"><img
                            src='/images/footerphone.svg' alt='Telephone number' width={25} height={25}
                            draggable="false" loading="lazy" placeholder="blur"/> +420 123 456 789</a>
                        <a href='mailto:info@morphly.ai' target='_blank' rel="noopener noreferrer"><img
                            src='/images/footeremail.svg' alt='Email addres' width={25} height={25}
                            draggable="false" loading="lazy" placeholder="blur"/> info@morphly.ai</a>
                    </div>
                </div>
                <div className="bottom-line"></div>
                <div className="bottom-content">
                    <p>{new Date().getFullYear()} © Morphly.ai All rights reserved</p>
                    <a href='/' target='_blank' rel="noopener noreferrer"><img src='/images/Logo.webp' alt='' draggable="false" loading="lazy" placeholder="blur" /></a>
                </div>
            </div>
        </footer>
    )
}