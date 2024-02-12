const airportDiscovery = require('@airport-discovery/metars-tafs');
// const aviationweather = require('aviationweather');
// const createError = require('http-errors');

// // const getMetar = async (req, res, next) => {
// //  //   const { icao } = req.params;
// //     try {
// //         const metars = await airportDiscovery.metars('CYYT'); // ICAO for Malpensa Airport (MXP)
// //         console.log(metars);
// //         res.status(200).json(metars);
// //     } catch {
// //         console.log('error');
// //         createError(404, 'Airport not found');
// //     }
// // };

// // const getTaf = async (req, res) => {
// //     const { icao } = req.params;
// //     try {
// //         const taf = await airportDiscovery.tafs(icao);
// //         res.status(200).json(taf);
// //     } catch {
// //         createError(404, 'Airport not found');
// //     }
// // };

// // module.exports = { getMetar, getTaf

// const getMetar = (req, res, next) => {
//     // try {
//     //     const metar = await aviationweather.fetchMetar('CYYT');
//     //     res.status(200).json(metar);
//     // } catch {
//     //     console.log('error');
//     //     createError(404, 'Airport not found');
//     // }
//     aviationweather
//         .fetchMetar('KLAX')
//         .then((metar) => {
//             console.log('METAR:', metar);
//         })
//         .catch((error) => {
//             console.error('Error fetching METAR:', error);
//         });
// };

// const getTaf = async (req, res, next) => {
//     const { icao } = req.params;
//     try {
//         const taf = await aviationweather.fetchTaf(icao);
//         res.status(200).json(taf);
//     } catch {
//         createError(404, 'Airport not found');
//     }
// };

// module.exports = { getMetar, getTaf };

const axios = require('axios');
const createError = require('http-errors');

const airportICAO = 'CYYT';

// const fetchWeatherData = async (req, res, next) => {
//     try {
//         console.log('before fetchWeatherData');
//         // Fetch METAR and TAF data from Aviation Weather Center API
//         const response = await axios.get(
//             `https://aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=json&stationString=${airportICAO}&hoursBeforeNow=0`
//         );
//         console.log('after fetchWeatherData');
//         const data = response.data;
//         console.log(data);
//         // Use dynamic import for metar-taf-parser
//         const parserModule = await import('metar-taf-parser');
//         const parser = parserModule.default;

//         // Parse METAR and TAF data
//         const metarData = parser.parseMetar(data.features[0].properties.raw_text);
//         const tafData = parser.parseTaf(data.features[0].properties.raw_text);
//         res.status(200).json({ metar: metarData, taf: tafData });
//     } catch (error) {
//         console.log('Error:');
//         createError(404, 'Airport not found');
//     }
// };
const fetchWeatherData = async () => {
    const airportICAO = 'CYYT'; // ICAO code for St Johns Intl, NL, CA

    try {
        // Fetch METAR data
        //const airportDiscovery = require('@airport-discovery/metars-tafs');
        const metars = await airportDiscovery.metars('MXP');
        console.log(metars);
    } catch (error) {
        console.log('Error fetching weather data:');
    }
};
module.exports = { fetchWeatherData };
