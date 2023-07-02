import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Signout from "../new-components/Signout";

function ITManagerSeeAllInstructors(props) {
    const [numTerms, setNumTerms] = useState(9);

    const see_more = () => {
        console.log("see more");
        setNumTerms(numTerms + 4)
    }

    const [searchQuery, setSearchQuery] = useState("");


    const addInstructor = () => {
        setInstructors((prevIns) => [...prevIns, "استاد جدید"]);
        console.log("instructor added")
    };

    const deleteInstructor = (index) => {
        const newInstructors = [...instructors];
        newInstructors.splice(index, 1);
        setInstructors(newInstructors);
        console.log("instructor deleted");
    }

    const [instructors, setInstructors] = useState([
        'حسن امیدی',
        'حسن شریفی',
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
    ]);

    const filteredCourses = instructors.filter((instructor) =>
        instructor.includes(searchQuery)
    );

    return (
        <div className='terms-container'>
            <div className='left'>
                <div className='bar'>
                    <Signout/>
                </div>
                <div className='terms-bar'>
                    <div className="terms-bar-content add" onClick={addInstructor}>افزودن استاد +</div>
                    <div className="terms-bar-content">مشاهده لیست اساتید</div>
                </div>
                <div className="IT-upper-bar">
                    <div className="add-excel">آپلود اکسل</div>
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="جستجو بر اساس نام استاد"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
                <div className="terms">
                    {filteredCourses.slice(0, numTerms).map((instructor, index) => (
                        <div className="student-item" key={index}>
                            <span className="delete-student" onClick={() => deleteInstructor(index)}>حذف</span>
                            <span>{instructor}</span>
                            <div className="img"></div>
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
                <div className='terms-list-right-edu-ass'>
                    <div className="terms-right-content">مشاهده لیست دانشجویان</div>
                    <div className="terms-right-content">مشاهده لیست اساتید</div>           
                </div>
            }
        </div>
    )
}

export default ITManagerSeeAllInstructors;