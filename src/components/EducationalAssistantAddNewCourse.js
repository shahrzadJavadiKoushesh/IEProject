import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function EducationalAssistantEditTerms(props) {
  const [termName, setTermName] = useState("");
  const [selectedInstructor, setSelectedInstructor] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");
  const [classDate, setClassDate] = useState(dayjs("2022-04-17"));
  const [examDate, setExamDate] = useState(dayjs("2022-04-17"));

  const handleInstructorChange = (event) => {
    setSelectedInstructor(event.target.value);
  };
  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };
  const handleStudentChange = (event) => {
    setSelectedStudent(event.target.value);
  };

  return (
    <div className="terms-container-edu">
      <div className="left-edu">
        <div className="bar"></div>
        <div className="terms-bar-content">ویرایش اطلاعات ترم پاییز 1402</div>
        <hr className="line"></hr>
        <form>
          <div className="form-inner2">
            {/* instructors */}
            <div className="form-group">
              <FormControl fullWidth>
                <InputLabel id="instructor-select-label">
                  لیست اساتید
                </InputLabel>
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
              {/* course */}
              <FormControl fullWidth>
                <InputLabel id="course-select-label">لیست دروس</InputLabel>
                <Select
                  labelId="course-select-label"
                  id="instructor-select"
                  value={selectedCourse}
                  onChange={handleCourseChange}
                >
                  <MenuItem value={"instructor 1"}>course 1</MenuItem>
                  <MenuItem value={"instructor 2"}>course 2</MenuItem>
                  <MenuItem value={"instructor 3"}>course 3</MenuItem>
                </Select>
              </FormControl>
              {/* student */}
              <FormControl fullWidth>
                <InputLabel id="student-select-label">
                  لیست دانشجویان
                </InputLabel>
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
              <div className="form-group">
                <label className="name-of-term"> ظرفیت</label>
                <input
                  type="text"
                  id="terms-name"
                  value={termName}
                  onChange={(event) => setTermName(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="name-of-term">
                  {" "}
                  تاریخ و ساعت برگزاری کلاس
                </label>
                <div className="calendar-container">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar value={classDate} onChange={setClassDate} />
                  </LocalizationProvider>
                  <label className="name-of-term">روز امتحان</label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar value={examDate} onChange={setExamDate} />
                  </LocalizationProvider>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="submit-btn">ثبت جدید/تغییر اطلاعات</div>
      </div>
      <div className="terms-list-right-edu-ass">
        <div className="terms-right-content">مشاهده لیست ترم‌ها</div>
      </div>
    </div>
  );
}

export default EducationalAssistantEditTerms;