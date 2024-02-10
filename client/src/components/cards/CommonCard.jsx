import { cardStyle } from './cardStyle';

const CommonCard = (props) => {
    return (
        <div className="row">
            <div className="col">
                <div className="card bg-info-subtle m-3" style={cardStyle}>
                    <div className="card-body d-flex align-items-center justify-content-center">
                        <p className="card-text">{props.text}: AMOUNT</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommonCard;
