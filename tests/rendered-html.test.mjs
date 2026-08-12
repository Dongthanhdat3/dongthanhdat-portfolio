import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Vietnamese portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /lang="vi"/);
  assert.match(html, /Đồng Thành Đạt/);
  assert.match(html, /Market Research Analyst/);
  assert.match(html, /Dự án tiêu biểu/);
  assert.match(html, /About Me/);
  assert.match(html, /Google Apps Script/);
  assert.match(html, /research-core-experience/);
  assert.match(html, /Trường Đại học Nguyễn Tất Thành/);
  assert.match(html, /Google Advanced Data Analytics Professional Certificate/);
  assert.doesNotMatch(html, /Mohammed Kayser|Fractal Analytics|GPTTConfig|G-E72XQ9P5CW/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
  assert.doesNotMatch(html, /Tableau/);
  assert.doesNotMatch(html, /Nghiên cứu thị trường · Phân tích dữ liệu/);
});

test("renders project and certificate routes", async () => {
  const [projectResponse, certificateResponse] = await Promise.all([
    render("/du-an/mobifone"),
    render("/chung-chi/google-data-analytics"),
  ]);
  assert.equal(projectResponse.status, 200);
  assert.equal(certificateResponse.status, 200);

  const [projectHtml, certificateHtml] = await Promise.all([
    projectResponse.text(),
    certificateResponse.text(),
  ]);
  assert.match(projectHtml, /450 khách hàng MobiFone/);
  assert.match(projectHtml, /\/projects\/mobifone\.pdf/);
  assert.match(certificateHtml, /4MXR5IP6JIWD/);
  assert.match(certificateHtml, /\/certificates\/google-data-analytics\.pdf/);
});

test("ships every evidence asset", async () => {
  await Promise.all(
    [
      "../public/images/avatar-v5.webp",
      "../public/images/research-core-static.webp",
      "../public/fonts/inter-latin-variable.woff2",
      "../public/fonts/inter-vietnamese-variable.woff2",
      "../public/projects/mobifone.pdf",
      "../public/projects/tiktok-shop.pdf",
      "../public/projects/mb-bank.pdf",
      "../public/certificates/google-data-analytics.pdf",
      "../public/certificates/google-advanced-data-analytics.pdf",
      "../public/og.png",
      "../public/og-v2.png",
      "../public/og-v3.png",
      "../public/favicon.png",
      "../public/brand/heyjo-mark-transparent.webp",
      "../public/brands/mobifone.webp",
      "../public/brands/tiktok-shop.webp",
      "../public/brands/mb-bank.webp",
      "../public/tools/excel.webp",
      "../public/tools/sql.webp",
      "../public/tools/spss.webp",
      "../public/tools/google-analytics.webp",
      "../public/tools/python.webp",
      "../public/tools/google-apps-script-v5.webp",
    ].map((path) => access(new URL(path, import.meta.url))),
  );
});

test("exports Vercel-compatible static entry points", async () => {
  const [home, project, certificate] = await Promise.all([
    readFile(new URL("../dist/index.html", import.meta.url), "utf8"),
    readFile(new URL("../dist/du-an/mobifone/index.html", import.meta.url), "utf8"),
    readFile(
      new URL("../dist/chung-chi/google-data-analytics/index.html", import.meta.url),
      "utf8",
    ),
  ]);

  assert.match(home, /Đồng Thành Đạt/);
  assert.match(project, /450 khách hàng MobiFone/);
  assert.match(certificate, /4MXR5IP6JIWD/);
});
