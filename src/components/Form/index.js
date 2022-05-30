import { useState } from "react";
import "./style.css";

function Form({ listTransactions, setListTransactions }) {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [value, setValue] = useState("");

  function prevent(e) {
    e.preventDefault();
  }

  function Dates() {
    const items = {
      description,
      type,
      value,
    };

    setListTransactions([...listTransactions, items]);
  }

  return (
    <div className="Form">
      <form onSubmit={prevent} className="Form-Items">
        <div className="Form-Descrition">
          <span>Descrição</span>
          <input
            type="text"
            placeholder="Digite aqui sua descrição"
            onChange={(event) => setDescription(event.target.value)}
            className='Input-Descrition'
          />
          <span>Ex: Compra de roupas</span>
        </div>
        <div className="Form-Value">
          <span>Valor</span>
          <input
            type="number"
            placeholder="R$"
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <div className="Form-Select">
          <span>Tipo de valor</span>
          <select onChange={(event) => setType(event.target.value)}>
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </div>
        <div className="Div-Button">
          <button type="submit" className="button" onClick={Dates}>
            Inserir valor
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
