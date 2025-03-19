import React, { useState } from "react";
import {
  LoginBox,
  LoginDrop,
  Login,
  LoginContent,
  LoginTitle,
  InputBox,
  Input,
  Button,
  Signup,
} from "./loginPage.styles";
import { Link, Navigate } from "react-router-dom";
import loginApi from "../../api/loginApi";

const LoginPage = () => {
  const [PhoneNo, setPhoneNo] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
  
    try {
      const response = await loginApi.loginVendor(phone, password);
      console.log(response);
  
      if (response.role === "vendor") {
        Navigate("/signup");
        return;
      }
  
      const adminResponse = await loginApi.loginAdmin(PhoneNo, password);
      console.log(adminResponse);
  
      if (adminResponse.role === "admin") {
        Navigate("/admin");
      } else {
        setError("Invalid Credentials");
      }
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Login>
      <LoginBox>
        <LoginDrop>
          <LoginContent>
            <LoginTitle>Log In</LoginTitle>
            <form action="" onSubmit={handleSubmit}>
              <InputBox>
                <Input
                  type="text"
                  placeholder="Phone Number"
                  maxLength={10}
                  value={PhoneNo} // Add this
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </InputBox>
              <InputBox>
                <Input
                  type="password"
                  placeholder="password"
                  value={password} // Add this
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputBox>
              <InputBox className="inputbox">
                <Link className="forgot">Forgot Password ?</Link>
              </InputBox>
              <InputBox>
                <Button> {loading ? "Logging in": "LogIn"} </Button>
              </InputBox>
            </form>
            <Signup>
              {" "}
              Don't have an account? <Link className="signup">
                Sign Up
              </Link>{" "}
            </Signup>
          </LoginContent>
        </LoginDrop>
      </LoginBox>
    </Login>
  );
};

export default LoginPage;

