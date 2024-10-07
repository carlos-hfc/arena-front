import { createBrowserRouter } from "react-router-dom"

import { ProfessorLayout } from "./components/layout"
import { Login } from "./pages/login"
import { ChooseScreen } from "./pages/professor/choose-screen"
import { ListSessions } from "./pages/professor/list-sessions"
import { RegisterBoosts } from "./pages/professor/register-boosts"
import { RegisterCards } from "./pages/professor/register-cards"
import { RegisterGoals } from "./pages/professor/register-goals"
import { RegisterSession } from "./pages/professor/register-session"
import { Session } from "./pages/professor/session"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProfessorLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "choose-screen",
        element: <ChooseScreen />,
      },
      {
        path: "list-sessions",
        element: <ListSessions />,
      },
      {
        path: "register-session",
        element: <RegisterSession />,
      },
      {
        path: "sessions/:sessionId",
        children: [
          {
            index: true,
            element: <Session />,
          },
          {
            path: "goals",
            element: <RegisterGoals />,
          },
          {
            path: "cards",
            element: <RegisterCards />,
          },
          {
            path: "boosts",
            element: <RegisterBoosts />,
          },
        ],
      },
    ],
  },
])
