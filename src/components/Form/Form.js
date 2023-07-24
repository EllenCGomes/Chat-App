import "./index.css"
import Title from "../Title/Title";

const Form = ({ title, children, onSubmit }) => {


    return (
        <div className="formContainer">
            <Title name={title} />
            <form className="form" onSubmit={onSubmit}>
                {children}
            </form>
        </div>
    )
}

export default Form