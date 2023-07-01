import React, {useState, useRef} from "react";
import {useNavigate} from "react-router-dom";
import http from "../http";



function ITManagerSeeAllStudents(props) {
    const [numTerms, setNumTerms] = useState(9);

    const see_more = () => {
        setNumTerms(numTerms + 4)
    }

    const [fetched, setFetched] = useState(false);
    const navigate = useNavigate();
    const usertype = props.usertype;


    const addStudent = () => {
        navigate('add')
    };

    function deleteStudent(studentId, setFetched, fetched) {
        http.del(`admin/${usertype}/${studentId}`).then(
            () => setFetched(!fetched)
        ).catch(err => {
            console.log(err)
        })
    }


    const students = useRef([]);
    if (!fetched) {
        http.get(`admin/${usertype}`).then(
            res => {
                return res.data.output
            }
        ).then(
            output => {
                students.current = output
                setFetched(!fetched)
            }
        ).catch(
            e => console.log(e)
        );
    }

    return (
        <div className='terms-container'>
            <div className='left'>
                <div className='bar'>
                </div>
                <div className='terms-bar'>
                    <div className="terms-bar-content add" onClick={addStudent}>افزودن {getPersianUsertype(usertype)} +</div>
                    <div className="terms-bar-content">مشاهده لیست {getPersianUsertype(usertype)}ها</div>
                </div>
                <div className="terms">
                    {students.current.slice(0, numTerms).map((student, index) => (
                        <div className="student-item" key={index}>
                            <span className="delete-student"
                                  onClick={() => deleteStudent(student._id, setFetched, fetched)}>حذف</span>
                            <span>{student.fullname}</span>
                            <div className="img"></div>
                        </div>
                    ))}
                </div>
                {numTerms < students.current.length && (
                    <button onClick={see_more} className="see-more">
                        مشاهده بیشتر
                    </button>
                )}
            </div>
            {
                <div className='terms-list-right-edu-ass'>
                    <a className="terms-right-content" href="/students">مشاهده لیست دانشجویان</a>
                    <a className="terms-right-content" href="/professors">مشاهده لیست اساتید</a>
                    <a className="terms-right-content" href="/managers">مشاهده لیست مدیران</a>
                </div>
            }
        </div>
    )
}
function getPersianUsertype(usertype) {
    switch (usertype) {
        case "student": return "دانشجو";
        case "manager": return "معاون";
        case "professor": return "استاد";
    }
}

export default ITManagerSeeAllStudents;