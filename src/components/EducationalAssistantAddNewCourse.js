import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
function EducationalAssistantAddNewCourse(props) {

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
        " ترم پاییز 1402",
    ]);

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

   
    return (
        <div className="terms-container-edu">
            <div className="left-edu">
                <div className="bar"></div>
                <div className="terms-bar-content">
                    افزودن درس جدید
                </div>
                <hr className="line"></hr>
                <form>
                    <div className="form-inner">
                        <div className="form-group">
                            <label className="name-of-term">نام ترم</label>
                            <input type="text" id="terms-name" />
                        </div>

                        <div className="form-group">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">لیست اساتید</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={'instructor 1'}>instructor 1</MenuItem>
                                    <MenuItem value={'instructor 2'}>instructor 2</MenuItem>
                                    <MenuItem value={'instructor 3'}>instructor 3</MenuItem>
                                </Select>
                            </FormControl>
                            <div className="btn-container">
                                <div className="add-instructor">افزودن</div>
                                <div className="add-excel">آپلود اکسل</div>
                            </div>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">لیست دانشجویان</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={'instructor 1'}>student 1</MenuItem>
                                    <MenuItem value={'instructor 2'}>student 2</MenuItem>
                                    <MenuItem value={'instructor 3'}>student 3</MenuItem>
                                </Select>
                            </FormControl>
                            <div className="btn-container">
                                <div className="add-instructor">افزودن</div>
                                <div className="add-excel">آپلود اکسل</div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {
                <div className="terms-list-right-edu-ass">
                    <div className="terms-right-content">مشاهده لیست ترم‌ها</div>
                </div>
            }
        </div>
    );
}

export default EducationalAssistantAddNewCourse;   