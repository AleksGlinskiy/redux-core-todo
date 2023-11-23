export default function Input (props) {
    const { type, value, placeholder } = props;
    return <input type={type} value={value} placeholder={placeholder} />;
}