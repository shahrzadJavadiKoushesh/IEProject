import React, { useState } from "react";
import { useParams } from "react-router-dom";

function EducationalAssistantMainPage(props) {
    const [numTerms, setNumTerms] = useState(6);
    const [searchQuery, setSearchQuery] = useState("");
    const { course_id: courseId } = useParams(); // todo: use courseId to get student list

    const see_more = () => {
        console.log("see more");
        setNumTerms(numTerms + 4)
    }

    const addTerm = () => {
        setTerms((prevTerms) => [...prevTerms, "ترم جدید"]);
        console.log("Term added")
    };

    const [terms, setTerms] = useState([
        " ترم پاییز 1402",
        " ترم پاییز 1402",
        " ترم پاییز 1402",
        " ترم پاییز 1402",
        " ترم پاییز 1402",
        " ترم پاییز 1402",
        " ترم پاییز 1402",
        " ترم پاییز 1402",
        " ترم پاییز 1402",
        " ترم پاییز 1402",
        " ترم پاییز 1402",
        " ترم پاییز 1402",
        " ترم پاییز 1402"
    ]);

    return (
        <div className='terms-container'>
            <div className='left'>
                <div className='bar'>
                </div>
                <div className='terms-bar'>
                    <div className="terms-bar-content add" onClick={addTerm}>افزودن ترم +</div>
                    <div className="terms-bar-content">مشاهده لیست ترم‌ها</div>
                </div>
                <div className="terms">
                    {terms.slice(0, numTerms).map((term, index) => (
                        <div className="course-item" key={index}>
                            <span className="cancle-registration">حذف</span>
                            <span className="complete-info"> ویرایش</span>
                            <span>{term}</span>
                        </div>
                    ))}
                </div>
                {numTerms < terms.length && (
                    <button onClick={see_more} className="see-more">
                        مشاهده بیشتر
                    </button>
                )}
            </div>
            {
                <div className='terms-list-right-edu-ass'>
                    <div className="terms-right-content">مشاهده لیست ترم‌ها</div>
                    <div className="terms-right-content">مشاهده لیست دانشجویان</div>
                    <div className="terms-right-content">مشاهده لیست اساتید</div>

                </div>
            }
        </div>
    )
}

export default EducationalAssistantMainPage   