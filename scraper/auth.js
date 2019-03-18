const puppeteer = require("puppeteer");
const {
  auth: { url, login, password }
} = require("./config");

class Auth {
  constructor() {}
  async navigate() {
    this.browser = await puppeteer.launch();
    this.page = await this.browser.newPage();
    await this.page.goto(url);
  }
  async fillForm() {
    // fill #usr field
    await this.page.waitFor("#usr");
    await this.page.type("#usr", login);
    // fill #pwd field
    await this.page.waitFor("#pwd");
    await this.page.type("#pwd", password);
  }
  async submitForm() {
    // click submit button
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.click(`input[type="submit"]`)
    ]);
  }
  async getStatus() {
    // class="success" for success
    await this.page.waitFor(".success");
    const status = await this.page.$eval(".success", e => e.innerText);
    console.log({ status });
    return status;
    // class="error" for error
  }
  async cleanUp() {
    await this.page.close();
    await this.browser.close();
  }
}

(async () => {
  const auth = await new Auth();
  await auth.navigate();
  await auth.fillForm();
  await auth.submitForm();
  await auth.getStatus();
  await auth.cleanUp();
})();
