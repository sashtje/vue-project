import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import * as Sentry from "@sentry/vue";

const app = createApp(App)

Sentry.init({
  app,
  dsn: "https://74484343e9dea1571157c3e49aca4e24@o4508721020928000.ingest.de.sentry.io/4508721066934352",
  integrations: [
    Sentry.browserTracingIntegration({ router }),
    Sentry.replayIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/vue-project-ochre.vercel.app/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

app.use(router)

app.mount('#app')
