import { useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { UserContext } from "../contexts/UsersContext";

const LoginScreen = () => {
  const { isPending, user, LoginUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handieSubmit(e) {
    e.preventDefault();
    const loginuser = {
      email,
      password,
    };
    LoginUser(loginuser);
  };
  return (
    <div
      style={{
        height: "80vh",
        width: "100px",
        display: "grid",
        gridTemplateColums: "50%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          gridTemplateColums: "1fr",
          gridGap: 20,
          padding: "20px",
          border: "1px solid",
        }}
      >
        <h1 className="text-center">LOG IN</h1>
        <Form.Control
          placeholder="enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Form.Control>
        <Form.Control
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Form.Control>
        <Button type="Submit">LOGN IN</Button>
      </Form>
    </div>
  );
};
export default LoginScreen;