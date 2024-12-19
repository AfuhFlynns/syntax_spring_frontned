import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// import * as Sentry from "@sentry/react";
// import type { BrowserOptions } from "@sentry/react";

import "./index.css";
import App from "./App.tsx";

// const sentryConfig: BrowserOptions = {
//   dsn: "https://e3d16ad1c4314a60b6051a2a4883d7b2@o4508490594320384.ingest.us.sentry.io/4508490598973440",
//   integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
//   tracesSampleRate: 1.0,
//   tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
//   replaysSessionSampleRate: 0.1,
//   replaysOnErrorSampleRate: 1.0,
// };

// Sentry.init(sentryConfig);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
