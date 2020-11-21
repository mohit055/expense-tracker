import React, { useContext } from "react";

import { Transaction } from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

export const History = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <section className="history">
        <p>History</p>
        <hr />
        <ul className="history-list">
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      </section>
    </>
  );
};
