// https://pm2.keymetrics.io/docs/usage/application-declaration/

console.log(`🔶 `, __filename);

// console.log(`process.argv: `, process.argv);
var action;
for (var i = 0; i < process.argv.length; i++) {
  var arg = process.argv[i];
  console.log(`${i}: `, arg);
  if (arg.includes("action=")) {
    var splitter = arg.split("=");
    var action = splitter[1];
  }
}
// console.log(`action: `, action);
// process.exit(1);

var start = {
  apps: [
    // {
    //   name: "stremio-addon",
    //   script: "yarn",
    //   cwd: "packages/stremio-addon",
    //   args: "dev",
    //   interpreter: "/bin/bash",
    //   interpreter_args: "",
    //   instances: "1",
    //   exec_mode: "fork",
    //   autorestart: true,
    //   watch: true,
    //   max_memory_restart: "1G",
    //   env: {
    //     NODE_ENV: "development",
    //     PORT: 3001,
    //   },
    //   env_production: {
    //     NODE_ENV: "production",
    //     PORT: 3001,
    //   },
    // },
    // {
    //   name: "create-express-app",
    //   script: "yarn",
    //   cwd: "packages/create-express-app",
    //   args: "server",
    //   interpreter: "/bin/bash",
    //   interpreter_args: "",
    //   instances: "1",
    //   exec_mode: "fork",
    //   autorestart: true,
    //   watch: true,
    //   max_memory_restart: "1G",
    //   env: {
    //     NODE_ENV: "development",
    //     PORT: 3002,
    //   },
    //   env_production: {
    //     NODE_ENV: "production",
    //     PORT: 3002,
    //   },
    // },
    // {
    //   name: "create-next-app",
    //   script: "yarn",
    //   cwd: "packages/create-next-app",
    //   args: "dev",
    //   interpreter: "/bin/bash",
    //   interpreter_args: "",
    //   instances: "1",
    //   exec_mode: "fork",
    //   autorestart: true,
    //   watch: true,
    //   max_memory_restart: "1G",
    //   env: {
    //     NODE_ENV: "development",
    //     PORT: 3003,
    //   },
    //   env_production: {
    //     NODE_ENV: "production",
    //     PORT: 3003,
    //   },
    // },
    // {
    //   name: "create-react-app",
    //   script: "yarn",
    //   cwd: "packages/create-react-app",
    //   args: "start",
    //   interpreter: "/bin/bash",
    //   interpreter_args: "",
    //   instances: "1",
    //   exec_mode: "fork",
    //   autorestart: true,
    //   watch: true,
    //   max_memory_restart: "1G",
    //   env: {
    //     NODE_ENV: "development",
    //     PORT: 3004,
    //   },
    //   env_production: {
    //     NODE_ENV: "production",
    //     PORT: 3004,
    //   },
    // },
    {
      name: "express-lab-js",
      script: "yarn",
      cwd: "packages/express-labs",
      args: "server",
      interpreter: "/bin/bash",
      interpreter_args: "",
      instances: "1",
      exec_mode: "fork",
      autorestart: true,
      watch: true,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PORT: 3005,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3005,
      },
    },
    {
      name: "express-lab-ts",
      script: "yarn",
      cwd: "packages/express-labs-ts",
      args: "start",
      interpreter: "/bin/bash",
      interpreter_args: "",
      instances: "1",
      exec_mode: "fork",
      autorestart: false,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PORT: 3006,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3006,
      },
    },
    {
      name: "react-labs",
      script: "yarn",
      cwd: "packages/react-labs",
      args: "start",
      interpreter: "/bin/bash",
      interpreter_args: "",
      instances: "1",
      exec_mode: "fork",
      autorestart: true,
      watch: true,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PORT: 3007,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3007,
      },
    },
    {
      name: "next-labs",
      script: "yarn",
      cwd: "packages/next-labs",
      args: "dev",
      interpreter: "/bin/bash",
      interpreter_args: "",
      instances: "1",
      exec_mode: "fork",
      autorestart: true,
      watch: true,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PORT: 3008,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3008,
      },
    },
    // FIXME: [Cosmos] webpack build invalidated by packages/create-next-app/.next/build-manifest.json
    // {
    //   name: "cosmos",
    //   script: "yarn",
    //   cwd: ".",
    //   args: "cosmos",
    //   interpreter: "/bin/bash",
    //   interpreter_args: "",
    //   instances: "1",
    //   exec_mode: "fork",
    //   autorestart: true,
    //   watch: true,
    //   max_memory_restart: "1G",
    //   env: {
    //     NODE_ENV: "development",
    //     PORT: 5000,
    //   },
    //   env_production: {
    //     NODE_ENV: "production",
    //     PORT: 5000,
    //   },
    // },
  ],
  deploy: {
    production: {
      user: "SSH_USERNAME",
      host: "SSH_HOSTMACHINE",
      ref: "origin/master",
      repo: "GIT_REPOSITORY",
      path: "DESTINATION_PATH",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};

var build = {
  apps: [
    {
      name: "create-next-app",
      script: "yarn",
      cwd: "packages/create-next-app",
      args: "prestart",
      interpreter: "/bin/bash",
      interpreter_args: "",
      instances: "1",
      exec_mode: "",
      autorestart: false,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PORT: 3003,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3003,
      },
    },
    {
      name: "create-react-app",
      script: "yarn",
      cwd: "packages/create-react-app",
      args: "build",
      interpreter: "/bin/bash",
      interpreter_args: "",
      instances: "1",
      exec_mode: "fork",
      autorestart: false,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PORT: 3004,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3004,
      },
    },
    {
      name: "react-labs",
      script: "yarn",
      cwd: "packages/react-labs",
      args: "build",
      interpreter: "/bin/bash",
      interpreter_args: "",
      instances: "1",
      exec_mode: "fork",
      autorestart: false,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PORT: 3006,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3006,
      },
    },
  ],
  deploy: {
    production: {
      user: "SSH_USERNAME",
      host: "SSH_HOSTMACHINE",
      ref: "origin/master",
      repo: "GIT_REPOSITORY",
      path: "DESTINATION_PATH",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};

var server = {
  apps: [
    {
      name: "create-next-app",
      script: "yarn",
      cwd: "packages/create-next-app",
      args: "server",
      interpreter: "/bin/bash",
      interpreter_args: "",
      instances: "1",
      exec_mode: "fork",
      autorestart: true,
      watch: true,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PORT: 3003,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3003,
      },
    },
    {
      name: "create-react-app",
      script: "yarn",
      cwd: "packages/create-react-app",
      args: "server",
      interpreter: "/bin/bash",
      interpreter_args: "",
      instances: "1",
      exec_mode: "fork",
      autorestart: true,
      watch: true,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PORT: 3004,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3004,
      },
    },
    {
      name: "react-labs",
      script: "yarn",
      cwd: "packages/react-labs",
      args: "server",
      interpreter: "/bin/bash",
      interpreter_args: "",
      instances: "1",
      exec_mode: "fork",
      autorestart: true,
      watch: true,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PORT: 3006,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3006,
      },
    },
  ],
  deploy: {
    production: {
      user: "SSH_USERNAME",
      host: "SSH_HOSTMACHINE",
      ref: "origin/master",
      repo: "GIT_REPOSITORY",
      path: "DESTINATION_PATH",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};

module.exports = eval(action);
