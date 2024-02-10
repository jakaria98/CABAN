import CardHead from './CardHead';
import { cardStyle } from './cardStyle';

const PAXWeight = (props) => {
    return (
        <CardHead height="20rem">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="card-body">
                    <p className="card-text fw-bold">PAX Weight</p>
                </div>
                <ul className="list-group list-group-flush ">
                    <li className="list-group-item bg-info-subtle">Number of Male:</li>
                    <li className="list-group-item bg-info-subtle">Number of Female:</li>
                    <li className="list-group-item bg-info-subtle">Number of Child:</li>
                    <li className="list-group-item bg-info-subtle">Number of Infant:</li>
                </ul>
            </div>
        </CardHead>
    );
};

export default PAXWeight;
