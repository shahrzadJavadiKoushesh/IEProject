import {Button} from "@material-ui/core";
import {useSelector} from "react-redux";

function TopBar(props) {
    const buttons = props.data.buttons;
    const barTitle = props.data.barTitle;
    const lightModeEnabled = useSelector((state) => state.theme.value)

    return (
        <div className={`top-bar ${!lightModeEnabled?"dark-side-bar":""}`}>
            <div className="terms-bar-content">
                {buttons.map(el=>(
                    <Button
                        color={lightModeEnabled?"primary":"secondary"}
                        disabled={false}
                        size="small"
                        variant="outlined"
                        onClick={el.onClickHandler}
                        startIcon={(el.icon)?<el.icon />:""}
                    >
                        {el.text}
                    </Button>
                ))}
            </div>
            <div className={`terms-bar-content ${!lightModeEnabled?"text-in-dark":""}`}>{barTitle}</div>
        </div>
    )
}

export default TopBar