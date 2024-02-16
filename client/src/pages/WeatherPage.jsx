import React, { useState, useEffect } from 'react';
import WeatherCard from '../components/cards/flightInfoCards/WeatherCard';
import PageTitle from '../components/PageTitle';
const WeatherPage = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // const getWeather = async () => {
    //     try {
    //     setLoading(true);
    //     const { data } = await axios.get(
    //         "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=API_KEY"
    //     );
    //     setWeather(data);
    //     } catch (err) {
    //     setError(err.message);
    //     } finally {
    //     setLoading(false);
    //     }
    // };

    // useEffect(() => {
    //     getWeather();
    // }, []);

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>{error}</div>;
    // if (!weather) return null;

    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <PageTitle title="Weather" />
            <div className="row row-cols-md-2 row-cols-lg-3 row-cols-xl-3 mb-3 d-flex align-items-center justify-content-center">
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
            </div>
        </main>
    );
};

export default WeatherPage;
