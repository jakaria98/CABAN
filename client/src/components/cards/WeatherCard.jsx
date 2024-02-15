import CardHead from './CardHead.jsx';
import { cardStyle } from './cardStyle.js';
import { weatherListStyle } from './weatherListStyle.js';
const WeatherCard = (props) => {
    return (
        <CardHead>
            <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                </p>
                <ul className="list-group list-group-flush " style={{ border: 'none' }}>
                    <li className="list-group-item " style={weatherListStyle}>
                        An item
                    </li>
                    <li className="list-group-item " style={weatherListStyle}>
                        A second item
                    </li>
                    <li className="list-group-item " style={weatherListStyle}>
                        A third item
                    </li>
                </ul>
            </div>
        </CardHead>
    );
};

export default WeatherCard;
