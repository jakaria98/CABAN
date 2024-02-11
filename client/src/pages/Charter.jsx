import PageTitle from '../components/PageTitle';
import CommonCard from '../components/cards/CommonCard';
import PAXWeight from '../components/cards/PAXWeight';

const Charter = () => {
    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <PageTitle title="Charter (PCS)" />
            <div className="row row-cols-md-4 d-flex justify-content-between mt-5">
                <PAXWeight />
                <CommonCard text="Cargo Allocated to flight Pieces and Weight" />
                <CommonCard text="Fuel on board" />
                <CommonCard text="Calculate" />
            </div>
        </main>
    );
};

export default Charter;
