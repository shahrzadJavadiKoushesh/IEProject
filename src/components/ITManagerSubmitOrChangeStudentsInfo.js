import React, { useState } from 'react'
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@material-ui/core";


function ITManagerSeeSUbmitChangesForStudents({ Login, error }) {

    const [selectedFaculty, setSelectedFaculty] = useState("");
    const [selectedMajor, setSelectedMajor] = useState("");

    const handleFacultyChange = (event) => {
        setSelectedFaculty(event.target.value);
    };

    const handleMajorChange = (event) => {
        setSelectedMajor(event.target.value);
    };
    return (
        <div className='terms-container'>
            <div className='left'>
                <div className='bar'>
                </div>
                <div className='it-header-container'>
                    <div className='it-header'>ثبت/تغییر اطلاعات دانشجو</div>
                </div>

                <div className='it-container'>
                    <div className='educational-info'>
                        <form>
                            <div className='form-inner'>
                                <label>دانشکده</label>
                                <FormControl fullWidth>
                                    <InputLabel id="instructor-select-label">

                                    </InputLabel>
                                    <Select
                                        labelId="instructor-select-label"
                                        id="instructor-select"
                                        value={selectedFaculty}
                                        onChange={handleFacultyChange}
                                    >
                                        <MenuItem value={"instructor 2"}>faculty 2</MenuItem>
                                        <MenuItem value={"instructor 1"}>faculty 1</MenuItem>
                                        <MenuItem value={"instructor 3"}>faculty 3</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl fullWidth>
                                    <label>رشته</label>
                                    <InputLabel id="instructor-select-label">
                                    </InputLabel>
                                    <Select
                                        labelId="instructor-select-label"
                                        id="instructor-select"
                                        value={selectedMajor}
                                        onChange={handleMajorChange}
                                    >
                                        <MenuItem value={"instructor 2"}>major 2</MenuItem>
                                        <MenuItem value={"instructor 1"}>major 1</MenuItem>
                                        <MenuItem value={"instructor 3"}>major 3</MenuItem>
                                    </Select>
                                </FormControl>
                                <div className='form-group'>
                                    <label className='personal-info-label'>سال ورود</label>
                                    <input type='text' name='text' id='email'></input>
                                </div>

                                <div className='form-group'>
                                    <label className='personal-info-label'>استاد راهنما</label>
                                    <input type='text' name='text' id='email'></input>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='personal-info'>
                        <form >
                            <div className='form-inner'>

                                <div className='form-group'>
                                    <label className='personal-info-label'>نام</label>
                                    <input type='text' name='text' id='email'></input>
                                </div>

                                <div className='form-group'>
                                    <label className='personal-info-label'>نام خانوادگی:</label>
                                    <input type='text' name='password' ></input>
                                </div>

                                <div className='form-group'>
                                    <label className='personal-info-label'>شماره دانشجویی</label>
                                    <input type='text' name='password' ></input>
                                </div>

                                <div className='form-group'>
                                    <label className='personal-info-label'>کد ملی</label>
                                    <input type='text' name='password' ></input>
                                </div>

                                <div className='form-group'>
                                    <label className='personal-info-label'>دروس پاس کرده</label>
                                    <input type='text' name='password' ></input>
                                </div>

                                <input type='submit' value="افزودن" />

                                {error !== "" ? (<div className='error'>{error}</div>) : ""}

                            </div>
                        </form>
                    </div>

                </div>

                <div className='submit-change-info'>ثبت جدید/تغییر اطلاعات</div>

            </div>
            {
                <div className='terms-list-right-edu-ass'>
                </div>
            }
        </div>
    )
}

export default ITManagerSeeSUbmitChangesForStudents