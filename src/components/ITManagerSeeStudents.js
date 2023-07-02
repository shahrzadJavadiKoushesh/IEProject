import React, {useState, useRef} from "react";
import {useNavigate} from "react-router-dom";
import http from "../http";
import ListItem from "../new-components/ListItem";
import SideBar from "../new-components/SideBar";
import TopBar from "../new-components/TopBar";
import AddIcon from "@mui/icons-material/Add";
import Signout from "../new-components/Signout";


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
                    <Signout/>
                </div>
                <TopBar data={{
                    buttons: [{
                        text: "افزودن",
                        onClickHandler: addStudent,
                        icon: AddIcon,
                    }],
                    barTitle: `مشاهده لیست ${getPersianUsertype(usertype)}ها`
                }}/>
                <div className="terms">
                    {students.current.slice(0, numTerms).map((student, index) => (
                        <ListItem data={{
                            deleteHandler: () => deleteStudent(student._id, setFetched, fetched),
                            title: student.fullname,
                        }}/>
                    ))}
                </div>
                {numTerms < students.current.length && (
                    <button onClick={see_more} className="see-more">
                        مشاهده بیشتر
                    </button>
                )}
            </div>
            {
                <SideBar data={{
                    items: [
                        {
                            text: "مشاهده لیست دانشجویان",
                            url: "/students"
                        },
                        {
                            text: "مشاهده لیست معاونان",
                            url: "/managers"
                        },
                        {
                            text: "مشاهده لیست اساتید",
                            url: "/professors"
                        }
                    ]
                }} />
            }
        </div>
    )
}

function getPersianUsertype(usertype) {
    switch (usertype) {
        case "student":
            return "دانشجو";
        case "manager":
            return "معاون";
        case "professor":
            return "استاد";
    }
}

export default ITManagerSeeAllStudents;