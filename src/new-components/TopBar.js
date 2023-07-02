import {Button} from "@material-ui/core";

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
                        startIcon={(el.icon)?<el.icon />:""}
                    >
                        {el.text}
                    </Button>
                ))}
            </div>
            <div className="terms-bar-content">{barTitle}</div>
        </div>
    )
}

export default TopBar