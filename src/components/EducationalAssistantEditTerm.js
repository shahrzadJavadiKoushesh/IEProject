import React, {useState} from "react";
import http from '../http';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@material-ui/core";
import {useNavigate} from "react-router-dom";

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
                <div className="bar"></div>
                <div className="terms-bar-content">ویرایش اطلاعات ترم پاییز 1402</div>
                <hr className="line"></hr>
                <form onSubmit={addTerm}>
                    <div className="form-inner">
                        <div className="form-group">
                            <label className="name-of-term">نام ترم</label>
                            <input
                                type="text"
                                id="terms-name"
                                name="name"
                                value={termName}
                                onChange={(event) => setTermName(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <FormControl fullWidth>
                                <InputLabel id="instructor-select-label">لیست اساتید</InputLabel>
                                <Select
                                    labelId="instructor-select-label"
                                    id="instructor-select"
                                    value={selectedInstructor}
                                    onChange={handleInstructorChange}
                                >
                                    <MenuItem value={"instructor 1"}>instructor 1</MenuItem>
                                    <MenuItem value={"instructor 2"}>instructor 2</MenuItem>
                                    <MenuItem value={"instructor 3"}>instructor 3</MenuItem>
                                </Select>
                            </FormControl>
                            <div className="btn-container">
                                {/* pass handleAddInstructor as onClick callback */}
                                <div className="add-instructor" onClick={handleAddInstructor}>
                                    افزودن
                                </div>
                                <div className="add-excel">آپلود اکسل</div>
                            </div>
                            <FormControl fullWidth>
                                <InputLabel id="student-select-label">لیست دانشجویان</InputLabel>
                                <Select
                                    labelId="student-select-label"
                                    id="student-select"
                                    value={selectedStudent}
                                    onChange={handleStudentChange}
                                >
                                    <MenuItem value={"student 1"}>student 1</MenuItem>
                                    <MenuItem value={"student 2"}>student 2</MenuItem>
                                    <MenuItem value={"student 3"}>student 3</MenuItem>
                                </Select>
                            </FormControl>
                            <div className="btn-container">
                                {/* pass handleAddStudent as onClick callback */}
                                <div className="add-instructor" onClick={handleAddStudent}>
                                    افزودن
                                </div>
                                <div className="add-excel">آپلود اکسل</div>
                            </div>
                        </div>
                        <input type='submit' value="افزودن"/>

                    </div>

                </form>
            </div>
            <div className="terms-list-right-edu-ass">
                <div className="terms-right-content">مشاهده لیست ترم‌ها</div>
            </div>
        </div>
    );
}

export default EducationalAssistantEditTerms;