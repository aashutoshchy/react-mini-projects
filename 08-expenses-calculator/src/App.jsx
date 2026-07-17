import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState();
  const [expenses, setExpenses] = useState([]);
  const [date, setDate] = useState("");

  const calculateExpenses = () => {
    setExpenses((expn) => [...expn, { title, amount, date }]);
  };

  const total = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  const resetForm = () => {
    setTitle("");
  };

  return (
    <>
      <header className="h-[10vh] flex items-center justify-center">
        <h1 className="text-2xl font-bold">Expenses Tracker</h1>
      </header>
      <div className="flex justify-between items-center px-20 py-5">
        <div>
          <p>Total Expenses</p>
          <p className="text-5xl font-bold">{total}</p>
        </div>
        <div>
          <button className="bg-black hover:bg-gray-700 text-white font-semibold px-5 py-2 rounded-3xl">
            Show History
          </button>
        </div>
      </div>
      <main className="px-20 py-10">
        <p className="font-semibold text-2xl">Add New Transaction</p>
        <div className="w-full bg-black h-0.5 my-4"></div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            calculateExpenses();
            resetForm();
          }}
        >
          <div className="space-x-2 flex gap-5 my-2">
            <label htmlFor="" className="font-semibold text-xl">
              Title:
            </label>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              className="outline-none border-2 px-2  flex-1"
            />
          </div>
          <div className="space-x-2 flex gap-5 my-2">
            <label htmlFor="" className="font-semibold text-xl">
              Amount:
            </label>
            <input
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              type="number"
              className="outline-none border-2 px-2 flex-1"
            />
          </div>
          <div className="space-x-2 flex gap-5 my-2">
            <label htmlFor="" className="font-semibold text-xl">
              Date:
            </label>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="outline-none border-2 px-2"
            />
          </div>
          <input
            type="submit"
            className="bg-black hover:bg-gray-700 text-white font-semibold px-5 py-2 rounded-3xl my-5"
          />
        </form>
      </main>
      <div className="bg-black fixed inset-0 flex wrap justify-center gap-10 py-20">
        {expenses.map((index, expense) => (
          <div
            key={index}
            className="w-150 h-11 bg-red-50 flex justify-between items-center rounded-xl py-7 px-5"
          >
            <p className="font-bold text-xl">{expense.title}</p>
            <div>
              <p className="font-semibold ">{expense.amount}</p>
              <p className="text-sm">2025-07-15</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
