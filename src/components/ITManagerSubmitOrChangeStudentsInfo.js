import React, { useState } from 'react'
import {
    FormControl,
    TextField,
} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';

function ITManagerSeeSUbmitChangesForStudents({ Login, error }) {

    const [selectedFaculty, setSelectedFaculty] = useState("");
    const [selectedMajor, setSelectedMajor] = useState("");

    const handleFacultyChange = (event, value) => {
        setSelectedFaculty(value);
    };

    const handleMajorChange = (event, value) => {
        setSelectedMajor(value);
    };

    const faculties = [
        { label: 'faculty 1', value: 'instructor 1' },
        { label: 'faculty 2', value: 'instructor 2' },
        { label: 'faculty 3', value: 'instructor 3' },
    ];

    const majors = [
        { label: 'major 1', value: 'instructor 1' },
        { label: 'major 2', value: 'instructor 2' },
        { label: 'major 3', value: 'instructor 3' },
    ];

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
                                <Autocomplete
                                    options={faculties}
                                    getOptionLabel={(option) => option.label}
                                    value={selectedFaculty}
                                    onChange={handleFacultyChange}
                                    renderInput={(params) => (
                                        <TextField {...params} label="" variant="outlined" />
                                    )}
                                />
                                <label>رشته</label>
                                <Autocomplete
                                    options={majors}
                                    getOptionLabel={(option) => option.label}
                                    value={selectedMajor}
                                    onChange={handleMajorChange}
                                    renderInput={(params) => (
                                        <TextField {...params} label="" variant="outlined" />
                                    )}
                                />
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