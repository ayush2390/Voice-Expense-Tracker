import { useContext } from 'react'
import { resetCategories, expenseCategories, incomeCategories } from './constants/categories'
import { ExpenseTrackContext } from './context/context'

const useTransactions = (title) => {
    resetCategories()
    const {transactions} = useContext(ExpenseTrackContext)
    const transactionsType = transactions.filter((c) => c.type === title)
    const total = transactionsType.reduce((acc ,currVal) => acc += currVal.amount, 0)
    const categories = title === 'Income' ? incomeCategories : expenseCategories

    transactionsType.forEach((t) => {
      const category = categories.find((c) => c.type === t.category)
        if(category) category.amount += t.amount
    });
    const filteredCategories = categories.filter((c) => c.amount > 0)
    const chartData = {
      datasets: [{
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color)
      }],
      labels: filteredCategories.map((c) => c.type)
    }
  return {total, chartData}
}

export default useTransactions
