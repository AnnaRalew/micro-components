import {ChangeEventHandler} from "react";

type InputType = {
    setTitle: (title: string) => void
    title: string
}
export const Input = (props: InputType) => {

    const onchangeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }
    return (
        <input type="text" value={props.title} onChange={onchangeTitleHandler}/>
    )
}