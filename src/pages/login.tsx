import { FormEvent, useState } from "react";
import Heading from "@/components/Typography/Heading";
import { useTenantData } from "@/hooks/useTenantData";
import { useMutateLogin } from "@/hooks/useMutateLogin";

//TODO loginMutation success adn error handling
//TODO create component for form
//TODO create reusable component for input and button

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
    <form
      onSubmit={submitHandler}
      className="flex flex-col space-y-10 p-8 mx-auto max-w-sm rounded-lg shadow-xl"
    >
      <Heading size={"md"}>Log in</Heading>
      <div className="flex flex-col">
        <label>Email</label>
        <input
          type="text"
          className="border rounded-[4px] py-1.5 px-3"
          placeholder="me@example.com"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      <div className="flex flex-col">
        <label>Password</label>
        <input
          type="password"
          className="border rounded-[4px] py-1.5 px-3"
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button
        disabled={tenantQuery?.isLoading || tenantQuery?.isError}
        type="submit"
        className={`bg-blue-500 text-white py-1 px-3 rounded w-fit ml-auto`}
      >
        Log In
      </button>
    </form>
  );
}
