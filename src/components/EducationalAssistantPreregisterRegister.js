import React, { useState } from "react";
import {Link} from "react-router-dom";
import Signout from "../new-components/Signout";
function EducationalAssistantPreregisterRegister(props) {
    const [selected, setSelected] = React.useState("");

    const [age, setAge] = React.useState('');

    return (
        <div className="terms-container-edu">
            <div className="left-edu">
                <div className="bar">
                    <Signout />
                </div>
                <div className="terms-bar-content">
                    ترم پاییز 1402
                </div>
                <hr className="line"></hr>

                <div className='terms-info'>
                    <Link to={`register`} state={{readOnly: false}}>
                        <div className="terms-info-content-item">
                            <div className='circle'></div>
                            <div className="circle-text"> دروس ثبت نامی </div>
                        </div>
                    </Link>
                    <Link to={`pre_register`} state={{readOnly: false}}>
                        <div className="terms-info-content-item">
                            <div className="square"></div>
                            <div className="circle-text"> دروس پیش‌ثبت‌نامی </div>
                        </div>
                    </Link>
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