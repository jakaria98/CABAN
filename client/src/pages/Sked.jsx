import PageTitle from '../components/PageTitle';
import CardHead from '../components/cards/CardHead';
import CommonCard from '../components/cards/CommonCard';
import PAXWeight from '../components/cards/PAXWeight';

const Sked = () => {
    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <PageTitle title="Sked W&B" />
            <div className="row row-cols-md-4 d-flex align-items-center justify-content-center">
                <PAXWeight cardHeight="25rem" />

                <CardHead height="33rem" bgColor="#f4f4f4" border="none">
                    <CardHead height="10rem" bgColor="#ee773c">
                        <div className="card-body d-flex align-items-center justify-content-center">
                            <p className="card-text">Cargo Allocated to flight Pieces and Weight</p>
                        </div>
                    </CardHead>
                    <CardHead height="10rem" bgColor="#ee773c">
                        <div className="card-body d-flex align-items-center justify-content-center">
                            <p className="card-text">Baggage Pieces and Weight</p>
                        </div>
                    </CardHead>
                </CardHead>
                <CardHead height="33rem" bgColor="#f4f4f4" border="none">
                    <CardHead height="10rem" bgColor="#ee773c">
                        <div className="card-body d-flex align-items-center justify-content-center">
                            <p className="card-text">Fuel on board</p>
                        </div>
                    </CardHead>
                    <CardHead height="10rem" bgColor="#ee773c">
                        <div className="card-body d-flex align-items-center justify-content-center">
                            <p className="card-text">MTOW ETC</p>
                        </div>
                    </CardHead>
                </CardHead>
                <CommonCard text="Calculate" cardHeight="25rem" />
            </div>
        </main>
    );
};
export default Sked;
