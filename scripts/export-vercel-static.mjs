import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const distDirectory = join(root, "dist");
const clientDirectory = join(distDirectory, "client");
const workerUrl = pathToFileURL(join(distDirectory, "server/index.js"));
workerUrl.searchParams.set("static-export", `${Date.now()}`);

const { default: worker } = await import(workerUrl.href);
const routes = [
  "/",
  "/du-an/mobifone",
  "/du-an/tiktok-shop",
  "/du-an/mb-bank",
  "/chung-chi/google-data-analytics",
  "/chung-chi/google-advanced-data-analytics",
];

const assets = {
  async fetch(request) {
    const pathname = new URL(request.url).pathname;
    const filePath = join(clientDirectory, pathname.replace(/^\/+/, ""));

    try {
      return new Response(await readFile(filePath));
    } catch {
      return new Response("Not found", { status: 404 });
    }
  },
};

const context = {
  waitUntil() {},
  passThroughOnException() {},
};

async function render(route, outputPath, expectedStatus = 200) {
  const response = await worker.fetch(
    new Request(`https://dong-thanh-dat-portfolio.vercel.app${route}`, {
      headers: { accept: "text/html" },
    }),
    { ASSETS: assets },
    context,
  );

  if (response.status !== expectedStatus) {
    throw new Error(
      `Static export failed for ${route}: expected ${expectedStatus}, received ${response.status}`,
    );
  }

  const destination = join(distDirectory, outputPath);
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, await response.text());
}

await cp(clientDirectory, distDirectory, { recursive: true, force: true });

for (const route of routes) {
  const outputPath = route === "/" ? "index.html" : `${route.slice(1)}/index.html`;
  await render(route, outputPath);
}

await render("/__vercel_not_found__", "404.html", 404);

console.log(`Static Vercel export created ${routes.length} routes in dist/`);
