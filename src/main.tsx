import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,

  notFoundMode: "root",
  defaultErrorComponent: () => (
    <div className="p-4 border border-teal-500 rounded-lg">
      <h1 className="text-2xl font-bold">404 Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
    </div>
  ),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
