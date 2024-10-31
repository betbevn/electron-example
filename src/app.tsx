import { MantineProvider } from "@mantine/core";
import { createRoot } from "react-dom/client";
import Root from "./root";

const root = createRoot(document.body);
root.render(
  <MantineProvider>
    <Root />
  </MantineProvider>
);
