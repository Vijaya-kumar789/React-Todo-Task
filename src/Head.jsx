import { useState } from "react";

function Head({
  addlist,
  addButton,
  setTodoName,
  selectedFilter,
  setSelectedFilter,
  todoName,
  todoDescription,
  setTodoDescription,
  allTodo,
}) {
  const [isShow, setIsShow] = useState(false);
  const openShow = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="container text-center mt-4">
      <h1>My Todo</h1>
      <div className="row mt-5">
        <div className="col-12 col-md-6 col-lg-5 mb-3  ">
          <input
            type="text"
            placeholder=" Todo Name..."
            style={{ width: "100%" }}
            value={todoName}
            onChange={(e) => {
              setTodoName(e.target.value);
            }}
            required
            minLength="5"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-5 mb-3 ">
          <input
            type="text"
            placeholder=" Todo Description..."
            style={{ width: "100%" }}
            value={todoDescription}
            onChange={(e) => {
              setTodoDescription(e.target.value);
            }}
            required
          />
        </div>
        <div className="col-12 col-md-6 col-lg-2 mb-3">
          <button
            id="addButton"
            type="button"
            disabled={todoName === "" || todoDescription === ""}
            className={`btn w-75 ${
              addButton === "Add" ? "btn-success" : "btn-primary"
            }`}
            onClick={() => addlist(todoName, todoDescription)}
          >
            {addButton}
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-5">
        <h6>
          <span>My Todos</span>
        </h6>
        <h6>
          <span>
            Status Filter : &nbsp;
            <div className="dropdown d-inline">
              <button
                className={`btn btn-outline-dark text-white dropdown-toggle 
                ${
                  selectedFilter === "All"
                    ? "btn-dark"
                    : selectedFilter === "Completed"
                    ? "btn-success"
                    : "btn-danger"
                }`}
                type="button"
                id="dropDown"
                data-bs-toggle="dropdown"
                onClick={openShow}
              >
                {selectedFilter}&nbsp;
              </button>
              <ul
                className={`dropdown-menu ${isShow ? "show" : ""}`}
                aria-labelledby="dropDown"
              >
                <li>
                  <button
                    className="dropdown-item btn-primary"
                    type="button"
                    onClick={() => setSelectedFilter("All")}
                  >
                    All
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => setSelectedFilter("Completed")}
                  >
                    Completed
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => setSelectedFilter("Not Completed")}
                  >
                    Not Completed
                  </button>
                </li>
              </ul>
            </div>
          </span>
        </h6>
      </div>
    </div>
  );
}

export default Head;
