import PageTitle from '../components/PageTitle';
import CommonCard from '../components/cards/CommonCard';
import PAXWeight from '../components/cards/PAXWeight';

const Vale = () => {
    return (
        <main className="ms-sm-auto col-lg-10 px-md-4">
            <PageTitle title="Vale (logipal)" />
            <div className="row row-cols-md-4 justify-content-between">
                <PAXWeight />
                <CommonCard text="Cargo Allocated to flight Pieces and Weight" />
                <CommonCard text="Fuel on board" />
                <CommonCard text="Calculate" />
            </div>
        </main>
    );
};

export default Vale;
