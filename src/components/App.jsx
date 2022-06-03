import React from "react";
import ReactDOM from "react-dom";
let ch = 0;
function App(prop) {
  if (ch === 0) {
    ch = 1;
    return (
      <div>
        <h1 className="heading">My Contacts</h1>
        <div className="card">
          <div className="top">
            <h2 className="name">{prop.name}</h2>
            <img className="circle-img" src={prop.image} alt="avatar_img" />
          </div>
          <div className="bottom">
            <p className="info">{prop.contact}</p>
            <p className="info">{prop.email}</p>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div>
        <div className="card">
          <div className="top">
            <h2 className="name">{prop.name}</h2>
            <img className="circle-img" src={prop.image} alt="avatar_img" />
          </div>
          <div className="bottom">
            <p className="info">{prop.contact}</p>
            <p className="info">{prop.email}</p>
          </div>
        </div>
      </div>
    );
}

export default App;
