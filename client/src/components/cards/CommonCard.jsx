import CardHead from './CardHead';
import { cardStyle } from './cardStyle';

const CommonCard = (props) => {
    return (
        <CardHead height="20rem">
            <div className="card-body d-flex align-items-center justify-content-center">
                <p className="card-text">{props.text}: AMOUNT</p>
            </div>
        </CardHead>
    );
};

export default CommonCard;
