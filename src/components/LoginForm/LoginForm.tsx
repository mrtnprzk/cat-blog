import type { FormEvent, FC, Dispatch, SetStateAction } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Heading from "../Typography/Heading";

interface LoginFormProps {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
}

const LoginForm: FC<LoginFormProps> = ({
  username,
  setUsername,
  password,
  setPassword,
  onSubmit,
  loading,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col space-y-4 p-8 mx-auto max-w-sm rounded-lg shadow-xl"
    >
      <Heading size={"md"} className="mb-2">
        Log in
      </Heading>
      <Input
        label="Email"
        placeholder="me@example.com"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <Input
        type="password"
        label="Password"
        placeholder="********"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <span className="py-2" />
      <Button disabled={loading} className="ml-auto" type="submit">
        Log In
      </Button>
    </form>
  );
};

export default LoginForm;
