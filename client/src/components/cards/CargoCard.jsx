const CargoCard = ({ name, weight }) => {
    return (
        <div className="row mt-5">
            <div className="col">
                <div
                    className="card bg-info-subtle m-3"
                    style={{
                        minWidth: '11rem',
                        maxWidth: '13rem',
                        height: '9rem',
                    }}
                >
                    <div className="card-body">
                        <h3 className="card-title text-center font-monospace fw-bold">{name}</h3>
                        <p className="card-text text-center font-monospace fw-bold">
                            Weight: {weight}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CargoCard;
