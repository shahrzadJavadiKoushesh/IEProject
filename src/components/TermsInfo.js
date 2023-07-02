import React, {useState, useRef} from "react";
import CourseInfo from "./CourseInfo";
import {Link, useParams} from 'react-router-dom';
import http from '../http'
import TopBar from "../new-components/TopBar";
import SideBar from "../new-components/SideBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {useNavigate} from 'react-router-dom';
import Signout from "../new-components/Signout";

function TermsInfo(props) {
    const [numTerms, setNumTerms] = useState(6);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("");
    const navigate = useNavigate();
    const {selectedTerm, onClose} = props;
    const {term_id: termId} = useParams(); // TODO: use termId to fetch courses from server

    const [fetched, setFetched] = useState(false);
    const courses = useRef([]);

    const see_more = () => {
        console.log("see more");
        setNumTerms(numTerms + 4)
    }

    if (!fetched) {
        http.get(`terms/${termId}/registrations`).then(
            res => {
                return res.data.output
            }
        ).then(
            output => {
                courses.current = output
                setFetched(!fetched)
            }
        ).catch(
            e => console.log(e)
        );
    }


    const filteredCourses = courses.current.filter((course) =>
        course.name.includes(searchQuery)
    );

    if (selectedCourse) {
        return <CourseInfo selectedTerm={selectedTerm} selectedCourse={selectedCourse} onClose={onClose}/>;
    }

    return (
        <div className='terms-container'>
            <div className='left'>
                <div className='bar'>
                    <Signout/>
                </div>
                <TopBar data={{
                    buttons: [{
                        text: "بازگشت",
                        onClickHandler: () => {
                            navigate(-1)
                        },
                        icon: ArrowBackIcon,
                    }],
                    barTitle: "مشاهده اطلاعات ترم"
                }}/>
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
                        <Link to={`/courses/${course._id}/registrations`}>
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
            <SideBar data={{
                items: [
                    {
                        text: "مشاهده لیست ترم‌ها",
                        url: "/terms"
                    },
                ]
            }} />
        </div>
    )
}

export default TermsInfo