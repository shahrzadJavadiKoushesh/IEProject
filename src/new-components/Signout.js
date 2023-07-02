import {Button} from "@material-ui/core";
import {useNavigate} from "react-router-dom";
import http from "../http";
function Signout(props) {
    const navigate = useNavigate();
    return (
        <Button
        color="error"
        disabled={false}
        size="large"
        variant="contained"
        style={{height: "30px", margin: "3px"}}
        onClick={()=>{
            http.post('logout').then((res)=>{
            }).catch(err=>{
                if (err.response.status === 498) {
                    navigate('/login');
                    return
                }
                console.log(err)
            })
            localStorage.clear();
        }}
    >
        خروج
    </Button>)
}

export default Signout;