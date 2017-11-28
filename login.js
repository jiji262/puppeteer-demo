
const puppeteer = require('puppeteer');
let browser, page;

const login = async (user, pass) => {
    await page.waitForSelector('input[type="email"]');
    await page.focus('input[type="email"]');
    await page.type('input[type="email"]', user, {
       delay: 100
    });

    await page.focus('input[type="password"]');
    await page.type('input[type="password"]', pass, {
       delay: 100
    });
    await page.click(".btnLogin");
};

const onboarding = async () => {
    await page.waitForSelector('.icon-ua-forward');
    await page.click('.icon-ua-forward');
    await page.waitFor(2000);

    await page.click('.tour-step-icon:nth-child(3)');
    await page.waitFor(2000);

    await page.waitForSelector('.btn-tour-end');
    await page.click('.btn-tour-end');
};

const golive = async () => {
    await page.waitFor(2000);
    let selector = '.tab1';
    await page.waitForSelector(selector);
    await page.click(selector);

    await page.waitFor(2000);
    selector = '.tab2';
    await page.waitForSelector(selector);
    await page.click(selector);

    await page.waitFor(2000);
    selector = '.tab3';
    await page.waitForSelector(selector);
    await page.click(selector);
};



(async () => {
    browser = await puppeteer.launch({
        headless: false
    });
    page = await browser.newPage();
    page.setViewport({
        width: 1210,
        height: 768,
    });
    // await page.tracing.start({ path: 'trace.json' });
    await page.goto("https://go.sapanywhere.com");
    await page.waitForNavigation();
    await login("XXXXXX@sap.com", "XXXXXX");
    // await page.tracing.stop();

})();
