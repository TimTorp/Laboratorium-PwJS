import React from 'react';

function WeatherCard({ data, mode }) {
    const days = data?.days;
    if (!days || days.length < 2) return <p>Brak danych pogodowych.</p>;

    const day = mode === 'today' ? days[0] : mode === 'tomorrow' ? days[1] : null;

    const renderSingleDay = (dayData) => (
        <div className="day-card">
            <h3>{dayData.datetime}</h3>
            <p><strong>Temperatura:</strong> {dayData.temp} °C</p>
            <p><strong>Wilgotność:</strong> {dayData.humidity}%</p>
            <p><strong>Wiatr:</strong> {dayData.windspeed} km/h</p>
            <p><strong>Warunki:</strong> {dayData.conditions}</p>
            {dayData.uvindex !== undefined && <p><strong>UV:</strong> {dayData.uvindex}</p>}
            {dayData.pressure !== undefined && <p><strong>Ciśnienie:</strong> {dayData.pressure} hPa</p>}
            {dayData.sunrise && <p><strong>Wschód słońca:</strong> {dayData.sunrise}</p>}
            {dayData.sunset && <p><strong>Zachód słońca:</strong> {dayData.sunset}</p>}
        </div>
    );

    const renderWeek = () => (
        <div className="forecast-grid">
            {days.slice(0, 7).map((day, i) => (
                <div className="day-card" key={i}>
                    <p><strong>{day.datetime}</strong></p>
                    <p>Temp. {day.temp}°C</p>
                    <p>Wilgotn. {day.humidity}%</p>
                    <p>Warunki {day.conditions}</p>
                </div>
            ))}
        </div>
    );

    return (
        <div className="card">
            <h2>{data.resolvedAddress}</h2>
            {mode === 'today' && renderSingleDay(days[0])}
            {mode === 'tomorrow' && renderSingleDay(days[1])}
            {mode === 'week' && renderWeek()}
        </div>
    );
}

export default WeatherCard;
