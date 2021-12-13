import logo from './logo.svg';
import './App.css';
import { atom, useRecoilState, selector, useRecoilValue, useSetRecoilState } from 'recoil';
import React, { useState } from 'react';
import { Button } from "@blueprintjs/core";
import { TodoCreator } from '../src/component/TodoCreator'
import { TodoItem  } from '../src/component/TodoItem'
import { todoListFilterSelector } from '../src/selector/todoFilterSelector'
import { TodoFilter } from '../src/component/TodoFilter'


function App() {

  const todoList = useRecoilValue(todoListFilterSelector)

  return (
    <div className="App" style={{marginTop: '50px'}}>
        <TodoFilter/>
        <TodoCreator/>
        {
          todoList.length > 0  && todoList.map((todoItem) => (
            <TodoItem item={todoItem} key={todoItem.id}></TodoItem>
          ))
        }
    </div>
  );
}


export default App;
 