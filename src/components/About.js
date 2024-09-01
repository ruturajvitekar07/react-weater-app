import React from 'react';
import './About.css';

export default function About() {
    return (
        <div className="about-container">
            <h2>About Us</h2>
            <p className="description">
                Welcome to Weather App! We are dedicated to providing accurate and up-to-date weather information to help you plan your day with confidence. Our application pulls data from reliable sources to give you the latest weather forecasts and updates.
            </p>
            <div className="team">
                <h3>Meet the Team</h3>
                <div className="team-member">
                    <img src="https://via.placeholder.com/100" alt="Team Member 2" className="team-img" />
                    <div className="team-info">
                        <h4>Ganesh Pawar</h4>
                        <p>UI/UX Designer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
