const Input = ({ name, label, value, onChange, error, type, placeholder }) => {
    return (
        <div className="form-outline mb-4">
            <label className="form-label">{label}</label>
            <input
                type={type}
                className={error ? 'form-control is-invalid' : 'form-control'}
                name={name}
                id={name}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
            />
            {error && (
                <div className="invalid-feedback" role="alert">
                    {error}
                </div>
            )}
        </div>
    );
};

export default Input;
