import express from 'express';
import cors from 'cors';
import { getWeather } from './weatherApi.js';

const app = express();
app.use(cors());

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    if (!city) return res.status(400).json({ error: 'Brak miasta' });

    try {
        const data = await getWeather(city);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Błąd pobierania danych' });
    }
});
app.get('/', (req, res) => {
    res.send('<h1>API Pogodowe działa</h1><p>Użyj /weather?city=NazwaMiasta</p>');
});

app.listen(5000, () => {
    console.log('Serwer działa na http://localhost:5000');
});
