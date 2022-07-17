// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, expenses, income} = props

  return (
    <div className="money-manager-container">
      <div className="each-container balance-color">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div>
          <p>Your Balance</p>
          <p testid="balanceAmount">Rs {balance}</p>
        </div>
      </div>

      <div className="each-container income-color">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div>
          <p>Your Income</p>
          <p testid="incomeAmount">Rs {income}</p>
        </div>
      </div>
      <div className="each-container expenses-color">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div>
          <p>Your Expenses</p>
          <p testid="expensesAmount">Rs {expenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
