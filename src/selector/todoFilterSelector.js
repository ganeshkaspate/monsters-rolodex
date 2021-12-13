import { selector, useRecoilValue } from 'recoil'
import { todoListFilterState  } from '../atom/todoFilterAtom'
import { toDoListState  } from '../atom/todoListState'
 export const todoListFilterSelector = selector({
    key: 'todoListFilterSelector',
    get: ({get}) => {
        const filterCriteria = get(todoListFilterState);
        const toDoList = get(toDoListState)
        switch (filterCriteria) {
            case 'Show Completed':
              return toDoList.filter((item) => item.isComplete);
            case 'Show Uncompleted':
              return toDoList.filter((item) => !item.isComplete);
            default:
              return toDoList;
          }
    }
})