import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
export const site = "https://idagent.mee.foundation/";


// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [tailwind()],
  site: site,
});
