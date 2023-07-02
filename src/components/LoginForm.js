import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom';
import Form from "../new-components/Form";
import {Input} from "@material-ui/core";

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        const requestData = {}
        for (const element of e.target.elements) {
            if ("name" in element) {
                requestData[element.name] = element.value
            }
        }
        Login(requestData);
    }
    return (

        <div className={"login-wrapper"}>

            <Form data={{
                buttonData: {text: "ورود"},
                fields: [{
                    title: "نام کاربری",
                    type: "text",
                    name: "email",
                    component: Input,
                }, {
                    title: "رمز عبور",
                    type: "password",
                    name: "password",
                    component: Input,
                }],
                submitHandler: submitHandler,
            }}/>
            {error !== "" ? (<div className='error'>{error}</div>) : ""}
        </div>

    )
}

export default LoginForm