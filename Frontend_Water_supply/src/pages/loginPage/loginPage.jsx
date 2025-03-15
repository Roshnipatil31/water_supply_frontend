import react from "react";  
import { LoginBox, LoginDrop, Login, LoginContent, LoginTitle, InputBox, Input, Button } from "./loginPage.styles";

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
                        <Button> Log In </Button>
                    </InputBox>
                </form>
            </LoginContent>
        </LoginDrop>
    </LoginBox>
    </Login>
  );
}

export default sample;