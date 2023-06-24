import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
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

  const see_more = () => {
    console.log("see more");
  }
  return (
    <div className="App">
      {(user.email !== "") ? (
        <div className='terms-container'> 
          <div className='left'>
            <div className='welcome-bar'>
              <h2>Welcome <span>{user.name}</span></h2>
            </div>
            
            <div className='terms'>
              <div className='term-item'>ترم 1</div>
              <div className='term-item'>ترم 2</div>
              <div className='term-item'>ترم 3</div>
              <div className='term-item'>ترم 4</div>
              <div className='term-item'>ترم 5</div>
              <div className='term-item'>ترم 6</div>
              <div className='term-item'>ترم 7</div>
              <div className='term-item'>ترم 8</div>
            </div>
          <button onClick={see_more} className='see-more'>مشاهده بیشتر</button>
          </div>
          <div className='terms-list-right'>
            مشاهده لیست ترم‌ها
          </div>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )
    }
    </div>
  );
}

export default App;
