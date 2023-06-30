import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import AllTerms from './components/AllTerms'
import CourseRegistrations from './components/CourseInfo';
import TermInfo from './components/TermsInfo'
import {useNavigate} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import http from './http';
import SeeAllTErmsStudent from './components/SeeAllTermsStudent';
import TermsInfoStudentRegistration from './components/TermsInfoStudentRegistration';
import PreRegistrationCourses from './components/PreregistrationCourses';
import EducationalAssistantMainPage from './components/EducationalAssistantMainPage';
import EducationalAssistantEditTerms from './components/EducationalAssistantEditTerm';
import EducationalAssistantPreregisterRegister from './components/EducationalAssistantPreregisterRegister';
import EducationalAssistantPreregisteredCourses from './components/EducationalAssistantPreregisteredCourses';
import EducationalAssistantAddNewCourse from './components/EducationalAssistantAddNewCourse';

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
                    navigate('/terms')
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

    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<LoginForm Login={Login} error={error}/>}/>
                <Route path="/terms" element={<AllTerms/>}/>
                <Route path="/terms/:term_id/registrations_courses" element={<TermInfo/>}/>
                <Route path="/courses/:course_id/registrations" element={<CourseRegistrations/>}/>
                <Route path="/terms/:term_id/all_terms" element={<SeeAllTErmsStudent/>}/>
                <Route path="/terms/terms_info/:term_id" element={<TermsInfoStudentRegistration/>}/>
                <Route path="/terms/terms_info/:term_id/pre_register"
                       element={<PreRegistrationCourses mode={'prereg'}/>}/>
                <Route path="/terms/terms_info/:term_id/register" element={<PreRegistrationCourses mode={'reg'}/>}/>
                <Route path="/educational_assistant" element={<EducationalAssistantMainPage/>}/>
                <Route path="/educational_assistant/edit_term" element={<EducationalAssistantEditTerms/>}/>
                <Route path="/educational_assistant/preregister_register" element={<EducationalAssistantPreregisterRegister/>}/>
                <Route path="/educational_assistant/preregister_courses" element={<EducationalAssistantPreregisteredCourses/>}/>
                <Route path="/educational_assistant/add_new_course" element={<EducationalAssistantAddNewCourse/>}/>
            </Routes>
        </div>
    );
}

export default App;