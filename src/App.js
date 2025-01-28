import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/users")
      .then((response) => {
        setColumns(Object.keys(response.data[0]));
        setRecords(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleUpdate = (id) => {
    console.log("Update is clicked");
    navigate("/update/" + id);
  };

  const handleDelete = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this record?"
    );
    if (confirm) {
      axios.delete("/users/" + id).then((response) => {
        console.log("Deleted the record");
        alert("Deleted");
        window.location.reload();
      });
      console.log("Delete is clicked");
    } else {
      console.log("Delete cancelled");
    }
  };
  return (
    <div className="container mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            {columns.map((columns, index) => (
              <th key={index}>{columns}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((records, index) => (
            <tr key={index}>
              <td>{records.id}</td>
              <td>{records.name}</td>
              <td>{records.email}</td>
              <td>
                <Button
                  variant="outline-success"
                  onClick={() => handleUpdate(records.id)}
                >
                  Update
                </Button>{" "}
                <Button
                  variant="outline-danger"
                  onClick={() => handleDelete(records.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
