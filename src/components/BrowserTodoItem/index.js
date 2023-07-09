import './index.css'

const BrowserTodoItem = props => {
  const {eachItem, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem

  const deleteListItem = () => {
    deleteHistory(id)
  }
  return (
    <li className="listItem-container">
      <div className="history-title-container">
        <p>{timeAccessed}</p>
        <img src={logoUrl} className="todo-logo" alt="domain logo" />
        <p className="title-para">{title}</p>
        <p className="domain-para">{domainUrl}</p>
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={deleteListItem}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-logo"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default BrowserTodoItem
