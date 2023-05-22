import style from './AdminNavBar.module.css'

const AdminNavBar = ({setPage, page}) => {
  return (
    <div style={{
        width: '100%',
        padding: '1rem',
       
    }}>
      <ul className={style.wrapper}>
        <li
            className={page === 'dashboard' ? style.active : ''}
            onClick={() => setPage('dashboard')}
        >Dashboard</li>
        <li
            className={page === 'users' ? style.active : ''}
            onClick={() => setPage('users')}
        >Users</li>
        <li
            className={page === 'comments' ? style.active : ''}
            onClick={() => setPage('comments')}
        >Comments</li>
      </ul>
      <div className={style.line}></div>
    </div>
  )
}

export default AdminNavBar
