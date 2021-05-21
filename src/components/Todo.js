import React, { useState } from 'react';
/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useFbStorage from '../hooks/fbStorage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  const [items, putItems, clearItems] = useFbStorage();

  const [filter, setFilter] = useState('ALL');
  
  const itemsFilter = items.filter(item => {
    if (filter === 'ALL') return true
    if (filter === 'TODO') return !item.done
    if (filter === 'DONE') return item.done
  })


  
  const addTodo = (data) => {
    putItems([...items, {key: getKey(), text: data, done: false}]);
  }
  
  const changeStatus = (data) => {
     const newItems = items.map(item => {
      return item.key === data.key ? {...item, done: !item.done} : item
    })
    putItems(newItems);
  }
  
  const changeFilterHandler = (value) => {
    setFilter(value)
  }

  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <Input addTodo={addTodo}/>
      <Filter onChange={changeFilterHandler} value={filter} />
      {itemsFilter.map(item => (
        <TodoItem item={item} key={item.key} changeStatus={() =>  changeStatus(item)}/>
      ))}
      <div className="panel-block">
         {itemsFilter.length} items
      </div>
       <div className='panel-block'>
        <button className='button is-fullwidth is-light' onClick={clearItems}>全てのTodoを削除</button>
      </div>
    </div>
  );
}

export default Todo;