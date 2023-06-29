import React, { useState } from "react";
import { useParams } from "react-router-dom";

function EducationalAssistantPreregisteredCourses(props) {
    const [numTerms, setNumTerms] = useState(6);
    const [searchQuery, setSearchQuery] = useState("");
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
                <div className='edu-bar'>
                    <h2>افزودن درس +</h2>
                    <h2> دروس پیش‌ثبت‌نامی ترم پاییز 1402  </h2>
                </div>
                <div className="edu-upper-bar">
                    <div className="download-excel">دانلود اکسل</div>
                    <span className="most-registered">بیشترین تعداد ثبت نامی</span>
                    <span className="least-registered">کمترین تعداد ثبت نامی</span>

                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="جستجو بر اساس نام درس"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className='terms'>
                    {filteredCourses.slice(0, numTerms).map((course, index) => (
                        <div className="course-item" key={index}>
                            <span className="delete-registration">حذف</span>
                            <span className="complete-info">اطلاعات کامل</span>
                            <span className="num-of-preregisteration">32 پیش‌ثبت‌نام</span>
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

export default EducationalAssistantPreregisteredCourses   