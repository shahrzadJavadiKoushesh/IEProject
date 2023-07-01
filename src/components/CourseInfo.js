import React, {useState, useRef} from "react";
import {useParams} from "react-router-dom";
import http from "../http";
import AbstractItem from "../new-components/AbstractItem";
import {IconButton} from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

function actionCourse(regId, action, setFetched, fetched) {
    http.put(`registration/${regId}`, {
        action: action
    }).then(
        res => {
            setFetched(!fetched);
        }
    ).catch(
        e => console.log(e)
    );
}
function CourseInfo(props) {
    const [numTerms, setNumTerms] = useState(9);
    const [searchQuery, setSearchQuery] = useState("");
    const {selectedCourse, onClose} = props;
    const {course_id: courseId} = useParams(); // todo: use courseId to get student list

    const [fetched, setFetched] = useState(false);
    const registrations = useRef([]);

    const see_more = () => {
        console.log("see more");
        setNumTerms(numTerms + 4)
    }

    if (!fetched) {
        http.get(`courses/${courseId}/registrations`).then(
            res => {
                return res.data.output
            }
        ).then(
            output => {
                console.log(output)
                registrations.current = output
                setFetched(!fetched)
            }
        ).catch(
            e => console.log(e)
        );
    }

    const filteredRegistrations = registrations.current.filter((registration) =>
        registration.requestedStudent.fullname.includes(searchQuery)
    );

    return (
        <div className='terms-container'>
            <div className='left'>
                <div className='term-bar'>
                    <h2>تعداد کل ثبت‌نامی‌ها: {registrations.current.length} نفر</h2>
                    <h2>درس {selectedCourse}</h2>
                </div>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="جستجوی نام دانشجو"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className='terms'>
                    {filteredRegistrations.slice(0, numTerms).map((reg) => (
                        // <div className="student-item">
                        //     <span onClick={()=>{actionCourse(reg._id, "accept")}}>تایید</span>
                        //     <span onClick={()=>{actionCourse(reg._id, "reject")}}>رد</span>
                        //     {reg.requestedStudent.fullname}
                        //     <div className="img"></div>
                        // </div>
                        <AbstractItem data={{
                            buttons: [{
                                component: IconButton,
                                onClick: () => {actionCourse(reg._id, "accept", setFetched, fetched)},
                                icon: reg.status==="accept"?ThumbUpAltIcon:ThumbUpOffAltIcon,
                                color: "primary"
                            },{
                                component: IconButton,
                                onClick: () => {actionCourse(reg._id, "reject", setFetched, fetched)},
                                icon: reg.status==="reject"?ThumbDownAltIcon:ThumbDownOffAltIcon,
                                color: "error"
                            }],
                            title: reg.requestedStudent.fullname,
                        }}/>
                    ))}
                </div>
                {numTerms < filteredRegistrations.length && (
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

export default CourseInfo