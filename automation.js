const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
    // headless:false
  });
  const page = await browser.newPage();
  await page.goto('https://www.npmjs.com', {
      waitUntil: 'networkidle2'
  });
  // await page.waitForSelector('#site-search');
  await page.focus('#site-search');
  await page.type('#site-search', 'react', {
     delay: 100
  });
  await page.click('#npm-search > button');
  await page.waitForNavigation();
  await page.screenshot({ path: 'npmjs.png' });
  browser.close();
})();
