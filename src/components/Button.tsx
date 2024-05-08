import React, {FC, MouseEventHandler} from "react";

type ButtonType = {
    name: string
    onClickHandler: () => void
}
export const Button: FC<ButtonType> = (props) => {
    return (
        <button onClick={props.onClickHandler}>{props.name}</button>
    )
}