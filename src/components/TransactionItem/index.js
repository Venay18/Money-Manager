// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachList, onDelete} = props
  const {title, amount, option, id} = eachList

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li className="list-item">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{option}</p>
      <button
        type="button"
        testid="delete"
        className="delete-btn"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
