import react from "react";  
import { LoginBox, LoginDrop, Login, LoginContent, LoginTitle, InputBox, Input, Button } from "./smaple.styles";

const sample = () => {
  return (
    <Login>
    <LoginBox>
        <LoginDrop>
            <LoginContent>
                <LoginTitle>Sign In</LoginTitle>
                <form action="">
                    <InputBox>
                        <Input type="text" placeholder="Username" />
                    </InputBox>
                    <InputBox>
                        <Input type="password" placeholder="password" />
                    </InputBox>
                    <InputBox>
                        <Button> Sign Ip</Button>
                    </InputBox>
                </form>
            </LoginContent>
        </LoginDrop>
    </LoginBox>
    </Login>
  );
}

export default sample;