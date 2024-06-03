import {useState} from "react";
import {Input} from "./Input";
import {Button} from "./Button";

type FullInputType = {
    addMessage: (title: string) => void
}

export const FullInput = (props: FullInputType) => {
    const [title, setTitle] = useState("")

    const addMessage = () => {
        props.addMessage(title.trim())
        setTitle("")
    }

    return (
        <>
            <Input title={title} setTitle={setTitle}/>
            <Button name={"+"} onClickHandler={addMessage}/>
        </>
    )
}