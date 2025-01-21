const Input = ({
    type = "text",
    placeholder = '',
    value,
    onchange,
    classname = '',
    ...props
}) => {
    return (
        <Input 
        type={type}
        placeholder={placeholder}
        value={value}
        onchange={onchange}
        classname={` ${classname}`}
        {...props}
        />
    )
}
export default Input;