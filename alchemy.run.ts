import alchemy from "alchemy";
import { Astro } from "alchemy/cloudflare";

const app = await alchemy("astro-website-starter");

export const worker = await Astro("website");

console.log({
  url: worker.url,
});

await app.finalize();
