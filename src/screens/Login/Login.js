import './index.css';
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import Form from "../../components/Form/Form"
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Header from "../../components/Header/Header";

const Login = (props) => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    // const onSubmit = (e) => {
    //     e.preventDefault()
    //     props.onLogin(user, password)
    //     navigate("/")
    // }

    const onSubmit = (e) => {
        e.preventDefault()
        window.localStorage.setItem("user", user)
        navigate("/")
    }

    return (
        <div className="App">
            <Header />
            <main>
                <Form title="Login" onSubmit={onSubmit}>
                    <Input type="email" name="email" placeholder="email" value={user} onChange={e => setUser(e.target.value)} />
                    <Input type="password" name="password" placeholder="password" maxLength="8" value={password} onChange={e => setPassword(e.target.value)} />
                    <Button type="submit" name="Login" />
                </Form>
                <div className="text">Don't have an account? <Link className="spanLink" to="/signup">Sign up here</Link></div>
            </main>
        </div>
    );
}

export default Login;