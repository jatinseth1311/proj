import React, { Component } from "react";
import LoginService from "../services/LoginService";
import {
  Button,
  Typography
} from "@material-ui/core";
class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employeeId: "",
      password: "",
      error: "",
    };
  }
  handleLogin() {
    let emp = {
      employeeId: this.state.employeeId,
      password: this.state.password,
    };
    LoginService.loginUser(emp)
      .then((res) => {
        console.log(res.data);
        if (res.data === "Login Success") {
          this.props.history.push("/login");
        }
      })
      .catch((error) => {
        this.setState({
          error: error.response.data,
        });
        this.props.history.push("/");
      });
  }
  render() {
    const buttonStyle = { margin: "24px 0" };
    return (
      <div>
        <div>
        <h4>Please enter your credentials to login.</h4>
      <br />
          <input
            type="text"
            placeholder="Employee ID"
            onChange={(e) => {
              this.setState({ employeeId: e.target.value });
            }}
          />{" "}
          <br />
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
          />
          <br />
          <br />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            
            style={buttonStyle}
            onClick={() => this.handleLogin()}
          >
            Login
          </Button>
          <br></br>
          <Typography variant="caption" color="error">
            {this.state.error}
          </Typography>
        </div>
      </div>
    );
  }
}
export default Auth;
