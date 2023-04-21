import React, { useState } from "react";
import "./Mainpage.css";


const MainPage = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setloading] = useState(false);
  const showUserData = async () => {
    setloading(true);
    const information = await fetch("https://reqres.in/api/users?page=1");
    let output = await information.json();
    output = output.data;
    setUserData(output);
    setloading(false);
  };

  return (
    <>
      <div className="actions">
        <button type="submit" onClick={showUserData}>
          Get-User-Data
        </button>
      </div>
      <div className="grid">
        {
        
          loading ? (
            <div class="loader">
              <span></span>
              <span></span>
              <span></span>
              <h2>loading........</h2>
            </div>
          ) : (
            userData.map((usersData) => {
              return (
                <div key={usersData.id} className="grid">
                  <div className="main">
                    <div className="card">
                      <img
                        src={usersData.avatar}
                        alt="Avatar"
                        style={{ width: "100%" }}
                      />
                      <div className="container">
                        <h4>
                          <b>
                            {usersData.first_name} {usersData.last_name}
                          </b>
                        </h4>
                        <p>{usersData.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )
        }
      </div>
    </>
  );
};

export default MainPage;