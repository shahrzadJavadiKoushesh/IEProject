import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Signout from "../new-components/Signout";

function EducationalAssistantPreregisteredStudents(props) {
    const [numTerms, setNumTerms] = useState(9);
    const [searchQuery, setSearchQuery] = useState("");
    const { course_id: courseId } = useParams(); // todo: use courseId to get student list

    const see_more = () => {
        console.log("see more");
        setNumTerms(numTerms + 4)
    }

    const students = [
        'حسن امیدی',
        'حسین شریفی',
        'محمد رضا کاظمی',
        'سجاد قاسمی',
        'فاطمه محمودی',
        'رضا عباسی',
        'علی رحمانی',
        'نیما شاهدی',
        'مهدی عسگری',
        'محمد نوری',
        'امید شجاع',
        'سید محمد حسینی',
        'سعید امیری',
        'علی محمدی',
    ]

    const filteredStudents = students.filter((student) =>
        student.includes(searchQuery)
    );


    return (
        <div className='terms-container'>
            <div className='left'>
                <div className='bar'>
                    <h2>لیست پیش ثبت نام های درس آمار و احتمال مهندسی دکتر عبدوس</h2>
                    <Signout/>
                </div>

                <div className="edu-upper-bar">
                    <div className="download-excel">دانلود اکسل</div>
                    <span className="most-registered">جدیدترین</span>
                    <span className="least-registered">قدیمی‌ترین</span>

                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="جستجو بر اساس نام دانشجو"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className='terms'>
        
                    {filteredStudents.slice(0, numTerms).map((student, index) => (
                        <div className="student-item" key={index}>
                            <span>{student}</span>
                            <div className="img"></div>
                        </div>
                    ))}

                </div>
                {numTerms < filteredStudents.length && (
                    <button onClick={see_more} className="see-more">
                        مشاهده بیشتر
                    </button>
                )}
            </div>
            {
                <div className='terms-list-right'>
                    مشاهده لیست ترم‌ها
                </div>
            }
        </div>
    )
}

export default EducationalAssistantPreregisteredStudents;