import {IconButton} from "@material-ui/core";
import sampleImage from '../assets/images/logo192.png';
import AbstractItem from "./AbstractItem";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from "@mui/icons-material/Edit"

function ListRow(props) {
    const deleteHandler = props.data.deleteHandler
    const editHandler = props.data.editHandler
    const title = props.data.title
    const imageUrl = props.data.imageUrl

    const buttons = []

    if (deleteHandler) {
        buttons.push({
            component: IconButton,
            onClick: deleteHandler,
            icon: DeleteIcon,
            color: "error"
        })
    }
    if (editHandler) {
        buttons.push({
            component: IconButton,
            onClick: editHandler,
            icon: EditIcon,
            color: "primary"
        })
    }
    return (
        <AbstractItem data={{
            buttons: buttons,
            title: title,
            imageUrl: imageUrl || sampleImage,
        }}/>
    )
}

export default ListRow