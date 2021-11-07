import React, {ChangeEventHandler, FocusEventHandler} from "react";

export const Users = () => {

    const deleteUsers = () => {
        console.log("user have been deleted")
    }
    const saveUsers = () => {
        console.log("user have been saved")
    }
    const onBlurHandler = (event: FocusEventHandler<HTMLTextAreaElement>) => {
        console.log('focus processed')
    }
    const onChangeHandler = (event: ChangeEventHandler<HTMLTextAreaElement>) => {
        console.log('change processed')
    }
    return (
        <div>
            <h2>Dimych</h2>
            <textarea onChange={onChangeHandler} onBlur={onBlurHandler}></textarea>
            <input type="text"/>
            <input type="number"/>
            <button onClick={deleteUsers}>save</button>
            <button onClick={saveUsers}>delete</button>
        </div>
        )

}