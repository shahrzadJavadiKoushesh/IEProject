import React from "react";
import {Link} from 'react-router-dom';
import SideBar from "../new-components/SideBar";
import TopBar from "../new-components/TopBar";
import Signout from "../new-components/Signout";

function TermsInfoStudentRegistration(props) {
    return (
        <div className='terms-container'>
            <div className='left'>
                <div className='bar'>
                    <Signout/>
                </div>
                <TopBar data={{
                    buttons: [],
                    barTitle: "مشاهده اطلاعات ترم"
                }}/>
                <div className='terms-info'>
                    <Link to={`pre_register`} state={{readOnly: false}}>
                        <div className="terms-info-content-item">
                            <div className='circle'></div>
                            <div className="circle-text">مشاهده لیست دروس ارائه شده برای پیش‌ثبت‌نام</div>
                        </div>
                    </Link>
                    <Link to={`pre_register`} state={{readOnly: true}}>
                        <div className="terms-info-content-item">
                            <div className='circle'></div>
                            <div className="circle-text">مشاهده پیش‌ثبت‌نام‌ها</div>
                        </div>
                    </Link>
                    <Link to={`register`} state={{readOnly: false}}>
                        <div className="terms-info-content-item">
                            <div className="square"></div>
                            <div className="circle-text">مشاهده لیست ارائه شده برای ثبت‌نام</div>
                        </div>
                    </Link>
                    <Link to={`register`} state={{readOnly: true}}>
                        <div className="terms-info-content-item">
                            <div className="square"></div>
                            <div className="circle-text">مشاهده درس‌های ثبت‌نام‌شده</div>
                        </div>
                    </Link>
                </div>
            </div>
            <SideBar data={{
                items: [
                    {
                        text: "مشاهده لیست ترم‌ها",
                        url: "/terms"
                    },
                ]
            }} />
        </div>
    )
}

export default TermsInfoStudentRegistration  