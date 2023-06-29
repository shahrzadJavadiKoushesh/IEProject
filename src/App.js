import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import AllTerms from './components/AllTerms'
import CourseRegistrations from './components/CourseInfo';
import TermInfo from './components/TermsInfo'
import {useNavigate} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import SeeAllTErmsStudent from './components/SeeAllTermsStudent';

function App() {

    const supervisor = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const student = {
        email: "stu@stu.com",
        password: "stu123"
    }
    const navigate = useNavigate();
    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);
        if (details.email === supervisor.email && details.password === supervisor.password) {
            console.log("supervisor Logged In");
            setUser({
              name: details.name,
              email: details.email
            });
            navigate('/terms')
        } else if (details.email === student.email && details.password === student.password) {
            console.log("student Logged In");
            setUser({
                name: details.name,
                email: details.email
            });
        } else {
            console.log("details don't match")
            setError("Details don't match")
        }
    }

    return (
        <div className="App">
            {/*{user.email === "supervisor.email" ? (*/}
            {/*    <AllTerms/>*/}
            {/*) : user.email === "student.email" ? (*/}
            {/*    <LastTerms/>*/}
            {/*) : (*/}
            {/*    <LoginForm Login={Login} error={error}/>*/}
            {/*)}*/}

            <Routes>
                <Route path="/login" element={<LoginForm Login={Login} error={error}/>}/>
                <Route path="/terms" element={<AllTerms/>}/>
                <Route path="/terms/:term_id" element={<TermInfo />}/>
                <Route path="/courses/:course_id/registrations" element={<CourseRegistrations />}/>
                <Route path="/terms/:term_id/all_terms" element={<SeeAllTErmsStudent />}/>
            </Routes>
        </div>
    );
}

export default App;