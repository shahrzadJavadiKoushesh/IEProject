import {useSelector} from "react-redux";

function ListRow(props) {
    const buttons = props.data.buttons;
    const title = props.data.title
    const imageUrl = props.data.imageUrl
    const lightModeEnabled = useSelector((state) => state.theme.value)
    return (
        <div className={`list-item ${!lightModeEnabled?"dark-bg":""}`}>
            <span>
                {buttons.map(button=>(
                    <button.component onClick={button.onClick}>
                        <button.icon color={button.color} />
                    </button.component>
                ))}
            </span>
            <span className={`vazir ${!lightModeEnabled?"text-in-dark":""}`}>{title}</span>
            {imageUrl?(<img className="list-item-img" src={imageUrl}/>):""}

        </div>
    )
}

export default ListRow