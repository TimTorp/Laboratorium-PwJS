import React, { useState } from 'react';
import WeatherCard from './WeatherCard';

function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [mode, setMode] = useState('today');

    const fetchWeather = async () => {
        if (!city) return;
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:5000/weather?city=${encodeURIComponent(city)}`);
            const data = await res.json();
            setWeather(data);
            setError(null);
        } catch (err) {
            console.error(err);
            setWeather(null);
            setError('Nie udało się pobrać danych.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="search-box">
                <h1>Prognoza Pogody</h1>
                <input
                    type="text"
                    placeholder="Wpisz miasto..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && fetchWeather()}
                />
                <button onClick={fetchWeather}>Szukaj</button>
                {error && <p className="error">{error}</p>}
            </div>

            {weather && (
                <div className="result-container">
                    {loading && <p>Ładowanie danych...</p>}
                    <div className="mode-switch">
                        <button onClick={() => setMode('today')}>Dziś</button>
                        <button onClick={() => setMode('tomorrow')}>Jutro</button>
                        <button onClick={() => setMode('week')}>7 dni</button>
                    </div>
                    <WeatherCard data={weather} mode={mode} />
                </div>
            )}
        </>
    );

}

export default App;
