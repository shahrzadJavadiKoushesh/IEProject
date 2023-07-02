import {Button} from "@material-ui/core";
import {useNavigate} from "react-router-dom";
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
            localStorage.clear();
            navigate('/login');
        }}
    >
        خروج
    </Button>)
}

export default Signout;