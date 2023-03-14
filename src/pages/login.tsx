import { FormEvent, useState } from "react";
import { useTenantData } from "@/hooks/useTenantData";
import { useMutateLogin } from "@/hooks/useMutateLogin";
import LoginForm from "@/components/PageLogin/LoginForm";

//TODO loginMutation success adn error handling

export default function Login() {
  const [username, setUsername] = useState("your-new-tenant-name");
  const [password, setPassword] = useState("your-new-tenant-password");

  const tenantQuery = useTenantData();
  const key = tenantQuery?.data?.apiKey as string;

  const loginMutation = useMutateLogin(key, username, password);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (key) loginMutation.mutate();
  };

  return (
    <LoginForm
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      onSubmit={submitHandler}
      loading={tenantQuery?.isLoading || tenantQuery?.isError}
    />
  );
}
