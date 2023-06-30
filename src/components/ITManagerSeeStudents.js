import React, { useState } from "react";
import { useParams } from "react-router-dom";

function ITManagerSeeAllStudents(props) {
    const [numTerms, setNumTerms] = useState(9);

    const see_more = () => {
        console.log("see more");
        setNumTerms(numTerms + 4)
    }

    const addStudent = () => {
        setStudents((prevStu) => [...prevStu, "دانشجوی جدید"]);
        console.log("student added")
    };

    const deleteStudent = (index) => {
        const newStudents = [...students];
        newStudents.splice(index, 1);
        setStudents(newStudents);
        console.log("student deleted");
    }

    const [students, setStudents] = useState([
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

    return (
        <div className='terms-container'>
            <div className='left'>
                <div className='bar'>
                </div>
                <div className='terms-bar'>
                    <div className="terms-bar-content add" onClick={addStudent}>افزودن دانشجو +</div>
                    <div className="terms-bar-content">مشاهده لیست دانشجویان</div>
                </div>
                <div className="terms">
                    {students.slice(0, numTerms).map((student, index) => (
                        <div className="student-item" key={index}>
                            <span className="delete-student" onClick={() => deleteStudent(index)}>حذف</span>
                            <span>{student}</span>
                            <div className="img"></div>
                        </div>
                    ))}
                </div>
                {numTerms < students.length && (
                    <button onClick={see_more} className="see-more">
                        مشاهده بیشتر
                    </button>
                )}
            </div>
            {
                <div className='terms-list-right-edu-ass'>
                    <div className="terms-right-content">مشاهده لیست دانشجویان</div>
                    <div className="terms-right-content">مشاهده لیست اساتید</div>
                    <div className="terms-right-content">مشاهده لیست مدیران</div>

                </div>
            }
        </div>
    )
}

export default ITManagerSeeAllStudents;