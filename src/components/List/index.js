import "./style.css";
import ButtonTrash from "../../imgs/ButtonTrash.svg";

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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    marginLeft: "1rem",
                  }}
                >
                  <span>{name.description}</span>
                  <span>{name.type}</span>
                </div>
                <div>
                  <div
                    style={{
                      position: "relative",
                      marginTop: "-2rem",
                      marginLeft: "22rem",
                    }}
                  >
                    R$ {name.value}
                  </div>
                </div>
                <div style={{ marginTop: "1rem" }}>
                  <button
                    src={ButtonTrash}
                    style={{
                      marginLeft: "28rem",
                      marginTop: "-3rem",
                      position: "absolute",
                    }}
                  >
                    <img src={ButtonTrash} alt="Botão Todos" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="List-Border-Gray">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    marginLeft: "1rem",
                  }}
                >
                  <span>{name.description}</span>
                  <span>{name.type}</span>
                </div>
                <div>
                  <div
                    style={{
                      position: "relative",
                      marginTop: "-2rem",
                      marginLeft: "22rem",
                    }}
                  >
                    R$ {name.value}
                  </div>
                </div>
                <div style={{ marginTop: "1rem" }}>
                  <button
                    src={ButtonTrash}
                    style={{
                      marginLeft: "28rem",
                      marginTop: "-3rem",
                      position: "absolute",
                    }}
                  >
                    <img src={ButtonTrash} alt="Botão Todos" />
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  }

  return listTransactions.length > 0 && <Item></Item>;
}
export default List;
