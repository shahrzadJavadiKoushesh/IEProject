import {Button, IconButton} from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add"

function TopBar(props) {
    const buttons = props.data.buttons;
    const barTitle = props.data.barTitle;

    return (
        <div className='top-bar'>
            <div className="terms-bar-content">
                {buttons.map(el=>(
                    <Button
                        color="primary"
                        disabled={false}
                        size="small"
                        variant="outlined"
                        onClick={el.onClickHandler}
                        startIcon={<AddIcon />}>
                        {el.text}
                    </Button>
                ))}
            </div>
            <div className="terms-bar-content">{barTitle}</div>
        </div>
    )
}

export default TopBar