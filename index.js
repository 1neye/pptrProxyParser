const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: [ '--proxy-server=socks4://178.168.208.4:5678' ]
    });
    const page = await browser.newPage();
    // await page.authenticate({ username: '' , password:'' });
    await page.goto('https://2ip.ru/');
    await page.screenshot({ path: 'example.png' });

    await browser.close();
})();