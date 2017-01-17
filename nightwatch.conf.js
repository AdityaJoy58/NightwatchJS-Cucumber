var seleniumServer = require('selenium-server');
var chromedriver = require('chromedriver');
var iedriver = require('iedriver');
var firefoxdriver = require('geckodriver');

var nightwatchCucumber = require('nightwatch-cucumber')({
    featureFiles: 'tests/e2e/featureFiles',
    stepDefinitions: 'tests/e2e/featureFiles/step_definitions'
});
var chrome_dcap = {
  "browserName": "chrome",
  "javascriptEnabled": true,
  "acceptSslCerts": true
};
var firefox_dcap = {
  "browserName": "firefox",
  "javascriptEnabled": true,
  "acceptSslCerts": true
};
var ie_dcap = {
  "browserName": "internet explorer",
  "javascriptEnabled": true,
  "acceptSslCerts": true
};

module.exports = {
    src_folders: [nightwatchCucumber],
    custom_commands_path: '',
    custom_assertions_path: '',
    globals_path: '',
    page_objects_path: '',
    live_output: false,
    disable_colors: false,
    //test_workers: { // For Parallel Execution
    //  enabled: true,
    //  workers: 'auto'
    // },

    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        log_path: '',
        host: '127.0.0.1',
        port: 4444,
        "cli_args": {
          "webdriver.chrome.driver": chromedriver.path,
          "webdriver.ie.driver": iedriver.path,
          "webdriver.gecko.driver": firefoxdriver.path
        }
    },
    test_settings: {
        default: {
            selenium_port: 4444,
            selenium_host: 'localhost',
            silent: true,
            screenshots: {
                enabled: true,
                on_failure: true,
                on_error: false,
                path: 'screenshots/default'
            },
            // To run the tests in Firefox browser
            // replace the below desiredCapabilities block with
            // desiredCapabilities block present in firefox block
            desiredCapabilities: {
                browserName: 'chrome', //chrome or firefox or internet explorer
                javascriptEnabled: true,
                acceptSslCerts: true,
                "chromeOptions": {
                  "args": [
                    "--start-maximized"
                  ]
                }
            }
        },
        "dev-chrome" : {
          desiredCapabilities: chrome_dcap
        },
        "dev-firefox" : {
          desiredCapabilities: firefox_dcap
        },
        "dev-ie" : {
          desiredCapabilities: ie_dcap
        },
        "qa-chrome" : {
          desiredCapabilities: chrome_dcap
        },
        "qa-firefox" : {
          desiredCapabilities: firefox_dcap
        },
        "qa-ie" : {
          desiredCapabilities: ie_dcap
        },
        "prod-chrome" : {
          desiredCapabilities: chrome_dcap
        },
        "prod-firefox" : {
          desiredCapabilities: firefox_dcap
        },
        "prod-ie" : {
          desiredCapabilities: ie_dcap
        }
    }
}
