import {FC} from "react";

type NewComponentType = {
    students: Array<Student>
}

type Student = {
    id: number
    name: string
    age: number
}

export const NewComponent: FC<NewComponentType> = (props) => {

    return (
        <div>
            <ul>
                {props.students.map((st, index)=>(
                    <li key={st.id}>
                        <span>{st.id}</span>
                        <span> {st.name}</span>
                        <span> {st.age}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}