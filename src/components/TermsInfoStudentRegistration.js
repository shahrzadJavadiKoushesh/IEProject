import React, { useState } from "react";
import CourseInfo from "./CourseInfo";
import { Link, useParams } from 'react-router-dom';

function TermsInfoStudentRegistration(props) {
    
    
    return (
        <div className='terms-container'>
            <div className='left'>
                <div className='term-bar'>
                    <h2>مشاهده اطلاعات ترم</h2>
                    <h2>ترم پاییز 1402</h2>
                </div>
                <div className='terms-info'>
                    <div className="terms-info-content-item">
                        <div className='circle'></div>
                        <div className="circle-text">مشاهده لیست دروس ارائه شده برای پیش‌ثبت‌نام</div>
                    </div>
                    <div className="terms-info-content-item">
                        <div className='circle'></div>
                        <div className="circle-text">مشاهده پیش‌ثبت‌نام‌ها</div>
                    </div>
                    <div className="terms-info-content-item">
                        <div className="square"></div>
                        <div className="circle-text">مشاهده لیست ارائه شده برای ثبت‌نام</div>
                    </div>
                    <div className="terms-info-content-item"> 
                    <div className="square"></div>
                        <div className="circle-text">مشاهده درس‌های ثبت‌نام‌شده</div>
                    </div>
                </div>
            </div>
            {
                <div className='terms-list-right'>
                    مشاهده لیست ترم‌ها
                </div>
            }
        </div>
    )
}

export default TermsInfoStudentRegistration  