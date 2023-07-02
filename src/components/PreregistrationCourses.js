import React, {useState, useRef} from "react";
import {useParams, useLocation, Link, useNavigate} from "react-router-dom";
import http from "../http";
import TopBar from "../new-components/TopBar";
import SideBar from "../new-components/SideBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import Signout from "../new-components/Signout";

// for manager
function deletePreReg(termId, courseId, setFetched, fetched) {
    http.del(`terms/${termId}/preregistration/${courseId}`)
        .then(() => setFetched(!fetched)).catch((err) => {
        console.log(err)
    })
}

function deleteReg(termId, courseId, setFetched, fetched) {
    http.del(`terms/${termId}/registration/${courseId}`)
        .then(() => setFetched(!fetched)).catch((err) => {
        console.log(err)
    })
}

// for student
function createPreReg(courseId, setFetched, fetched) {
    http.post(`course/${courseId}/preregister`)
        .then(() => setFetched(!fetched)).catch((err) => {
        console.log(err)
    })
}

function createReg(courseId, setFetched, fetched) {
    http.post(`course/${courseId}/register`)
        .then(() => setFetched(!fetched)).catch((err) => {
        console.log(err)
    })
}

function cancelPreReg(courseId, setFetched, fetched) {
    http.del(`course/${courseId}/preregister`)
        .then(() => setFetched(!fetched)).catch((err) => {
        console.log(err)
    })
}

function cancelReg(courseId, setFetched, fetched) {
    http.del(`course/${courseId}/register`)
        .then(() => setFetched(!fetched)).catch((err) => {
        console.log(err)
    })
}

function PreRegistrationCourses(props) {
    const [numTerms, setNumTerms] = useState(6);
    const [searchQuery, setSearchQuery] = useState("");
    const {term_id: termId} = useParams();
    const mode = props.mode // prereg or reg


    const see_more = () => {
        console.log("see more");
        setNumTerms(numTerms + 4)
    }

    const [fetched, setFetched] = useState(false);
    const preRegs = useRef([]);
    const navigate = useNavigate();

    const location = useLocation()
    const {readOnly} = location.state
    if (!fetched) {
        http.get(`terms/${termId}/${mode}istrations${readOnly ? ('?registered=true') : ('')}`).then(res => {
            return res.data.output
        }).then(output => {
            preRegs.current = output
            setFetched(!fetched)
        }).catch(e => console.log(e));
    }

    const filteredPreRegs = preRegs.current.filter((course) => course.name.includes(searchQuery));
    let deleter, canceler, creator
    switch (mode) {
        case "prereg":
            deleter = deletePreReg
            canceler = cancelPreReg
            creator = createPreReg
            break
        case "reg":
            deleter = deleteReg
            canceler = cancelReg
            creator = createReg
            break
        default:
            throw new Error("invalid registration mode")
    }

    const buttons = [{
        text: "بازگشت",
        onClickHandler: () => {
            navigate(-1)
        },
        icon: ArrowBackIcon,
    }]

    if (localStorage.getItem("role") === "manager") {
        buttons.push({
            text: "افزودن",
            onClickHandler: () => {
                navigate(`/terms/terms_info/${termId}/${mode}/course/add`)
            },
            icon: AddIcon,
        })
    }


    return (<div className='terms-container'>
        <div className='left'>
            <div className='bar'>
                <Signout/>
            </div>
            <TopBar data={{
                buttons: buttons,
                barTitle: `مشاهده لیست دروس ارائه شده برای ${getPersianModeName(mode)}`
            }}/>

                {/*<Link to={`/terms/terms_info/${termId}/${mode}/course/add`}><h2>+</h2></Link>*/}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="جستجو بر اساس نام درس"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className='terms'>
                {filteredPreRegs.slice(0, numTerms).map((course, index) => (<div className="course-item" key={index}>
                    {readOnly ? (<span/>) : (localStorage.getItem("role") === "manager" ? (
                        <span className="cancle-registration"
                              onClick={() => deleter(course.semester, course._id, setFetched, fetched)}>لغو</span>) : (course.registered_before ? (
                        <span className="cancle-registration"
                              onClick={() => canceler(course._id, setFetched, fetched)}>لغو {getPersianModeName(mode)}</span>

                    ) : (<span className="create-registration"
                               onClick={() => creator(course._id, setFetched, fetched)}>{getPersianModeName(mode)}</span>)))}
                    <span className="complete-info">اطلاعات کامل</span>
                    <span>{course.name}</span>
                    <span>{course.professorName}</span>
                </div>))}
            </div>
            {numTerms < filteredPreRegs.length && (<button onClick={see_more} className="see-more">
                مشاهده بیشتر
            </button>)}
        </div>
        <SideBar data={{
            items: [
                {
                    text: "مشاهده لیست ترم‌ها",
                    url: "/terms"
                },
            ]
        }} />
    </div>)
}

function getPersianModeName(mode) {
    switch (mode) {
        case "prereg":
            return "پیش‌ثبت‌نام"
        case "reg":
            return "‌ثبت‌نام"
        default:
            return ""
    }
}

export default PreRegistrationCourses