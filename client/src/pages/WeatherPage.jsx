import React, { useState, useEffect } from 'react';
import WeatherCard from '../components/WeatherCard';
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
        <main className="ms-sm-auto col-lg-10 px-md-4">
            <PageTitle title="Weather" />
            <div className="row row-cols-1 row-cols-md-3 d-flex justify-content-between mt-5">
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
            </div>
        </main>
    );
};

export default WeatherPage;
