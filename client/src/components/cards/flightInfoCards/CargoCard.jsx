import CardHead from './CardHead';
import { cardStyle } from './cardStyle';

const CargoCard = ({ name, weight }) => {
    return (
        <CardHead>
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <h3 className="card-title text-center font-monospace fw-bold">{name}</h3>
                <p className="card-text text-center font-monospace fw-bold">Weight: {weight}</p>
            </div>
        </CardHead>
    );
};

export default CargoCard;
