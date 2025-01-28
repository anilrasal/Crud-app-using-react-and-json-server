import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const Edit = () => {
  const { id } = useParams();
  const [inputData, setInputData] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/users/" + id)
      .then((response) => {
        setInputData(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  console.log(inputData);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit is clicked");
    axios.put("/users/" + id, inputData).then((res) => {
      alert("Updated successfully");
      navigate("/");
    });
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-light p-5">
        <h3>Edit</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              className="form-control"
              required
              value={inputData.name}
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              required
              value={inputData.email}
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>
          <div>
            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
