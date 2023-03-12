import { useMutation } from "@tanstack/react-query";

export function useMutateLogin(
  apiKey: string,
  username: string,
  password: string
) {
  const loginMutation = useMutation(() => {
    
    return fetch("https://fullstack.exercise.applifting.cz/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-API-KEY": apiKey,
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((res) => res.json());
  });

  return loginMutation;
}
