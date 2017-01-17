/**
 * Making application url configurable either from command line and process it based on the environment
 * If Environment is not specified, it will take the default settings
 */
var configure = function () {
    this.setDefaultTimeout(3 * 10000);
};
var argv = require('yargs');
var args = argv.argv;
var environment = !!args.env ? args.env : 'default';

var getAppUrl = function(){
  if(environment === true){
    environment = 'default';
  }
  process.env.env = environment;
  return   constants[process.env.env.split('-')[0]].url;
};

const constants = {
  default: {
    url: 'http://localhost:3000/'
  },
  dev: {
    url: 'http://localhost:3000/'
  },
  qa: {
    url: 'http://localhost:3000/'
  },
  prod: {
    url: 'http://153.71.53.146:8085/'
  }
};

module.exports.getAppUrl = getAppUrl;

module.exports.configure = configure;
