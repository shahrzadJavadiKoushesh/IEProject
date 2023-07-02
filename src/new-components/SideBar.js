import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import sampleBG from "../assets/images/background.jpeg";
import {useDispatch, useSelector} from "react-redux";
import {switchMode} from "../store/theme"

function SideBar(props) {
    const items = props.data.items;
    const lightModeEnabled = useSelector((state) => state.theme.value)
    const dispatch = useDispatch()

    return (
        <div className={`side-bar-wrapper ${!lightModeEnabled?"dark-side-bar":""}`}>
            <div className={`side-bar`}>
                <img src={sampleBG} className="side-bar-header"/>
                {items.map(item => (
                        <ListItemButton className="side-bar-item" component="a" href={item.url}>
                            <ListItemText primaryTypographyProps={{
                                fontFamily: "vazir",
                                dir: "rtl",
                                textAlign: "center",
                                color: "white",
                                height: "auto",
                                padding: "5px"
                            }} primary={item.text}/>
                        </ListItemButton>
                    )
                )}
                <FormControlLabel className={"text-in-dark"} label={"فعالسازی حالت روز"} control={<Switch
                    checked={lightModeEnabled}
                    onChange={(event) => {
                        dispatch(switchMode());
                    }}
                    inputProps={{ 'aria-label': 'controlled' }}
                />}/>

            </div>
        </div>
    )
}

export default SideBar;