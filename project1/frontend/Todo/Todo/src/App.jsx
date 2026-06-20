import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import axios from "axios";
import { useState } from "react";
function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const callApi = async () => {
    try {
      const Data = await axios.get("http://localhost:8000");
      console.log(Data);
    } catch (error) {
      console.log("Error was detected", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login Page</h1>
        <div className="input-field">
          <input
            type="text"
            id="userName"
            placeholder=" "
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label htmlFor="userName">Username</label>
        </div>

        <div className="input-field">
          <input
            type="password"
            id="password"
            placeholder=" "
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button className="btn btn-primary login-button" onClick={callApi}>
          Click
        </button>
      </div>
    </div>
  );
}
export default App;
