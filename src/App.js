import React,{useState} from 'react';
import ExpenseAdder from './components/ExpenseAdder/ExpenseAdder';
import Expenses from './components/Expenses/Expenses';
let temp=[
  {
    id:'e1',
    title:'School Fee',
    amount:250,
    date:new Date(2021,3,12)
  },
  {
    id:'e2',
    title:'Books',
    amount:220,
    date:new Date(2021,2,12)
  },
  {
    id:'e3',
    title:'Hostel',
    amount:700,
    date:new Date(2021,5,12)
  },
  {
    id:'e4',
    title:'Food',
    amount:500,
    date:new Date(2021,5,15)
  }
];

const App = () =>{
  const[expenses,setExpenses]=useState(temp);
  
  // let expenseDate=new Date(2021, 3, 28);
  // let expenseTitle="School Fee";
  // let expenseAmount = 300;
  const addExpenseHandler=(expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  };
  return (
    <div>
      <ExpenseAdder onAddExpense = {addExpenseHandler}/>
      <Expenses item={expenses}/>
    </div>
  );
}
export default App;