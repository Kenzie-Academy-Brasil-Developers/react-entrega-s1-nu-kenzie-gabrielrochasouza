import "./App.css";
import "./global.css";
import { useState } from "react";

import Header from "./components/Header";
import TotalMoney from "./components/TotalMoney";
import Form from "./components/Form";
import List from "./components/List";


function Nukenzie({setIniciated}) {
  const [listTransactions, setListTransaction] = useState([]);
  const [filterList, setFilterList] = useState(listTransactions);


  const removeFromList = (index, id) => {
    const newArrList = [...listTransactions];
    const newArrFilter = [...filterList];

    const indexFilter = filterList.findIndex((elem) => elem.id === id);
    newArrFilter.splice(indexFilter, 1);

    const indexList = listTransactions.findIndex((elem) => elem.id === id);
    newArrList.splice(indexList, 1);

    setListTransaction(newArrList);
    setFilterList(newArrFilter);
  };

  return (


      <div className="App">
        
        <Header setIniciated={setIniciated} />
        <main className="App-header">
          <div className="App-col-left">
            <Form
              listTransactions={listTransactions}
              setListTransaction={setListTransaction}
              filterList={filterList}
              setFilterList={setFilterList}
            />
            {listTransactions.length !== 0 && (
              <TotalMoney
                listTransactions={listTransactions}
                setListTransaction={setListTransaction}
                filterList={filterList}
                setFilterList={setFilterList}
              />
            )}
          </div>
          <aside>
            <List
              listTransactions={listTransactions}
              setListTransaction={setListTransaction}
              removeFromList={removeFromList}
              filterList={filterList}
              setFilterList={setFilterList}
            />
          </aside>
        </main>
        
      </div>

  );
}

export default Nukenzie;
