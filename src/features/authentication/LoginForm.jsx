import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";

import SpinnerMini from "../../ui/SpinnerMini";
import { useLogin } from "./useLogin";
import styled from "styled-components";
const FormRowVertical = styled.div`
  display: grid;
  column-gap: 2.4rem;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 0;
  border-bottom: 1px solid var(--color-grey-100);
`;
function LoginForm() {
  const [email, setEmail] = useState("adil@123.com");
  const [password, setPassword] = useState("1234Adil");
  const { login, isLoading } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password },{
      onSettled:()=>{
        setEmail("");
        setPassword("");
      }
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          disabled={isLoading}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          disabled={isLoading}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button disabled={isLoading} size="large">
          {isLoading ? <SpinnerMini /> : "Login"}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
