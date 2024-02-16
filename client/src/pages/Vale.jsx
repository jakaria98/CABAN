import PageTitle from '../components/PageTitle';
import CommonCard from '../components/cards/CommonCard';
import PAXWeight from '../components/cards/PAXWeight';

const Vale = () => {
    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <PageTitle title="Vale (logipal)" />
            <div className="row row-cols-md-2 row-cols-lg-3 row-cols-xl-4 mb-3 d-flex align-items-center justify-content-center">
                <PAXWeight />
                <CommonCard text="Cargo Allocated to flight Pieces and Weight" />
                <CommonCard text="Fuel on board" />
                <CommonCard text="Calculate" />
            </div>
        </main>
    );
};

export default Vale;
