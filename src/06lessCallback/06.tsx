import React, {MouseEvent} from "react";

export const Users = () => {

    const onChangeHandler = () => {
        console.log('change processed')
    }
    const onBlurHandler = () => {
        console.log('focus processed')
    }
    const deleteUsers = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.value)
    }
    return (
        <div>
            <h2>Dimych</h2>
            <textarea onChange={onChangeHandler} onBlur={onBlurHandler}></textarea>
            <button name={"deleted"} onClick={deleteUsers}>x</button>
            <button name={"save"} onClick={deleteUsers}>x</button>
        </div>
        )

}