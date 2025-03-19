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
} from "../loginPage/loginPage.styles";
import { Link, useNavigate } from "react-router-dom";
import loginApi from "../../api/loginApi";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
    const response = await loginApi.signupVendor(name, phone, password);
    console.log(response);
    alert("Registration Successful!");
    navigate("/"); // Redirect to login page after successful registration
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Login>
      <LoginBox>
        <LoginDrop>
          <LoginContent>
            <LoginTitle>Sign Up</LoginTitle>
            {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
              <InputBox>
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </InputBox>
              <InputBox>
                <Input
                  type="text"
                  placeholder="Phone Number"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </InputBox>
              <InputBox>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </InputBox>
              <InputBox>
                <Button type="submit">{loading ? "Registering..." : "Sign Up"}</Button>
              </InputBox>
            </form>
            <Signup>
              Already have an account? <Link to="/login" className="signup">Log In</Link>
            </Signup>
          </LoginContent>
        </LoginDrop>
      </LoginBox>
    </Login>
  );
};

export default Register;
