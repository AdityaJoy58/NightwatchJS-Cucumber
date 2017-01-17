# NCR Pulse - Office Configuration

NEP Pulse - Office configuration is an application that allow users(administrators) to configure notifications,tolerance levels etc in order to effect values in pulse application


# Prerequisites

- Node version 4.x or higher
- Install forever globally using command "npm install forever -g"

# Building

To setup your development environment from a fresh checkout, do the following:

```
$ npm install
```

After installation of required packages do run the following proxy task for
making the service requests.
```
$ npm run proxy
```

Once the Proxy successfully starts do run the application in development mode
with the following command.
```
$ npm run start
```


# Development

- Yet to be documented

# Acceptance Tests

You can run the test by executing in 2 ways

1) `npm run test:e2e --env <environment name - browser name> ex: dev-chrome | dev-firefox | dev-ie | qa-chrome | qa-firefox | qa-ie | prod-chrome | prod-firefox | prod-ie `
2) `node_modules/.bin/nightwatch --env <environment name - browser name> ex: dev-chrome | dev-firefox | dev-ie | qa-chrome | qa-firefox | qa-ie | prod-chrome | prod-firefox | prod-ie `

>Note: If no environment and browser name is specified, like running the command as "npm run test:e2e", then it will take the default settings i.e., chrome as default browser and localhost as default environment.

# Tests Reports

HTML report generation is enabled by default. It's default location is reports/cucumber.html.
