import "./index.css";

const Button = ({ name, type, onClick }) => <button className="button" type={type} onClick={onClick}>{name}</button>

export default Button