import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import AllTerms from './components/AllTerms'
function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if (details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged In");
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
      {(user.email !== "") ? (
        <AllTerms />
      ) : (
        <LoginForm Login={Login} error={error}/>
      )
    }
    </div>
  );
}

export default App;
