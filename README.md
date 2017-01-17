# Nightwatch-Cucumber Framework

To do an e2e(End to End) test of a non-angular application we can make use of this 
Nightwatch-Cucumber Framework, which will support both angular and non-angular applications.

Note: For demo purpose, We have used Instagram application(A ReactJs application) to Test.

# Prerequisites

- Node version 4.x or higher 
- NPM version 3.x or higher
- Cucumber 0.10.x or higher
- Nightwatch 0.8.x or higher
- Nightwatch-Cucumber 2.1.x or higher
- Selenium-Server 2.53.x or higher
- Chromedriver 2.21.x or higher

For upgrading NPM to version 3.x on Windows, it is recommended to use this NPM
package: 
[NPM Windows Upgrade](https://www.npmjs.com/package/npm-windows-upgrade)

# Setup Steps

Checkout the fresh code on the physical machine, do the following:

```
$ npm install
```

This will do the following:
- Install build-time dependencies (`npm install`).

Once it is done, now the basic setup is done to run sample tests.

Now we have two options to run this sample test:
1) Nightwatch as Runner
2) Cucumber as Runner

a. Using Nightwatch as runner, to do this we do the following ways provided we should be in the root folder in command prompt:

```
Gulp is integrated to work with this project. So, you can go ahead by using the below command
1) $ gulp e2e-nightwatch

If Nightwatch is installed globally using : $ npm install nightwatch -g
2) $ nightwatch

If Nightwatch is installed locally : $ npm install nightwatch
3) $ node_modules/.bin/nightwatch
```

On running the above commands we can see the sample tests running, which is actually the nightwatch as runner.

b. Using Cucumber as runner, to do this we do the following ways provided we should be in the root folder in command prompt:

```
Gulp is integrated to work with this project. So, you can go ahead by using the below command
1) $ gulp e2e-cucumber

If Cucumber is installed globally using : $ npm install cucumber -g
2) $ cucumberjs

If Cucumber is installed locally : $ npm install cucumber
3) $ node_modules/.bin/cucumberjs
```

# HTML reports:

HTML report generation is enabled by default. It's default location is /reports/index.html. You can disable or change this using configuration object.

# Framework Structure:
 We are using BDD Framework with Page object model approach where it will be easy to distinguish all the files used in a structured way,

```
├── tests
│   ├── e2e
│   │   ├── common
│   │   │   ├── settings.js
│   │   │   └── ...
│   │   ├── featureFiles
│   │   │   ├── Home_Buttons.feature
│   │   │   ├── Home_Fields.feature
│   │   │   ├── Login.feature
│   │   │   └── ...
│   │   │   └── step_definitions
│   │   │   │   ├── Home_Buttons_steps.js
│   │   │   │   ├── Home_Fields_steps.js
│   │   │   │   ├── Login_steps.js
│   │   │   │   └── ...
│   │   ├── pages
│   │   │   ├── homePage.js
│   │   │   ├── loginPage.js
│   │   │   └── ...
│   │   └── support
│   │   │   ├── env.js
│   │   │   └── ...
├── package.json
├── gulpfile.js
├── nightwatch.conf.js
├── README.md
└── cucumber.js
```

Additions:
```
   Supported Browsers: Chrome, Firefox, IE
   Multicapabilities: Running the same test in specified Browsers at a time.
   Parallel Execution: Parallel Executions. Note: Test concurrency is done at the file level. Each test file will fill a test worker slot. Individual tests/steps in a feature file will not run concurrently.
```

## Troubleshooting Steps for IE:

# Working with IE using Nightwatch-cucumber

    Perform a webdriver update in node modules using " webdriver-manager update --ie "

    Make Sure IE driver is up to date.

    We need to set the IEdriver path to System Environment PATH dynamically using the following line " process.env.PATH += path.delimiter + path.join(__dirname, 'iedriver'); " in iedriver folder in node modules

    In nightwatch.conf.js of your project, import iedriver file using require('iedriver') which resides in node_modules

    set browserName: 'internet explorer' in desiredCapabilities

    All set to run -> go to command prompt and run the following command node_modules/.bin/cucumberjs

## Troubleshooting Steps to work with Parallel execution:

# Multi Browser Support:Parallel Execution with Nightwatch via workers feature:

    We need to set test settings for each of the browser in config file of nightwatch
    nightwatch.config.js  Expand source

    If you can see, we have set 2 browser options to run when running the tests(default, firefox)
    So in command line, when executing, with options -e default,firefox. (Note: We can set 'n' number of supported browsers at a time)
    That's it, same test will run in parallel on specified browsers

    We need to set the option in config file as
    config.js
    

# Acceptance Tests

You can run the test by executing in 2 ways

1) `npm run test:e2e --env <environment name - browser name> ex: dev-chrome | dev-firefox | dev-ie | qa-chrome | qa-firefox | qa-ie | prod-chrome | prod-firefox | prod-ie `
2) `node_modules/.bin/nightwatch --env <environment name - browser name> ex: dev-chrome | dev-firefox | dev-ie | qa-chrome | qa-firefox | qa-ie | prod-chrome | prod-firefox | prod-ie `

>Note: If no environment and browser name is specified, like running the command as "npm run test:e2e", then it will take the default settings i.e., chrome as default browser and localhost as default environment.

# Tests Reports

HTML report generation is enabled by default. It's default location is reports/cucumber.html.
