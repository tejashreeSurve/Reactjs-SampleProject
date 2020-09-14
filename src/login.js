const puppeteer = require("puppeteer");

async () => {
  let loginPageUrl = "https://localhost:3000/";
  let browser = await puppeteer.launch({
    executablePath: "/path/to/Chrome",
    headless: false,
  });
  let page = await browser.newPage();
  await page.goto(loginPageUrl, { waitUntil: "networkidle2" });
  let data = await page.evaluate(() => {
    let formTitle = document.querySelector(
      'div[class="MuiAvatar-root MuiAvatar-circle loginavatar MuiAvatar-colorDefault"]  > h1'
    );
    return formTitle;
  });
  console.log(data);

  await browser.close();
};
