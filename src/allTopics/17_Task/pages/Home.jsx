import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />

      <h2 style={{ padding: "20px", textAlign: "center" }}>Home Page</h2>
      <p style={{padding:"10px" , textAlign:"center", color:"gray"}}>Welcome User</p>
    </div>
  );
};

export default Home;
