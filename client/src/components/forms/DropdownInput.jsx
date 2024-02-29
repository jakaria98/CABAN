const DropdownInput = ({ label, name, options, changeHandler, error }) => {
    return (
        <div className="form-outline mb-4">
            <label htmlFor={name} className="form-label font-monospace">{label}</label>
            <select
                name={name}
                id={name}
                className={
                    error ? 'form-control font-monospace is-invalid' : 'form-control font-monospace'
                }
                onChange={changeHandler}
            >
                <option value="">Select {` ${label}`}</option>
                {options.map((option, i) => (
                    <option key={i} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {error && (
                <div className="invalid-feedback font-monospace" role="alert">
                    {error.msg}
                </div>
            )}
        </div>
    );
};

export default DropdownInput;
