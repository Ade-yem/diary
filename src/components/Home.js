import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ userName, setUserName }) => {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "1234567890") {
        console.log(userName);   
    }
    navigate("/list");
  };

  return (
    <div>
      <h1>ToluwaNiose Diary</h1>
      <form className="home__form" onSubmit={handleSubmit}>
        <label htmlFor="username">Enter your username</label>
        <input
          type="text"
          name="username"
          className="home__input"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
          minLength={6}
        />
        <label htmlFor="password">Enter the password</label>
        <input
          type={"password"}
          name="password"
          className="home_passwd"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
        />
        <button className="home__cta">SIGN IN</button>
      </form>
    </div>
  );
};

export default Home;
