import { createBrowserRouter } from "react-router-dom"

import { Layout } from "./components/layout"
import { ListSessions } from "./pages/list-sessions"
import { Login } from "./pages/login"
import { Panel } from "./pages/panel"
import { ChooseScreen } from "./pages/professor/choose-screen"
import { RegisterBoosts } from "./pages/professor/register-boosts"
import { RegisterCards } from "./pages/professor/register-cards"
import { RegisterGoals } from "./pages/professor/register-goals"
import { RegisterSession } from "./pages/professor/register-session"
import { Session } from "./pages/professor/session"
import { ListSessionsStudent } from "./pages/student/list-sessions"
import { ListTeams } from "./pages/student/list-teams"
import { RegisterStudent } from "./pages/student/register"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
        path: "panel/sessions",
        element: <ListSessions viewMode="panel" />,
      },
      {
        path: "panel/sessions/:sessionId",
        element: <Panel />,
      },
      {
        path: "list-sessions",
        element: <ListSessions viewMode="professor" />,
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
      {
        path: "student/sessions",
        element: <ListSessionsStudent />,
      },
      {
        path: "/student/sessions/:sessionId/teams",
        element: <ListTeams />,
      },
      {
        path: "student/sessions/:sessionId/teams/:teamId/register",
        element: <RegisterStudent />,
      },
    ],
  },
])
