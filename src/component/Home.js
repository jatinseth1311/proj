import React from "react";
import { Jumbotron, Container } from "reactstrap";
import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import LoginService from "../services/LoginService";

const handleLogoutClick = () => {
  LoginService.logoutUser();
};

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  const buttonStyle = { margin: "24px 0" };
  return (
    <div>
      <Jumbotron>
        <h1>Welcome To Feedback Managment Application</h1>
        <p className="display-5">
          This website is developed for managing feedbacks of different trainer
          and managing different course and program in an organization.
        </p>
      </Jumbotron>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        style={buttonStyle}
        onClick={handleLogoutClick}
        href="http://localhost:3000">
      
        Logout
      </Button>
    </div>
  );
};

export default Home;
