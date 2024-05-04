import {FC} from "react";

type BodyPropsType = {
    titleForBody: string
}
export const Body: FC<BodyPropsType> = (props) => {
    return (
        <>{props.titleForBody}</>
    )
}