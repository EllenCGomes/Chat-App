import React from "react"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import "./index.css"

const eyeVisible = <FontAwesomeIcon icon={faEye} className="eye" />
const eyeNotVisible = <FontAwesomeIcon icon={faEyeSlash} className="eye" />

const Input = (props) => {
    const [visible, setVisible] = useState(false)
    const [passwordType, setPasswordType] = useState("password")

    const handleShowPassword = () => {
        setVisible(!visible)
        passwordType === "password" ? setPasswordType("text") : setPasswordType("password")
    }

    return (
        <>
            {props.type === "password" ?
                <div className="input-icons">
                    <i className="icon" onClick={handleShowPassword} onKeyDown={handleShowPassword}>{visible ? eyeNotVisible : eyeVisible}</i>
                    <input className="input-general" type={passwordType} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
                </div>
                : <input className="input-general" value={props.value} maxLength={props.maxLength} onChange={props.onChange} placeholder={props.placeholder} type={props.type} style={{ border: props.border, backgroundColor: props.backgroundColor, borderRadius: props.borderRadius, margin: props.margin, width: props.width, color: props.color }} />}
        </>
    )
}

export default Input