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
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

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
            <table>
                <tr>
                    <th><b>Manufacturer</b></th>
                    <th><b>Model</b></th>
                </tr>
                {topCars.map((car, index)=>{
                    return (
                        <tr>
                            <td>{car.manufacturer}</td>
                            <td>{car.model}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}