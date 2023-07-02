import React, {useState, useRef} from "react";
import http from "../http";
import {useNavigate, Link} from 'react-router-dom';
import SideBar from "../new-components/SideBar";
import Signout from "../new-components/Signout";


function deleteTerm(termId, setFetched, fetched) {
    http.del(`terms/${termId}`).then(
        () => setFetched(!fetched)
    ).catch(err => {
        console.log(err)
    })
}

function EducationalAssistantMainPage(props) {
    const [numTerms, setNumTerms] = useState(6);

    const [fetched, setFetched] = useState(false);
    const terms = useRef([]);
    const navigate = useNavigate()

    if (!fetched) {
        http.get('terms').then(
            res => {
                return res.data.output
            }
        ).then(
            output => {
                terms.current = output
                setFetched(!fetched)
            }
        ).catch(
            e => console.log(e)
        );
    }

    const see_more = () => {
        console.log("see more");
        setNumTerms(numTerms + 4)
    }

    const addTerm = () => {
        navigate('/terms/add')
    };

    return (
        <div className='terms-container'>
            <div className='left'>
                <div className='bar'>
                    <Signout/>
                </div>
                <div className='terms-bar'>
                    <div className="terms-bar-content add" onClick={addTerm}>افزودن ترم +</div>
                    <div className="terms-bar-content">مشاهده لیست ترم‌ها</div>
                </div>
                <div className="terms">
                    {terms.current.slice(0, numTerms).map((term, index) => (
                        <Link to={`/terms/terms_info/${term._id}`}>
                            <div className="course-item" key={index}>
                                <span className="cancle-registration"
                                      onClick={() => deleteTerm(term._id, setFetched, fetched)}>حذف</span>
                                <span className="complete-info"> ویرایش</span>
                                <span>{term.name}</span>
                            </div>
                        </Link>
                    ))}
                </div>
                {numTerms < terms.current.length && (
                    <button onClick={see_more} className="see-more">
                        مشاهده بیشتر
                    </button>
                )}
            </div>
            {/*{*/}
            {/*    <div className='terms-list-right-edu-ass'>*/}
            {/*        <div className="terms-right-content">مشاهده لیست ترم‌ها</div>*/}
            {/*        <div className="terms-right-content">مشاهده لیست دانشجویان</div>*/}
            {/*        <div className="terms-right-content">مشاهده لیست اساتید</div>*/}

            {/*    </div>*/}
            {/*}*/}
            <SideBar data={{
                items: [
                    {
                        text: "مشاهده لیست ترم‌ها",
                        url: "/terms"
                    }
                ]
            }}/>
        </div>
    )
}

export default EducationalAssistantMainPage   