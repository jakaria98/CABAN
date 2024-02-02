const Input = ({ name, label, value, onChange, error, type, placeholder }) => {
    return (
        <div className="form-outline mb-4">
            <label className="form-label font-monospace">{label}</label>
            <input
                type={type}
                className={error ? 'form-control font-monospace is-invalid' : 'form-control font-monospace'}
                name={name}
                id={name}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
            />
            {error && (
                <div className="invalid-feedback font-monospace" role="alert">
                    {error}
                </div>
            )}
        </div>
    );
};

export default Input;
