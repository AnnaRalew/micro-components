import React, {useState} from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Footer} from "./site/Footer";
import {Body} from "./site/Body";
import {NewComponent} from "./components/NewComponent";
import {Button} from "./components/Button";
import {FullInput} from "./components/FullInput";

type filterType = 'all' | 'ruble' | 'dollar'
function App() {
    // const [money, setMoney] = useState([
    //                                        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    //                                        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    //                                        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    //                                        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    //                                        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    //                                        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    //                                        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    //                                        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    //                                    ])
    //
    // const [filter, setFilter] = useState('all')

    // const [students, setStudents] = useState([
    //                                              {id: 1, name: "James", age: 8},
    //                                              {id: 2, name: "Robert", age: 18},
    //                                              {id: 3, name: "John", age: 28},
    //                                              {id: 4, name: "Michael", age: 38},
    //                                              {id: 5, name: "William", age: 48},
    //                                              {id: 6, name: "David", age: 58},
    //                                              {id: 7, name: "Richard", age: 68},
    //                                              {id: 8, name: "Joseph", age: 78},
    //                                              {id: 9, name: "Thomas", age: 88},
    //                                              {id: 10, name: "Charles", age: 98},
    //                                              {id: 11, name: "Christopher", age: 100},
    //                                          ])
    // const buttonOnClickHandler =(name: string)=>{
    //     console.log(name)
    // }
    // let [a, setA] = useState(0)
    // const onClickHandler=(name:string)=>{
    //     if(name==="Reset"){
    //         setA(0)
    //     }else {
    //         setA(++a)
    //     }
    // }
    // const onClickFilterHandler = (value: filterType) => {
    //     setFilter(value)
    // }
    //
    // let currentMoney = money
    // if(filter === 'ruble') {
    //     currentMoney = currentMoney.filter((m)=> m.banknots === 'RUBLS')
    // } if(filter === 'dollar') {
    //     currentMoney = currentMoney.filter((m)=> m.banknots === 'Dollars')
    // }

    const [message, setMessage] = useState([
                                               {message: 'message1'},
                                               {message: 'message2'},
                                               {message: 'message3'},
                                               {message: 'message4'},
                                               {message: 'message5'}
                                           ])
    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

  return (
   <>
       {/*<Header titleForHeader={"NEW HEADER"}/>*/}
       {/*<Body titleForBody={"NEW BODY"}/>*/}
       {/*<Footer/>*/}
       {/*<NewComponent students={students}/>*/}
       {/*<Button onClickHandler={()=>buttonOnClickHandler("Button1")} name={"Button1"}/>*/}
       {/*<h1>{a}</h1>*/}
       {/*<Button name={"Increment"} onClickHandler={()=>onClickHandler("Increment")}/>*/}
       {/*<Button name={"Reset"} onClickHandler={()=>onClickHandler("Reset")}/>*/}
       {/*<ul>*/}
       {/*    {currentMoney.map((m, index) =>{return (*/}
       {/*        <li>*/}
       {/*            <span> {m.number} </span>*/}
       {/*            <span> {m.value} </span>*/}
       {/*            <span> {m.banknots} </span>*/}
       {/*        </li>*/}
       {/*    )})}*/}
       {/*</ul>*/}
       {/*<div style={{margin: '50px'}}>*/}
       {/*    <Button onClickHandler={()=>onClickFilterHandler('all')} name={'all'}/>*/}
       {/*    <Button onClickHandler={()=>onClickFilterHandler('ruble')} name={'ruble'}/>*/}
       {/*    <Button onClickHandler={()=>onClickFilterHandler('dollar')} name={'dollar'}/>*/}
       {/*</div>*/}


       <div className="App">
           <div>
               <FullInput addMessage={addMessage}/>
           </div>
           {message.map((el, index) => {
               return (
                   <div key={index}>{el.message}</div>
               )
           })}
       </div>
   </>
  );
}

export default App;
