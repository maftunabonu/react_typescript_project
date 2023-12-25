import { useEffect, useState } from "react";
import "./App.css";
import Expense from "./expense-tracker/components/Expense";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {
  const [category, setCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: "1", description: "Nike air", amount: 3, category: "Utilities" },
    { id: "2", description: "Nike woman", amount: 4, category: "Groceries" },
    { id: "3", description: "Zara coat", amount: 3, category: "Utilities" },
    { id: "4", description: "Hoodie", amount: 4, category: "Entertainment" },
  ]);

  const visibleExpenses = category
    ? expenses.filter((expense) => expense.category === category)
    : expenses;

  const onDelete = (id: string) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };
  useEffect(() => {
    console.log(expenses);
  }, []);

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(newExpense) =>
            setExpenses([
              ...expenses,
              {
                ...newExpense,
                id:
                  Date.now().toString(36) +
                  Math.random().toString(36).substring(2),
              },
            ])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelect={(category) => setCategory(category)} />
      </div>
      <Expense expenses={visibleExpenses} onDelete={onDelete} />
    </div>
  );
}

export default App;
