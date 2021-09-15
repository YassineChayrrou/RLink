import React, { useEffect, useState } from "react";
import axios from "axios";
import Control from "../../ros/Control";
import LoginNavbar from "../../LoginNavbar";

const PrivateScreen = ({ history }) => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  const [isAthenticated, setIsAthenticated] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/login");
    }

    const getPrivateData = async () => {
      const config = {
        "Content-Type": "application/json",
      };

      try {
        const { data } = await axios.get("http://127.0.0.1:5000/api/private", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        setPrivateData(data);
        setIsAthenticated(true);
      } catch (error) {
        setIsAthenticated(false);
        localStorage.removeItem("authToken");
        setError("Not authorized please login");
      }
    };

    getPrivateData();
  }, [history]);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/");
  };
  return error ? (
    <span className="text-center text-danger">{error}</span>
  ) : (
    <div>
      {/* <div style={{ width: "100%", backgroundColor: "gray" }}>
        <h4>{privateData}</h4>
        <button onClick={logoutHandler}>logout</button>
      </div> */}
      <LoginNavbar history={history} />
      <Control />
    </div>
  );
};

export default PrivateScreen;
