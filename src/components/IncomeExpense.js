import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  console.log(income, expense);

  return (
    <>
      <section className="income-expense">
        <div className="income">
          <p>Income</p>
          <h3>+${Math.abs(income)}</h3>
        </div>
        <div className="expense">
          <p>Expense</p>
          <h3>-${Math.abs(expense)}</h3>
        </div>
      </section>
    </>
  );
};
