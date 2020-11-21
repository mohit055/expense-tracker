import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const NewTransaction = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState();

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      title,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };

  return (
    <>
      <section className="new-transaction">
        <p>Add New Transaction</p>
        <hr />
        <form className="adding-transaction" onSubmit={onSubmit}>
          <div className="title">
            <label htmlFor="text">Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="amount">
            <label htmlFor="amount">Amount</label>
            <p className="comment">Positive : Income | Negative : Expense</p>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <button className="add-btn">Add Transaction</button>
        </form>
      </section>
    </>
  );
};
