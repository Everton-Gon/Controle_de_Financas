import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Page404 } from "./Page404"
import { Home } from "./home"
import { GlobalStyle } from "./GlobalStyle"
import { Resumo } from "./Components/Resumo"
import { Formulario } from "./Components/Formulario"
import { useEffect, useState } from "react"

function App() {
  const data = localStorage.getItem("transactions")
  const [transactionsList, setTransactionsList] = useState(
  data ? JSON.parse(data) : []
  )

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(()=>{
      const  amountExpense = transactionsList
          .filter((item) => item.expense)
          .map((transaction) => Number(transaction.amount))
      const amountIncome = transactionsList
          .filter((item) => !item.expense)
          .map((transaction) => Number(transaction.amount))

      const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
      const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);
      
      const total = Math.abs(income - expense).toFixed(2);

      setIncome(`R$ ${income}`);
      setExpense(`R$ ${expense}`);
      setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
      }, [transactionsList])

      const handleAdd = (transaction) => {
      const newArrayTransactions = [...transactionsList, transaction];

      setTransactionsList(newArrayTransactions);

      localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
      }
  
 
  return (
    <>
    <GlobalStyle/>
    <Home/>
    <Resumo income={income} expense={expense} total={total}/>
    <Formulario handleAdd={handleAdd} transactionsList={transactionsList}
    setTransactionsList={setTransactionsList}/>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </BrowserRouter> */}
    </>
    )
  }

export default App
