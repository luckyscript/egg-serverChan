'use strict';

const assert = require('assert');

module.exports = app => {
  app.addSingleton('serverChan', createServerChan);
};

function createServerChan(config, app) {
  assert(config.sckey, '[egg-serverChan] sckey is required, find your sckey in http://sc.ftqq.com/?c=code');
  const serverChan = {};
  serverChan.sendMessage = (text = '', desp = '') => {
    return app.curl(`https://sc.ftqq.com/${config.sckey}.send?text=${encodeURIComponent(text)}&desp=${encodeURIComponent(desp)}`);
  };
  return serverChan;
}
