import { useState } from "react";
import { Link } from "react-router-dom";
import './index.css';
import Form from "../../components/Form/Form"
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Header from "../../components/Header/Header";
import { maskPhone } from "../../utils/masks"

const SignUp = () => {
    const [phone, setPhone] = useState('')

    const handlePhoneMask = (phone) => {
        const maskedPhone = maskPhone(phone)
        setPhone(maskedPhone)
    }

    return (
        <div className="App">
            <Header />
            <main>
                <Form title="Create Account">
                    <Input value={phone} placeholder="phone" maxLength="14" onChange={e => handlePhoneMask(e.target.value)} />
                    <Input type="email" placeholder="email" />
                    <Input type="password" placeholder="password" maxLength="8" />
                    <Button type="submit" name="Sign Up" />
                </Form>
                <div className="text">Already have an account? <Link className="spanLink" to="/login">Login here</Link></div>
            </main>
        </div>
    );
}

export default SignUp;