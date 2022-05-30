import "./style.css";
import Resumofinanceiro from "../../imgs/Filters/Resumofinanceiro.svg"
import ButtonDisable from "../../imgs/Filters/ButtonDisable.svg"
import ButtonDisable1 from "../../imgs/Filters/ButtonDisable1.svg"
import ButtonDisable2 from '../../imgs/Filters/ButtonDisable2.svg'


function Filters({listTransactions, setListTransactions}) {
    console.log(listTransactions)
  function Todos(){
    const listTransactionsTodos = listTransactions.filter((fruits) => {
      return fruits.type === 'Saída' 
    })

    setListTransactions([...listTransactions, listTransactionsTodos])

  }
  // New Alteration

  function Entrada(){
    const listTransactionsEntrada = listTransactions.filter((fruits) => {
      
      return fruits.type === 'Entrada'
    })

    setListTransactions([...listTransactions], listTransactionsEntrada)
 
  }

  function Saida(){
    const listTransactionsSaida =  listTransactions.filter((fruits) => {
      return fruits.type === 'Saída'
  })

    setListTransactions([{...listTransactions, listTransactionsSaida}])
  }
  return (
    <>
      <div className="Img-Header">
          <img src={Resumofinanceiro} alt="Texto resumo financeiro"></img>

          <ul className="Ul-Father-Button">
              <li className="Li-Style-Button">
              <button className="Border-Style" >
                  <img src={ButtonDisable} alt="Botão Todos" onClick={Todos}/></button>
              </li>
              <li className="Li-Style-Button">
              <button className="Border-Style" >
                  <img src={ButtonDisable1} alt="Botão Entrada"  onClick={Entrada}/></button>
              </li>
              <li className="Li-Style-Button">
              <button className="Border-Style" >
                  <img src={ButtonDisable2} alt="Botão Despesa" onClick={() => Saida()}/></button>
              </li>
          </ul>
      </div>
    </>
  );
}

export default Filters;
