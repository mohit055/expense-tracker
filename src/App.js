import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { History } from "./components/History";
import { NewTransaction } from "./components/NewTransaction";

import { GlobalProvider } from "./context/GlobalState";

import "./scss/App.scss";

const App = () => {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpense />
        <History />
        <NewTransaction />
      </div>
    </GlobalProvider>
  );
};

export default App;
