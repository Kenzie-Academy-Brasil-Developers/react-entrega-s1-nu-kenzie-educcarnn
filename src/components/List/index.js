import "./style.css";

function List({ listTransactions }) {
  // function Remove(id) {
  // const newList = listTransactions.filter((item) => item !== id);

  //    setListTransactions(newList);
  // }


  function Item() {
    return (
      <ul className="Ul-Father">
        {listTransactions.map((name, index) => (
          <li key={index} className="List">
            {name.type === "Entrada" ? (
              <div className="List-Border-Green">
                <span>{name.description}</span>
                <span>{name.type}</span>
                <div>R$ {name.value}</div>
                <button>Remover</button>
              </div>
            ) : (
              <div className="List-Border-Gray">
                <span className="List">{name.description}</span>
                <span>{name.type}</span>
                <div>R$ {name.value}</div>
                <button>Remover</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  }

 return(
    listTransactions.length > 0 && (
    <Item></Item>)
 )
}
export default List;
