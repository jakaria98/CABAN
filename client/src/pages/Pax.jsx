import PageTitle from '../components/PageTitle';
import CommonCard from '../components/cards/CommonCard';
import PAXWeight from '../components/cards/PAXWeight';

const Pax = () => {
    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <PageTitle title="PAX" />
            <div className="row row-cols-md-3 justify-content-between">
                <PAXWeight />
                <CommonCard text="Special Services" />
                <CommonCard text="Seat Map Goes Here" />
            </div>
        </main>
    );
};
export default Pax;
