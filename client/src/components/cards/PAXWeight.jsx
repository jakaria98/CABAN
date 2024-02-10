import { cardStyle } from './cardStyle';

const PAXWeight = (props) => {
    return (
        <div className="row">
            <div className="col">
                <div className="card bg-info-subtle m-3" style={cardStyle}>
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
            </div>
        </div>
    );
};

export default PAXWeight;
