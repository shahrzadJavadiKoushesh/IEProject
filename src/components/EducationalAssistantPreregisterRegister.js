import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
function EducationalAssistantPreregisterRegister(props) {
    const [selected, setSelected] = React.useState("");

    const [terms, setTerms] = useState([
        " ترم پاییز 1402",
        " ترم پاییز 1402",
        " ترم پاییز 1402",
        " ترم پاییز 1402",
        " ترم پاییز 1402",
        " ترم پاییز 1402",
        " ترم پاییز 1402",
        " ترم پاییز 1402",
        " ترم پاییز 1402",
        " ترم پاییز 1402",
        " ترم پاییز 1402",
        " ترم پاییز 1402",
        " ترم پاییز 1402",
    ]);

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return (
        <div className="terms-container-edu">
            <div className="left-edu">
                <div className="bar"></div>
                <div className="terms-bar-content">
                    ترم پاییز 1402
                </div>
                <hr className="line"></hr>

                <div className='terms-info'>
                    <div className="terms-info-content-item">
                        <div className='circle'></div>
                        <div className="circle-text"> دروس ثبت نامی </div>
                    </div>
                    <div className="terms-info-content-item">
                        <div className="square"></div>
                        <div className="circle-text"> دروس پیش‌ثبت‌نامی </div>
                    </div>
                    
                </div>

            </div>
            {
                <div className="terms-list-right-edu-ass">
                    <div className="terms-right-content">مشاهده لیست ترم‌ها</div>
                </div>
            }
        </div>
    );
}

export default EducationalAssistantPreregisterRegister;   