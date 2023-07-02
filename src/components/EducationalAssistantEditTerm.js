import React, {useState} from "react";
import http from '../http';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem, Input, TextField,
} from "@material-ui/core";
import {useNavigate} from "react-router-dom";
import TopBar from "../new-components/TopBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Form from "../new-components/Form";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Signout from "../new-components/Signout";

function EducationalAssistantEditTerms(props) {
    const [termName, setTermName] = useState("");
    const [selectedInstructor, setSelectedInstructor] = useState("");
    const [selectedStudent, setSelectedStudent] = useState("");
    const navigate = useNavigate()


    const addTerm = (e) => {
        e.preventDefault();

        const form = e.target
        const requestData = {}
        for (const element of form.elements) {
            if ("name" in element) {
                requestData[element.name] = element.value
            }
        }

        http.post('terms', requestData).then(
            () => {
                navigate(-1)
            }).catch(err => {
        })
    }

    const handleInstructorChange = (event) => {
        setSelectedInstructor(event.target.value);
    };

    const handleStudentChange = (event) => {
        setSelectedStudent(event.target.value);
    };

    const handleAddInstructor = () => {
        console.log(`Selected instructor: ${selectedInstructor}`);
    };

    const handleAddStudent = () => {
        console.log(`Selected student: ${selectedStudent}`);
    };

    return (
        <div className="terms-container-edu">
            <div className="left-edu">
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
                    barTitle: `ثبت / ویرایش اطلاعات ترم`
                }}/>
                <div className='it-container'>
                    <div className={"form-wrapper"}>

                        <Form data={{
                            buttonData: {
                                text: "ثبت"
                            },
                            fields: [{
                                title: "نام ترم",
                                type: "text",
                                name: "name",
                                component: Input,
                            }],
                            submitHandler: addTerm,
                        }}/>
                    </div>
                </div>

            </div>
            <div className="terms-list-right-edu-ass">
                <div className="terms-right-content">مشاهده لیست ترم‌ها</div>
            </div>
        </div>
    );
}

export default EducationalAssistantEditTerms;