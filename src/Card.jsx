import { useState } from "react";
function Card({ filtered, deletelist, card, todoUpdate }) {
  const [isShow, setIsShow] = useState(false);
  const openShow = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 mt-5">
        <div className="card " id="card">
          <div className="card-body">
            <p className="card-title">
              <b>Name :</b> {card.title}
            </p>
            <p className="card-title">
              <b>Description :</b> {card.description}
            </p>
            <p className="d-inline">
              <label className="m-3" htmlFor="dropDown">
                <b>Status :</b>
              </label>
            </p>
            <div className="dropdown d-inline">
              <button
                className={`btn btn-outline-dark text-white dropdown-toggle ${
                  card.status === "Completed" ? "btn-success" : "btn-danger"
                }`}
                type="button"
                id="dropDown"
                card-bs-toggle="dropdown"
                onClick={openShow}
              >
                {card.status}&nbsp;
              </button>
              <ul
                className={`dropdown-menu ${isShow ? "show" : ""}`}
                aria-labelledby="dropDown"
              >
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => filtered("Completed", card.id)}
                  >
                    Completed
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => filtered("Not Completed", card.id)}
                  >
                    Not Completed
                  </button>
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-end mt-4 ">
              <div className="edit">
                <button
                  className="btn btn-success"
                  onClick={() =>
                    todoUpdate(card.title, card.description, card.id)
                  }
                >
                  Edit
                </button>
              </div>
              <div className="delete">
                <button
                  className="btn btn-danger"
                  onClick={() => deletelist(card.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
