/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter({ value, onChange }) {
  
  const clickHandler = (key, e) => {
    e.preventDefault()
    onChange(key)
  }
  
  return (
    <div className="panel-tabs">
      <a 
        href='#'
        className={value === 'ALL' ? 'is-active': ''}
        onClick={clickHandler.bind(null, 'ALL')}
      >全て</a>
      <a 
        href='#'
        className={value === 'TODO' ? 'is-active': ''}
        onClick={clickHandler.bind(null, 'TODO')}
      >未完了</a>
      <a 
        href='#'
        className={value === 'DONE' ? 'is-active': ''}
        onClick={clickHandler.bind(null, 'DONE')}
      >完了済み</a>
    </div>
  );
}

export default Filter