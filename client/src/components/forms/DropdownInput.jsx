const DropdownInput = ({ label, name, options, onChange, error }) => {
    return (
        <div className="form-outline mb-4">
            <label className="form-label">{label}</label>
            <select
                name={name}
                id={name}
                className={error ? 'form-control is-invalid' : 'form-control'}
                onChange={onChange}
            >
                <option value="">Select {` ${label}`}</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {error && (
                <div className="invalid-feedback" role="alert">
                    {error}
                </div>
            )}
        </div>
    );
};

export default DropdownInput;
