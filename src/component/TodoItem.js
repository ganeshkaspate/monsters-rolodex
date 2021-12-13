import React from "react"
import { Button, Checkbox } from "@blueprintjs/core"
import { useRecoilState } from "recoil"
import { toDoListState } from "../atom/todoListState"


export const TodoItem = ({item}) => {


    const [todoList, setTodoList] = useRecoilState(toDoListState)
    const index = todoList.findIndex((listItem) => listItem === item)

    const onRemoveClick = () => {
        const newList =  removeItemAtIndex(todoList, index)
        setTodoList(newList)
    }

    const removeItemAtIndex = (todoList, index) => {
        return [...todoList.slice(0, index), ...todoList.slice(index + 1)]
    }

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete,
          });
      
          setTodoList(newList);
    }

    const onChange = (event) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: event.target.value,
          });
      
          setTodoList(newList);
    }

    function replaceItemAtIndex(todoList, index, newValue) {
        return [...todoList.slice(0, index), newValue, ...todoList.slice(index + 1)];
      }

    return (
        <div style={{ marginTop: '25px', display:'flex', justifyContent:'center', alignItems:'center' }} >
             <input className="bp3-input .modifier" style={{marginRight: '10px'}}  value={item.text} type="text" onChange={onChange} />
             <Checkbox style={{textAlign: 'center'}} checked={item.isComplete} onChange={toggleItemCompletion}/>
             <Button intent="primary" style={{width: '100px'}} onClick={onRemoveClick}>Remove</Button>
        </div>
    )
}