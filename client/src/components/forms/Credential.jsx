const Credential = ({ error }) => {
    return (
        error && (
            <div className="alert alert-danger" role="alert">
                {error}
            </div>
        )
    );
};

export default Credential;
