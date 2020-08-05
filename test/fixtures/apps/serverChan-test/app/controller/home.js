'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    console.log(this.app, this.app.serverChan);
    const data = await this.app.serverChan.sendMessage('title', '# content');
    console.log(data);
    this.ctx.body = 'hi, ' + this.app.plugins.serverChan.name;
  }
}

module.exports = HomeController;
