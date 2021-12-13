import { Label } from "@blueprintjs/core"
import React from "react"
import { useRecoilState } from "recoil"
import { todoListFilterState } from '../atom/todoFilterAtom'

export const TodoFilter = () => {

    const [filter, setFilter ] = useRecoilState(todoListFilterState)

    const updateFilter = ({target: {value}}) => {
        setFilter(value);
      };

    return (    
        <div style={{marginBottom: '10px'}}>
           <Label> Filter: </Label>
            <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
        </div>

    )
 
}