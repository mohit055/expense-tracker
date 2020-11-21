import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={sign === "-" ? "minus" : "plus"}>
      <button className="del-btn" onClick={() => deleteTransaction(transaction.id)}>
        &#10006;
      </button>
      <p>{transaction.title}</p>
      <h5>
        {sign}${Math.abs(transaction.amount)}
      </h5>
    </li>
  );
};
