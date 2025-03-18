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
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
  
    try {
    //   const response = await loginApi.loginVendor(PhoneNo, password);
    //   console.log(response);
  
    //   if (response.role === "vendor") {
    //     Navigate("/vendor");
    //     return;
    //   }
  
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

//GREAT SURAJ DON CODE START HERE
// import React, { useState } from "react";
// import {
//   LoginBox,
//   LoginDrop,
//   Login,
//   LoginContent,
//   LoginTitle,
//   InputBox,
//   Input,
//   Button,
//   Signup,
// } from "./loginPage.styles";
// import { Link, useNavigate } from "react-router-dom";
// import loginApi from "../../api/loginApi";

// const LoginPage = () => {
//     const [PhoneNo, setPhoneNo] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [success, setSuccess] = useState(false);

//     const navigate = useNavigate();  // Correct way to handle navigation in React Router v6

//     const handleSubmit = async (e) => {
//         e.preventDefault();  // Prevent form refresh
//         setLoading(true);
//         setError("");

//         try {
//             const response = await loginApi.loginVendor(PhoneNo, password);

//             if (response.role === "admin") {
//                 navigate("/admin");  // Corrected navigation
//             } else {
//                 navigate("/vendor");
//             }

//             console.log(response);
//             setLoading(false);
//             setSuccess(true);
//         } catch (error) {
//             console.error("Login failed:", error.response?.data?.message || error.message);
//             setError(error.response?.data?.message || "Something went wrong.");
//             setLoading(false);
//         }
//     };

//     return (
//         <Login>
//             <LoginBox>
//                 <LoginDrop>
//                     <LoginContent>
//                         <LoginTitle>Log In</LoginTitle>
//                         <form action="" onSubmit={handleSubmit}>
//                             <InputBox>
//                                 <Input
//                                     type="text"
//                                     placeholder="Phone Number"
//                                     maxLength={10}
//                                     value={PhoneNo}
//                                     onChange={(e) => setPhoneNo(e.target.value)}
//                                 />
//                             </InputBox>
//                             <InputBox>
//                                 <Input
//                                     type="password"
//                                     placeholder="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                 />
//                             </InputBox>
//                             <InputBox className="inputbox">
//                                 <Link className="forgot">Forgot Password ?</Link>
//                             </InputBox>
//                             <InputBox>
//                                 <Button type="submit" disabled={loading}>
//                                     {loading ? "Logging in..." : "Log In"}
//                                 </Button>
//                             </InputBox>
//                         </form>
//                         {error && <p style={{ color: "red" }}>{error}</p>}
//                         <Signup> Don't have an account? <Link className="signup">Sign Up</Link> </Signup>
//                     </LoginContent>
//                 </LoginDrop>
//             </LoginBox>
//         </Login>
//     );
// };

// export default LoginPage;
