import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import AllTerms from './components/AllTerms'
import LastTerms from './components/LastTerms';

function App() {
  const supervisor = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const student = {
    email: "stu@stu.com",
    password: "stu123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if (details.email === supervisor.email && details.password === supervisor.password){
      console.log("supervisor Logged In");
      setUser({
        name: details.name,
        email: details.email
      });
    } 
    else if (details.email === student.email && details.password === student.password){
      console.log("student Logged In");
      setUser({
        name: details.name,
        email: details.email
      });
    }
    else{
      console.log("details don't match")
      setError("Details don't match")
    }
  }

  return (
    <div className="App">
      {user.email === supervisor.email ? (
        <AllTerms />
      ) : user.email === student.email ? (
        <LastTerms />
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;