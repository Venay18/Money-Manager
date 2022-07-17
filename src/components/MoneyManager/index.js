import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: 0,
    option: transactionTypeOptions[0].optionId,

    income: 0,
    expenses: 0,
    transactionHistory: [],
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({option: event.target.value})
  }

  onClickAddBtn = event => {
    const {title, amount, option} = this.state
    event.preventDefault()
    const transactionList = {
      id: uuidv4(),
      title,
      amount,
      option,
    }

    this.setState(previousState => ({
      transactionHistory: [
        ...previousState.transactionHistory,
        transactionList,
      ],
      title: '',
      amount: '',
    }))
    if (option === 'INCOME') {
      this.setState(previousState => ({
        income: previousState.income + parseInt(amount),
      }))
    }
    if (option === 'EXPENSES') {
      this.setState(previousState => ({
        expenses: previousState.expenses + parseInt(amount),
      }))
    }
  }

  onClickDelete = id => {
    const {transactionHistory} = this.state
    const deletedListItem = transactionHistory.filter(each => each.id === id)
    if (deletedListItem[0].option === 'EXPENSES') {
      this.setState(previousState => ({
        expenses: previousState.expenses - parseInt(deletedListItem[0].amount),
      }))
    }
    if (deletedListItem.option === 'INCOME') {
      this.setState(previousState => ({
        income: previousState.income - parseInt(deletedListItem[0].amount),
      }))
    }
    console.log(deletedListItem)
    this.setState(previousState => ({
      transactionHistory: previousState.transactionHistory.filter(
        each => each.id !== id,
      ),
    }))
  }

  render() {
    const {
      transactionHistory,

      expenses,
      income,
      title,
      option,
      amount,
    } = this.state

    const balance = income - expenses

    return (
      <div className="app-container">
        <div>
          <div>
            <div className="header-container">
              <h1 className="heading">Hi, Richard</h1>
              <p className="para">
                Welcome back to your{' '}
                <span className="span-ele">Money Manager</span>
              </p>
            </div>
            <div className="money-details-container">
              <MoneyDetails
                balance={balance}
                income={income}
                expenses={expenses}
              />
            </div>
            <div className="transaction-history-container">
              <form className="form" onSubmit={this.onClickAddBtn}>
                <h1 className="form-heading">Add Transaction</h1>
                <label htmlFor="title" className="label">
                  TITLE
                </label>
                <input
                  type="text"
                  id="title"
                  className="input"
                  onChange={this.onChangeTitle}
                  value={title}
                />
                <label htmlFor="amount" className="label">
                  AMOUNT
                </label>
                <input
                  type="text"
                  id="amount"
                  className="input"
                  onChange={this.onChangeAmount}
                  value={amount}
                />
                <label htmlFor="type" className="label">
                  TYPE
                </label>
                <select
                  id="type"
                  onChange={this.onChangeType}
                  value={option}
                  className="input"
                >
                  <option value="INCOME">Income</option>
                  <option value="EXPENSES">Expenses</option>
                </select>
                <button type="submit" className="add-btn">
                  Add
                </button>
              </form>
              <div className="history-container">
                <h1 className="history">History</h1>
                <ul className="transactions-table">
                  <li className="history-heading">
                    <p>Title</p>
                    <p>Amount</p>
                    <p>Type</p>
                  </li>
                  {transactionHistory.map(each => (
                    <TransactionItem
                      eachList={each}
                      key={each.id}
                      onDelete={this.onClickDelete}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
