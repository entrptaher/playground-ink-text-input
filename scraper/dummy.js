const puppeteer = require("puppeteer");

class Dummy {
  async navigate() {
    this.browser = await puppeteer.launch();
    this.page = await this.browser.newPage();
    await this.page.goto('http://example.com');
    return this;
  }
  async getStatus({selector}) {
    // class="success" for success
    await this.page.waitFor(selector);
    const status = await this.page.$eval(selector, e => e.innerText);
    return status;
  }
  async cleanUp() {
    await this.page.close();
    await this.browser.close();
    return this;
  }
}

module.exports = Dummy;