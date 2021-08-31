// https://vercel.com/guides/using-express-with-vercel#standalone-express
// https://vercel.com/support/articles/how-to-enable-cors

const app = require("express")();
const { v4 } = require("uuid");

app.get("/", (req, res) => {
  res.end(`Hello!`);
});

app.get("/api/js/express", (req, res) => {
  res.end(`Hello! api/js/express`);
});

app.get("/api", (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get("/api/item/:slug", (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

module.exports = app;
