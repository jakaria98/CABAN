import CardHead from './CardHead';
import { cardStyle } from './cardStyle';
import { weatherListStyle } from './weatherListStyle';

const PAXWeight = (props) => {
    return (
        <CardHead height={props.cardHeight ? props.cardHeight : '20rem'} bgColor="#ee773c">
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <p className="card-text fw-bold">PAX Weight</p>
                <ul className="list-group list-group-flush " style={{ border: 'none' }}>
                    <li className="list-group-item" style={weatherListStyle}>
                        Number of Male:
                    </li>
                    <li className="list-group-item" style={weatherListStyle}>
                        Number of Female:
                    </li>
                    <li className="list-group-item" style={weatherListStyle}>
                        Number of Child:
                    </li>
                    <li className="list-group-item" style={weatherListStyle}>
                        Number of Infant:
                    </li>
                </ul>
            </div>
        </CardHead>
    );
};

export default PAXWeight;
