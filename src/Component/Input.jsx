const Input = ({
    type : "text",
    name,
    value,
    onChange,
    placheholder,
    label,
    error,
    classname = '',
    ...props
}) => {
    return (
        <div className={`${classname}`}>
            {label && (
                <label htmlFor={name}
                className="">
                    {label}
                </label>
            )}
        <Input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placheholder={placheholder}
        classname={` ${error ? "" : ""}`}
        {...props}
        />
        {error && <span>{error}</span>}
        </div>
    )
}