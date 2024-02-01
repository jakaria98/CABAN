const WeatherCard = (props) => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <div
                        className="card bg-info-subtle m-3"
                        style={{ minWidth: '13rem', maxWidth: '16rem' }}
                    >
                        <div className="card-body">
                            <h5 className="card-title text-center">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </p>
                        </div>
                        <ul className="list-group list-group-flush ">
                            <li className="list-group-item bg-info-subtle">An item</li>
                            <li className="list-group-item bg-info-subtle">A second item</li>
                            <li className="list-group-item bg-info-subtle">A third item</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WeatherCard;
