import PageTitle from '../components/PageTitle';
import CargoCard from '../components/cards/CargoCard';

const Cargo = () => {
    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <PageTitle title="Cargo" />
            <div className="row row-cols-md-4 justify-content-between mt-5">
                <CargoCard name="General" weight="1000" />
                <CargoCard name="Vale" weight="2000" />
                <CargoCard name="Express" weight="3000" />
                <CargoCard name="Priority" weight="4000" />
                <CargoCard name="Medication" weight="5000" />
                <CargoCard name="Dangerous Goods" weight="6000" />
                <CargoCard name="Animals" weight="7000" />
                <CargoCard name="Total" weight="8000" />
            </div>
        </main>
    );
};

export default Cargo;
