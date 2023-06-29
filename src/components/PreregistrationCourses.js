import React, { useState } from "react";
import { useParams } from "react-router-dom";

function PreRegistrationCourses(props) {
    const [numTerms, setNumTerms] = useState(6);
    const [searchQuery, setSearchQuery] = useState("");
    const { selectedCourse, onClose } = props;
    const { course_id: courseId } = useParams(); // todo: use courseId to get student list

    const see_more = () => {
        console.log("see more");
        setNumTerms(numTerms + 4)
    }

    const courses = [
        'آمار و احتمال مهندسی',
        'آمار و احتمال مهندسی',
        'آمار و احتمال مهندسی',
        'آمار و احتمال مهندسی',
        'آمار و احتمال مهندسی',
        'آمار و احتمال مهندسی',
        'آمار و احتمال مهندسی',
        'آمار و احتمال مهندسی',
        'آمار و احتمال مهندسی',
        'آمار و احتمال مهندسی',
        'آمار و احتمال مهندسی',
    ];

    const professors = [
        'دکتر عبدوس',
        'دکتر صفایی',
        'دکتر عبدوس',
        'دکتر صفایی',
        'دکتر عبدوس',
        'دکتر صفایی',
        'دکتر عبدوس',
        'دکتر صفایی',
        'دکتر عبدوس',
        'دکتر صفایی',
    ]

    const filteredCourses = courses.filter((student) =>
        student.includes(searchQuery)
    );

    return (
        <div className='terms-container'>
            <div className='left'>
                <div className='bar'>
                    <h2>مشاهده لیست دروس ارائه شده برای پیش‌ثبت‌نام</h2>
                </div>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="جستجو بر اساس نام درس"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className='terms'>
                    {filteredCourses.slice(0, numTerms).map((course, index) => (
                        <div className="course-item" key={index}>
                            <span className="cancle-registration">لغو ثبت‌نام</span>
                            <span className="complete-info">اطلاعات کامل</span>
                            <span>{course}</span>
                            <span>{professors[index]}</span>
                        </div>
                    ))}
                </div>
                {numTerms < filteredCourses.length && (
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

export default PreRegistrationCourses   