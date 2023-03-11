import { useQuery } from "@tanstack/react-query";

export function useTenantData() {
  const tenantData = useQuery(["tenant"], () =>
    fetch('https://fullstack.exercise.applifting.cz/tenants', {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: "your-new-tenant-name",
        password: "your-new-tenant-password",
      }),
    }).then((res) => res.json())
  );

  return tenantData;
}
