import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { AppsTwoTone } from "@mui/icons-material";
import Searched from "./Searched";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsTwoTone className="icon" />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://i.pinimg.com/originals/b7/41/21/b741215d216b11b8ff17f27f4bff2a9d.gif"
          alt="google"
        />

        <div className="home__inputContainer">
          <Searched />
        </div>
      </div>
    </div>
  );
}

export default Home;
