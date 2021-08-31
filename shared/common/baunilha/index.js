//

// import Loadable from "@loadable/component";
// Fix: SyntaxError: Cannot use import statement outside a module
// const Loadable = require("@loadable/component");

//
function Crown() {
  return "<h1>👑️</h1>";
}

function HeartLove() {
  return "<h1>❤️</h1>";
}

//

function getConfig() {
  const config = {};
  config.port = process.env.PORT;
  config.local = `${process.env.APP_URL}:${config.port}`;

  return config;
}

//

function isNumeric(value) {
  return /^\d+$/.test(value);
}

//

const packageManifest = require("@mozg/common/package.json");

const captureMessage = `${packageManifest.version} | ${
  getConfig().local
} | ${__filename}`;

// console.log('process.env: ', process.env);

//

function getSentry(Sentry) {
  if (!process.env.APP_SENTRY_DSN || process.env.APP_SENTRY_DSN === "false") {
    return false;
  }

  const { Integrations } = require("@sentry/tracing");
  let { name } = packageManifest;
  name = name.replace("@", "");
  name = name.replace("/", "-");
  name += `-${process.env.APP_ID}`;
  const { version } = packageManifest;
  const release = `${name}@${version}`;
  const parameters = {
    dsn: process.env.APP_SENTRY_DSN,
    // To set your release version
    release,
    integrations: [new Integrations.BrowserTracing()],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  };

  Sentry.init(parameters);

  // Set user information, as well as tags and further extras
  Sentry.configureScope((scope) => {
    scope.setExtra("battery", 0.7);
    scope.setTag("user_mode", "admin");
    scope.setUser({ id: "4711" });
    // scope.setExtra('env', process.env);
    // scope.clear();
  });

  // Add a breadcrumb for future events
  Sentry.addBreadcrumb({
    message: "My Breadcrumb",
  });

  Sentry.captureMessage(captureMessage);

  // myUndefinedFunction(); // test intentional error

  // console.log('Sentry: ', 'Sentry');

  return Sentry;
}

function getRollbar() {
  if (!process.env.APP_ROLLBAR_DSN || process.env.APP_ROLLBAR_DSN === "false") {
    return false;
  }

  // Send a Message to Rollbar
  // include and initialize the rollbar library with your access token
  const Rollbar = require("rollbar");
  const rollbar = new Rollbar({
    accessToken: process.env.APP_ROLLBAR_DSN,
    captureUncaught: true,
    captureUnhandledRejections: true,
  });

  // record a generic message and send it to Rollbar
  rollbar.log(captureMessage);

  // console.log('rollbar: ', 'rollbar');

  return rollbar;
}

function getLogzio(logzioLogger, log4js) {
  if (
    !process.env.APP_LOGGER_TOKEN ||
    process.env.APP_LOGGER_TOKEN === "false"
  ) {
    const obj = {
      debug() {
        // console.log('APP_LOGGER_TOKEN: false');
      },
      info() {
        // console.log('APP_LOGGER_TOKEN: false');
      },
      error() {
        // console.log('APP_LOGGER_TOKEN: false');
      },
    };

    // console.log('obj: ', obj);

    return obj;
    // return (module.exports = obj);
  }

  // const logzioLogger = require('logzio-nodejs');
  logzioLogger.createLogger({
    token: process.env.APP_LOGGER_TOKEN,
    // host: process.env.APP_LOGGER_HOST,
    // supressErrors: process.env.APP_LOGGER_SUPRESS_ERRORS,
    // debug: process.env.APP_LOGGER_INCLUDE_DEBUG
  });

  // const log4js = require('log4js');
  log4js.configure({
    appenders: {
      console: {
        type: "console",
      },
    },
    categories: {
      default: {
        appenders: ["console"],
        level: process.env.APP_LOG_LEVEL,
      },
    },
  });
  const log4jslogger = log4js.getLogger("default");

  function log(msg, handler, catalog, genre, count, item) {
    log4jslogger.log(msg);
    logzioLogger.log({
      message: msg,
      level: "debug",
      handler,
      catalog,
      genre,
      count,
      item,
    });
  }

  function debugLog(msg, handler, catalog, genre, count, item) {
    log4jslogger.debug(msg);
    logzioLogger.log({
      message: msg,
      level: "debug",
      handler,
      catalog,
      genre,
      count,
      item,
    });
  }

  function infoLog(msg, handler, catalog, genre, count, item) {
    log4jslogger.info(msg);
    logzioLogger.log({
      message: msg,
      level: "info",
      handler,
      catalog,
      genre,
      count,
      item,
    });
  }

  function errorLog(msg, handler, catalog, genre, count, item) {
    log4jslogger.info(msg);
    logzioLogger.log({
      message: msg,
      level: "error",
      handler,
      catalog,
      genre,
      count,
      item,
    });
  }

  const obj = {
    debug: debugLog,
    info: infoLog,
    error: errorLog,
  };

  // console.log('obj: ', obj);

  return obj;
  // return (module.exports = obj);
}

function getFirebaseInit() {
  if (
    !process.env.APP_FIREBASE_APIKEY ||
    process.env.APP_FIREBASE_APIKEY === "false"
  ) {
    return false;
  }
  const firebase = require("firebase");

  const firebaseConfig = {
    apiKey: process.env.APP_FIREBASE_APIKEY,
    authDomain: process.env.APP_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.APP_FIREBASE_DATABASEURL,
    projectId: process.env.APP_FIREBASE_PROJECTID,
    storageBucket: process.env.APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.APP_FIREBASE_APPID,
  };

  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  // console.log('firebase.initializeApp: ', app);
  // console.log('firebase.database: ', db);
  // Self-Invoking Functions
  (async function () {
    const dbSet = firebase
      .database()
      .ref("default-rtdb")
      .set({
        username: "name",
        email: "email",
        profile_picture: "imageUrl",
      })
      .catch((err) => {
        // console.error('error: ', err);
      });
    // console.log('firebase.database.set: ', dbSet);
  })();

  return firebase;
}

function getGADebug() {
  if (
    !process.env.APP_GA_TRACKING_ID ||
    process.env.APP_GA_TRACKING_ID === "false"
  ) {
    return false;
  }

  const fetch = require("node-fetch");

  const trackEvent = (category, action, label, value) => {
    const data = {
      // API Version.
      v: "1",
      // Tracking ID / Property ID.
      tid: process.env.APP_GA_TRACKING_ID,
      // Anonymous Client Identifier. Ideally, this should be a UUID that
      // is associated with particular user, device, or browser instance.
      cid: "555",
      // Event hit type.
      t: "event",
      // Event category.
      ec: category,
      // Event action.
      ea: action,
      // Event label.
      el: label,
      // Event value.
      ev: value,
    };

    // console.log('data: ', data);

    return fetch("http://www.google-analytics.com/debug/collect", {
      params: data,
    })
      .then((res) => res.json())
      .then((json) => {
        // console.log('json: ', json);
      })
      .catch((err) => {
        // console.error('error: ', err);
      });
  };

  (async function () {
    try {
      await trackEvent(
        "Example category",
        "Example action",
        "Example label",
        captureMessage
      );
      // console.log('trackEvent');
    } catch (error) {
      // console.log(error);
    }
  })();
}

//

// sistema de módulos do Node.js

module.exports = {
  // export {
  getConfig,
  isNumeric,
  getSentry,
  getRollbar,
  getLogzio,
  getFirebaseInit,
  getGADebug,
  Crown,
  HeartLove,
};
