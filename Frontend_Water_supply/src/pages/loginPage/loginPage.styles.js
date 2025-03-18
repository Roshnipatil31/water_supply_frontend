import styled from "styled-components";

export const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #87ceeb;
`;

export const LoginBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  left: -80px;

  @media (max-width: 480px) {
    left: 0;
  }
`;

export const LoginDrop = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
  box-shadow: inset 20px 20px 20px rgba(0, 0, 0, 0.05),
    25px 35px 20px rgba(0, 0, 0, 0.05), 25px 30px 30px rgba(0, 0, 0, 0.05),
    inset -20px -20px 25px rgba(255, 255, 255, 0.9);
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 52% 48% 43% 66% / 38% 45% 55% 62%;

  &:hover {
    border-radius: 50%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50px;
    left: 85px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: #fff;
    opacity: 0.9;
  }

  &::after {
    content: "";
    position: absolute;
    top: 90px;
    left: 110px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #fff;
    opacity: 0.9;
  }

  @media (max-width: 480px) {
    width: 400px;
    height: 400px;
  }
`;

export const LoginContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px;
  gap: 15px;

  .inputbox {
    border-radius: unset;
    box-shadow: unset;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
  }
`;

export const LoginTitle = styled.h2`
  position: relative;
  color: #333;
  font-size: 1.5em;
`;

export const InputBox = styled.div`
  position: relative;
  width: 225px;
  box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.05),
    inset -2px -5px 10px rgba(255, 255, 255, 1),
    15px 15px 10px rgba(0, 0, 0, 0.05), 15px 10px 15px rgba(0, 0, 0, 0.05);
  border-radius: 25px;

  .forgot {
    text-decoration: none;
    color: #666;
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    font-size: .8em;
  }
  .signup {
    text-decoration: none;
    color: #666;
    font-size: 1em;
  }

  &:last-child {
    width: 100%;
    background: #2390ac90;
    box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.05),
       inset -2px -5px 10px rgba(255, 255, 255, .5),
      15px 15px 10px rgba(0, 0, 0, 0.05), 15px 10px 15px rgba(0, 0, 0, 0.05);
    transition: 0.5s;
  }

`;

export const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-size: 1em;
  padding: 10px 15px;
    box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.05),
    inset -2px -5px 10px rgba(255, 255, 255, 1),
    15px 15px 10px rgba(0, 0, 0, 0.05), 15px 10px 15px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background: transparent;
  color: #fff;
  width: 100%;
  font-size: 1em;
  padding: 10px 15px;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 0.1em;
  font-weight: 500;
`;

export const Signup = styled.p`
  color: #666;
  font-size: 1em;

  @media (max-width: 480px) {
    font-size: 0.8em;
  }

  .signup {
  text-decoration: none;
    color: #00008b;

    &:hover {
      text-decoration: underline;
    }
}
    
`;
