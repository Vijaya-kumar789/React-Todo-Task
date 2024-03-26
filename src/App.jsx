import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Head from "./Head";
import Card from "./Card";
import { useState } from "react";

function App() {
  const [allTodo, setAllTodo] = useState([]);
  const [todoName, setTodoName] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [addButton, setAddButton] = useState("Add");
  const [editcardId, setEditcardId] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const addlist = (todoName, todoDescription) => {
    if (addButton === "Add") {
      let todo = {
        title: todoName,
        description: todoDescription,
        id: Date.now(),
        status: "Not Completed",
      };
      setAllTodo([...allTodo, todo]);
    } else if (addButton === "Update") {
      const UpdateAllTodo = allTodo.map((card) =>
        card.id === editcardId
          ? { ...card, title: todoName, description: todoDescription }
          : card
      );
      setAllTodo(UpdateAllTodo);
      setAddButton("Add");
      setEditcardId(null);
    }
    setTodoName("");
    setTodoDescription("");
  };
  let todoUpdate = (name, des, id) => {
    setAddButton("Update");
    setTodoName(name);
    setTodoDescription(des);
    setEditcardId(id);
  };

  let deletelist = (id) => {
    let delTodo = allTodo.filter((ele) => ele.id !== id);
    setAllTodo([...delTodo]);
  };

  let filtered = (data, id) => {
    let UpdateAllTodo = allTodo.map((card) =>
      card.id === id ? { ...card, status: data } : card
    );
    setAllTodo(UpdateAllTodo);
  };

  let filteredCards = allTodo.filter((card) => {
    if (selectedFilter === "All") {
      return card;
    } else {
      return card.status === selectedFilter;
    }
  });

  return (
    <>
      <Head
        addlist={addlist}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        setTodoName={setTodoName}
        todoName={todoName}
        allTodo={allTodo}
        todoDescription={todoDescription}
        setTodoDescription={setTodoDescription}
        addButton={addButton}
      />
      <div className=" container ">
        <div className="row">
          {filteredCards.length === 0 ? (
            <h3 className="h3 text-center mb-4">...Todo is Empty...</h3>
          ) : (
            filteredCards.map((card) => {
              return (
                <Card
                  card={card}
                  key={card.id}
                  todoUpdate={todoUpdate}
                  deletelist={deletelist}
                  filtered={filtered}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default App;
