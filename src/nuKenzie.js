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

  const [AllSelected,setAllSelected]=useState(true)
  const [costSelected,setCostSelected]=useState(false)
  const [entrySelected,setEntrySelected]=useState(false)

  function changeSelection(selection){
    setAllSelected(false)
    setCostSelected(false)
    setEntrySelected(false)
    if(selection==='Todos') setAllSelected(true)
    if(selection==='Despesa') setCostSelected(true)
    if(selection==='Entrada') setEntrySelected(true)
  }


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

              setAllSelected={setAllSelected}
              setCostSelected={setCostSelected}
              setEntrySelected={setEntrySelected}
              
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
              AllSelected={AllSelected}
              costSelected={costSelected}
              entrySelected={entrySelected}
              changeSelection={changeSelection}
            />
          </aside>
        </main>
        
      </div>

  );
}

export default Nukenzie;
