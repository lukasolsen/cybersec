import { createFileRoute } from "@tanstack/react-router";
import { api } from "../utils/axios";
import LoginForm from "../components/Admin/Login";
import { useEffect, useState } from "react";

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        await api.get("/users/me");
        setLoggedIn(true);
      } catch (error) {
        setLoggedIn(false);
      }
    };

    getData();
  }, []);

  if (!loggedIn) {
    return <LoginForm />;
  }

  return <div className="p-20">logged in</div>;
};

export const Route = createFileRoute("/admin")({
  component: Admin,
});
