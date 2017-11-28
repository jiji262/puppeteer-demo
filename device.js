const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iphone6 = devices['iPhone 6'];
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.emulate(iphone6);
  await page.goto('https://go.sapanywhere.com/', {
      waitUntil: 'networkidle2'
  });
  await page.screenshot({ path: 'anywhere-iphone.png' });
  const host = await page.evaluate(() => location.host);
  console.log(host); // 'm.facebook.com'
  browser.close();
})();
