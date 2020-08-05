'use strict';

const mock = require('egg-mock');

describe('test/serverChan.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/serverChan-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, serverChan')
      .expect(200);
  });
});
