import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import AllTerms from './components/AllTerms'
import CourseRegistrations from './components/CourseInfo';
import TermInfo from './components/TermsInfo'
import {Routes, Route, useNavigate, Redirect} from 'react-router-dom';
import http from './http';
import SeeAllTErmsStudent from './components/SeeAllTermsStudent';
import TermsInfoStudentRegistration from './components/TermsInfoStudentRegistration';
import PreRegistrationCourses from './components/PreregistrationCourses';
import EducationalAssistantMainPage from './components/EducationalAssistantMainPage';
import EducationalAssistantEditTerms from './components/EducationalAssistantEditTerm';
import EducationalAssistantPreregisterRegister from './components/EducationalAssistantPreregisterRegister';
import EducationalAssistantPreregisteredCourses from './components/EducationalAssistantPreregisteredCourses';
import EducationalAssistantAddNewCourse from './components/EducationalAssistantAddNewCourse';
import EducationalAssistantPreregisteredStudents from './components/EducationalAssistantPreregisteredStudents';
import ITManagerSeeAllStudents from './components/ITManagerSeeStudents';
import ITManagerSeeAllInstructors from './components/ITManagerSeeInstructors';
import ITManagerSubmitOrChangeManagerInfo from "./components/ITManagerSubmitOrChangeManagerInfo";
import ITManagerSubmitOrChangeStudentsInfo from './components/ITManagerSubmitOrChangeStudentsInfo';
import ITManagerSubmitOrChangeProfessorInfo from "./components/ITManagerSubmitOrChangeProfessorInfo";
import Sample from "./components/Sample";

function App() {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);
        http.post('login', {
            username: details.email,
            password: details.password,
        }).then(
            res => {
                if (res.status === 200) {
                    localStorage.setItem("authorization", res.data.token)
                    localStorage.setItem("role", res.data.role)
                    switch (res.data.role) {
                        case "it_manager":
                            navigate('/students')
                            break
                        default:
                            navigate('/terms')
                    }
                } else {
                    throw new Error()
                }
            }
        ).catch(
            err => {
                setError(err.response.data.message)
            }
        )

    }

    let TermComponent, TermInfoComponent, RegistrationComponent
    switch (localStorage.getItem("role")) {
        case "manager":
            TermComponent = EducationalAssistantMainPage
            TermInfoComponent = EducationalAssistantPreregisterRegister
            RegistrationComponent = PreRegistrationCourses
            break
        case "professor":
        case "student":
            TermComponent = AllTerms
            TermInfoComponent = TermsInfoStudentRegistration
            RegistrationComponent = PreRegistrationCourses
    }

    return (
        <div className="App">
            <Routes>
                {/*<Route path="/" element={ <Redirect to="/login" /> }/>*/}
                <Route path="/login" element={<LoginForm Login={Login} error={error}/>}/>
                <Route path="/terms" element={<TermComponent/>}/>
                <Route path="/terms/:term_id/registrations_courses" element={<TermInfo/>}/>
                <Route path="/courses/:course_id/registrations" element={<CourseRegistrations/>}/>
                <Route path="/terms/:term_id/all_terms" element={<SeeAllTErmsStudent/>}/>
                <Route path="/terms/terms_info/:term_id" element={<TermInfoComponent/>}/>
                <Route path="/terms/terms_info/:term_id/pre_register"
                       element={<RegistrationComponent mode={'prereg'}/>}/>
                <Route path="/terms/terms_info/:term_id/register" element={<RegistrationComponent mode={'reg'}/>}/>
                <Route path="/terms/add" element={<EducationalAssistantEditTerms/>}/>
                <Route path="/terms/terms_info/:term_id/:reg_type/course/add" element={<EducationalAssistantAddNewCourse/>}/>
                <Route path="/educational_assistant/preregistered_students" element={<EducationalAssistantPreregisteredStudents/>}/>
                <Route path="/students" element={<ITManagerSeeAllStudents usertype="student"/>}/>
                <Route path="/professors" element={<ITManagerSeeAllStudents usertype="professor"/>}/>
                <Route path="/managers" element={<ITManagerSeeAllStudents usertype="manager"/>}/>
                <Route path="/students/add" element={<ITManagerSubmitOrChangeStudentsInfo/>}/>
                <Route path="/managers/add" element={<ITManagerSubmitOrChangeManagerInfo />}/>
                <Route path="/professors/add" element={<ITManagerSubmitOrChangeProfessorInfo/>}/>
                <Route path="/sample" element={<Sample />}/>
            </Routes>
        </div>
    );
}

export default App;