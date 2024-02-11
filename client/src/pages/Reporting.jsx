import PageTitle from '../components/PageTitle';
import CommonCard from '../components/cards/CommonCard';

const Reporting = () => {
    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <PageTitle title="Reporting" />
            <div className="row row-cols-md-3 d-flex align-items-center justify-content-center mt-5 text-center">
                <CommonCard text="Chart fuel Optimization" />
                <CommonCard text="Chart OTP" />
                <CommonCard text="Chart Cargo Optimization" />
            </div>
        </main>
    );
};

export default Reporting;
