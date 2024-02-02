const PageTitle = ({ title }) => {
    return (
        <>
            <br />
            <br />
            <div className="card " style={{ backgroundColor: '#f4f4f4', border: 'none' }}>
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
