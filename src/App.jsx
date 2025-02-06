import { useState } from "react";
import deletee from "./assets/deletee.svg";
import checkk from "./assets/checkk.svg";
import add from "./assets/addd.svg";
import returnn from "./assets/return.svg";
import "./App.css";

function App() {
  const [values, setValue] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [todo, setTodo] = useState(""); 

  function handleAdd(event) {
    event.preventDefault();
    if (todo.length >= 2) {
      setValue([...values, todo]);
      setTodo("");
    }
  }

  function handleDelete(index, fromCompleted = false) {
    if (fromCompleted) {
      const updatedCompleted = completed.filter((_, i) => i !== index);
      setCompleted(updatedCompleted);
    } else {
      const updatedValues = values.filter((_, i) => i !== index);
      setValue(updatedValues);
    }
  }

  function handleCheck(index) {
    const taskToComplete = values[index];
    const updatedValues = values.filter((_, i) => i !== index);
    setValue(updatedValues);
    setCompleted([...completed, taskToComplete]);
  }

  function handleReturn(index) {
    const taskToReturn = completed[index];
    const updatedCompleted = completed.filter((_, i) => i !== index);
    setCompleted(updatedCompleted);
    setValue([...values, taskToReturn]);
  }

  return (
    <div>
      <div className="container">
        <header>
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            placeholder="Yangi vazifani kiriting..."
          />
          <button onClick={handleAdd} className="plus">
            <img className="delll" src={add} alt="add btn" />
          </button>
        </header>

        <div className="lists">
          <h2 style={{ display: values.length ? "inline" : "none" }}>
            Vazifalar - <span>{values.length}</span>
          </h2>
          {values.map((value, index) => (
            <div key={index} className="card">
              <p>{value}</p>
              <div className="btns">
                <button className="checkk" onClick={() => handleCheck(index)}>
                  <img src={checkk} alt="Tugallash" />
                </button>
                <button className="deletee" onClick={() => handleDelete(index)}>
                  <img src={deletee} alt="delete btn" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="lists">
          <h3 style={{ display: completed.length ? "inline" : "none" }}>
            Tugallanganlar - <span>{completed.length}</span>
          </h3>
          {completed.map((value, index) => (
            <div key={index} className="card">
              <p>{value}</p>
              <div className="btns">
                <button className="returnn" onClick={() => handleReturn(index)}>
                  <img src={returnn} alt="return btn" />
                </button>
                <button
                  className="deletee"
                  onClick={() => handleDelete(index, true)}
                >
                  <img src={deletee} alt="O'chirish" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;