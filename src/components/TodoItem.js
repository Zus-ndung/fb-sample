/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
const handleClickChecBox = (key) => {
};

function TodoItem({item, changeStatus} ) {
  return (
    <label className={`panel-block ${item.done? 'has-text-grey-light': ""}`}>
            <input type="checkbox" checked={item.done} onClick={changeStatus}/>
            {item.text}
    </label>
  );
}

export default TodoItem;