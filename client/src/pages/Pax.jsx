import PageTitle from '../components/PageTitle';
import CommonCard from '../components/cards/CommonCard';
import PAXWeight from '../components/cards/PAXWeight';

const Pax = () => {
    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <PageTitle title="PAX" />
            <div className="row row-cols-md-2 row-cols-lg-3 row-cols-xl-3 mb-3 d-flex align-items-center justify-content-center">
                <PAXWeight />
                <CommonCard text="Special Services" />
                <CommonCard text="Seat Map Goes Here" />
            </div>
        </main>
    );
};
export default Pax;
