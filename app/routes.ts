import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  { path: "/profile", file: "routes/profile.tsx" },
  { path: "/certificates", file: "routes/certificates.tsx" },
  { path: "/projects", file: "routes/projects.tsx" },
  { path: "/achievements", file: "routes/achievements.tsx" },
  { path: "/contact", file: "routes/contact.tsx" },
] satisfies RouteConfig;
