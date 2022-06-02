import "./App.css";
import HeaderCard from "./components/Header";
import Form from "./components/Form";
import { useState } from "react";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import NoItems from "./components/NoItems";
import { Filters } from "./components/Filters";
import ShowFilters from "./components/ShowFilters";


function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [filterTransactions, setfilterTransactions] = useState([]);


  return (
    <div className="App">
      <div className="Container">
        <div>
          <HeaderCard></HeaderCard>
          <Filters
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            filterTransactions={filterTransactions}
            setfilterTransactions={setfilterTransactions}
          ></Filters>
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          ></Form>
          <></>
          {listTransactions.length > 0 ? (
           <TotalMoney listTransactions={listTransactions}></TotalMoney>
          ) : (
            <>
              <NoItems></NoItems>
            </>
          )}
          <>
           
          {filterTransactions.length > 0 ? (
            <ShowFilters filterTransactions={filterTransactions}/>
          ) :
          (
            <>
           
           <List listTransactions={listTransactions}></List>
           </>)}
          </>

        
        </div>
      </div>
    </div>
  );
}

export default App;
