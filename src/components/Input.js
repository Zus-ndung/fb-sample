import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input( { addTodo } ) {

  const handleKeyUp = (event) => {
    if(event.keyCode === 13){
      addTodo(event.target.value);
      event.target.value = ""
    }
  }
  return (
    <div className="panel-block">
      <input 
        type="text"
        className="input"
        onKeyUp = {handleKeyUp}
      />
    </div>
  );
}

export default Input;
