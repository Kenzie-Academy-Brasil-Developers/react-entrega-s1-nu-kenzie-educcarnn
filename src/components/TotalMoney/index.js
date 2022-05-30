import "./style.css";

function TotalMoney({listTransactions}) {
  function Sum() {
    const SumTotal = listTransactions
    .filter(({type}) => type === 'Entrada')
    .reduce((acumulador, item) => Number(acumulador) + Number(item.value), 0)

    return (
      <>
       <div className="Reduce"> 
       <span>Valor total R${SumTotal}</span>
       <span>Valor se refere ao saldo</span>
       </div>
      </>
     
    )
  }

  return(
      <Sum></Sum>
  )
 
}
export default TotalMoney;
