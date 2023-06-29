import React, {useState} from "react";
import CourseInfo from "./CourseInfo";
import {Link, useParams} from 'react-router-dom';

function TermsInfo(props) {
    const [numTerms, setNumTerms] = useState(6);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("");

    const {selectedTerm, onClose} = props;
    const {term_id: termId} = useParams(); // TODO: use termId to fetch courses from server

    const see_more = () => {
        console.log("see more");
        setNumTerms(numTerms + 4)
    }

    const handleCourseClick = (courseName) => {
        console.log("Clicked on course:", courseName);
        setSelectedCourse(courseName);
    }

    const courses = [
        {id: 1, name: "مبانی برنامه‌نویسی"},
        {id: 1, name: "برنامه‌نویسی پیشرفته"},
        {id: 1, name: "ساختمان داده"},
        {id: 1, name: "نظریه زبان‌ها و  ماشین‌ها"},
        {id: 1, name: "مدارهای الکتریکی"},
        {id: 1, name: " مدار منطقی"},
        {id: 1, name: "آمار و احتمال"},
        {id: 1, name: "معماری کامپیوتر"},
        {id: 1, name: "شبکه‌های کامپیوتری"},
        {id: 1, name: "سیستم عامل"},
        {id: 1, name: "گرافیک کامپیوتری"},
        {id: 1, name: "هوش مصنوعی"},
    ];

    const filteredCourses = courses.filter((course) =>
        course.name.includes(searchQuery)
    );

    if (selectedCourse) {
        return <CourseInfo selectedTerm={selectedTerm} selectedCourse={selectedCourse} onClose={onClose}/>;
    }

    return (
        <div className='terms-container'>
            <div className='left'>
                <div className='term-bar'>
                    <h2>مشاهده اطلاعات ترم</h2>
                    <h2>دروس {selectedTerm}</h2>
                </div>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="جستجوی دوره‌ها"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className='terms'>
                    {filteredCourses.slice(0, numTerms).map((course) => (
                        <Link to={`/courses/${course.id}/registrations`}>
                            <div className="term-item"> {course.name} </div>
                        </Link>
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

export default TermsInfo