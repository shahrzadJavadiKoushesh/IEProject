import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import sampleBG from "../assets/images/background.jpeg";
function SideBar(props) {
    const items = props.data.items;
    return (
        <div className="side-bar-wrapper">
            <div className="side-bar">
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
            </div>
        </div>
    )
}

export default SideBar;