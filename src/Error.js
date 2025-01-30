import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>page not found </h2>
      <button onClick={() => navigate("/")}>Home page</button>
    </div>
  );
};

export default Error;
