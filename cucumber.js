var nightwatchCucumber = require('nightwatch-cucumber')({
  /* configuration */
    runner: 'cucumber'
});

module.exports = {
    default: '--require ' + nightwatchCucumber + ' --require tests/e2e/support/env.js  --require tests/e2e/featureFiles'
}
