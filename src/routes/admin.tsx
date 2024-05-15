import { createFileRoute } from "@tanstack/react-router";
import { api } from "../utils/axios";
import LoginForm from "../components/Admin/Login";
import { useEffect, useState } from "react";

type Message = {
  id: string;
  name: string;
  text: string;
};

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        await api.get("/users/me");
        setLoggedIn(true);
      } catch (error) {
        setLoggedIn(false);
      }
    };

    const getMessages = async () => {
      try {
        const response = await api.get("/messages/all");
        setMessages(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getData().then(() => getMessages());
  }, []);

  if (!loggedIn) {
    return <LoginForm />;
  }

  return (
    <div className="p-20">
      <h1 className="text-3xl font-bold">Admin Panel</h1>

      <div>
        <ul className="flex flex-col gap-4 py-2">
          {messages.map((message) => (
            <li key={message.id} className="border-t border-b border-gray-500">
              <h2 className="font-semibold">{message.name}</h2>
              <p className="text-gray-300">{message.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/admin")({
  component: Admin,
});
