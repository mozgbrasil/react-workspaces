/* mozg-logger */
const { getSentry, getRollbar, getLogzio } = require("@mozg/common/baunilha");
const Sentry = require("@sentry/node");
const logzioLogger = require("logzio-nodejs");
const log4js = require("log4js");
const logger = getLogzio(logzioLogger, log4js);
getSentry(Sentry);
getRollbar();
/* mozg-logger */

const express = require("express");
const fs = require("fs");
const favicon = require("express-favicon");
const path = require("path");
const PORT = process.env.PORT || 8080;
const app = express();
app.use(favicon(__dirname + "/build/favicon.ico"));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/ping", function (req, res) {
  return res.send("pong");
});
app.get("/listing_dir", function (req, res) {
  // https://stackoverflow.com/questions/6294186/express-js-any-way-to-display-a-file-dir-listing
  // const fullPath = process.cwd() + req.path; //(not __dirname)
  //   const fullPath = __dirname;
  const fullPath = process.cwd();
  const dir = fs.opendirSync(fullPath);
  let entity;
  let listing = [];
  while ((entity = dir.readSync()) !== null) {
    if (entity.isFile()) {
      listing.push({ type: "f", name: entity.name });
    } else if (entity.isDirectory()) {
      listing.push({ type: "d", name: entity.name });
    }
  }
  dir.closeSync();
  return res.send({ path: fullPath, list: listing });
});
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(PORT, () => {
  var logger_message = `Listening on http://0.0.0.0:${PORT}`;
  var logger_id = "SERVEHTTP";
  logger.info(logger_message, logger_id);
  console.log(`Listening on http://0.0.0.0:${PORT}`);
});

module.exports = app;
