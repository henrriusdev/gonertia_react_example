import { createRoot } from "react-dom/client";
import { renderToString } from "react-dom/server";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

createServer((page) =>
  createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) =>
      resolvePageComponent(
        `./Pages/${name}.tsx`,
        import.meta.glob("./Pages/**/*.tsx")
      ),
    setup: ({ App, props }) => <App {...props} />,
  })
);
