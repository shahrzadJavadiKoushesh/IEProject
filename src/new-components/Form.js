import {Button} from "@material-ui/core";

function Form(props) {
    const fields = props.data.fields
    const submitHandler = props.data.submitHandler
    const buttonData = props.data.buttonData
    return (
        <form className={"whole-from"} onSubmit={submitHandler}>
            <div className={"form-content"}>
                {fields.map(field => (
                    <div className='form-group-item'>
                        <label className={`form-label`}>{field.title}</label>
                        <field.component {...field.args} type={field.type} name={field.name}></field.component>
                    </div>
                ))}
            </div>

            <Button
                color="primary"
                disabled={false}
                type={"submit"}
                size="small"
                variant="outlined">
                {buttonData.text}
            </Button>
        </form>
    )
}

export default Form