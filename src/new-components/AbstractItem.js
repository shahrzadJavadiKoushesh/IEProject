function ListRow(props) {
    const buttons = props.data.buttons;
    const title = props.data.title
    const imageUrl = props.data.imageUrl
    return (
        <div className="list-item">
            <span>
                {buttons.map(button=>(
                    <button.component onClick={button.onClick}>
                        <button.icon color={button.color} />
                    </button.component>
                ))}
            </span>
            <span className="vazir">{title}</span>
            {imageUrl?(<img className="list-item-img" src={imageUrl}/>):""}

        </div>
    )
}

export default ListRow