// Write your code here
const TransactionItem = props => {
  const {eachList, onDelete} = props
  const {title, amount, option, id} = eachList

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li>
      <p>{title}</p>
      <p>{amount}</p>
      <p>{option}</p>
      <button type="button" testid="delete" onClick={onClickDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
