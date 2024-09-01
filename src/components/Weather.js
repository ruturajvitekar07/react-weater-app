import React, { useState, useEffect } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import { useParams } from "react-router-dom";

import "../styles.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Weather() {
    const { city } = useParams();
    const [query, setQuery] = useState(city || "");
    const [weather, setWeather] = useState({
        loading: true,
        data: {},
        error: false
    });

    const toDate = () => {
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];

        const currentDate = new Date();
        const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]
            }`;
        return date;
    };

    useEffect(() => {
        if (city) {
            search();
        }
    }, [city]);

    const search = async () => {
        const apiKey = "b03a640e5ef6980o4da35b006t5f2942";
        const url = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}`;

        try {
            const response = await axios.get(url);
            setWeather({ data: response.data, loading: false, error: false });
        } catch (error) {
            setWeather({ data: {}, loading: false, error: true });
            console.log("error", error);
        }
    };

    return (
        <div className="App">

            {weather.loading && (
                <>
                    <br />
                    <br />
                    <h4>Searching..</h4>
                </>
            )}

            {weather.error && (
                <>
                    <br />
                    <br />
                    <span className="error-message">
                        <span style={{ fontFamily: "font" }}>
                            Sorry city not found, please try again.
                        </span>
                    </span>
                </>
            )}

            {weather && weather.data && weather.data.condition && (
                <Forecast weather={weather} toDate={toDate} />
            )}
        </div>
    );
}

export default Weather;
