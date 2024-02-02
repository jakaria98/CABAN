const Credential = ({ error }) => {
    return (
        error && (
            <div className="alert alert-danger font-monospace" role="alert">
                {error}
            </div>
        )
    );
};

export default Credential;
