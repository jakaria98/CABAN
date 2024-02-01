const PageTitle = ({ title }) => {
    return (
        <>
            <br />
            <br />
            <div className="card ">
                <div className="card-body">
                    <h1 className="card-title text-center font-monospace text-body-secondary fw-bold">
                        {title}
                    </h1>
                </div>
            </div>
        </>
    );
};

export default PageTitle;
