import { Button, Label } from "@blueprintjs/core"
import { useState } from "react"
import { useSetRecoilState } from "recoil"
import { toDoListState } from '../atom/todoListState'

export const TodoCreator = () => {

    const [inputValue, setInputValue] = useState('');

    const setTodoList = useSetRecoilState(toDoListState)

    const onChange = (event) => {
        setInputValue(event.target.value)
    }

    const addTodo = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            },
        ]);
        setInputValue('');
    };

    let id = 0;
    const getId = () => {
        return id++
    }


    return (
        <div>
            <input style={{ marginRight: '10px' }} className="bp3-input .modifier" value={inputValue} type="text" placeholder="Text input" dir="auto" onChange={onChange} />
            <Button intent="primary" style={{ width: '100px' }} onClick={addTodo}>Add</Button>
        </div>
    )

}