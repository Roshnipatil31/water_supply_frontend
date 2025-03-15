import styled from "styled-components";

export const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background:#87ceeb;
`;

export const LoginBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginDrop = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
  box-shadow: inset 20px 20px 20px rgba(0, 0, 0, 0.05), 25px 35px 20px rgba(0, 0, 0, 0.05), 25px 30px 30px rgba(0, 0, 0, 0.05),
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
        width: 350px;
        height: 350px;
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

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
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
    box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.05), inset -2px -5px 10px rgba(255, 255, 255, 1), 15px 15px 10px rgba(0, 0, 0, 0.05), 15px 10px 15px rgba(0, 0, 0, 0.05);
    border-radius: 25px;

    // &::before {
    //   content: "";
    //   position: absolute;
    //   top: 8px;
    //   left: 50%;
    //   transform: translateX(-50%);
    //     width: 65%;
    //     height: 5px;
    //     background: rgba(255,255,255,1);
`;

export const Input = styled.input`
border: none;
outline: none;
background: transparent;
width: 100%;
font-size: 1em;
padding: 10px 15px;
`;

export const Button = styled.button`
border: none;
outline: none;
background: transparent;
width: 100%;
font-size: 1em;
padding: 10px 15px;
`;



