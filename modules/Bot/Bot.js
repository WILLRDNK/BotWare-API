const puppeteer = require('puppeteer');

class Bot{

    async newBrowser(param){
        const browser = await puppeteer.launch( {headless:param, ignoreHTTPSErrors: true} );
        this.browser = browser
    }

    async newPage(){
        const page = await this.browser.newPage();
        this.page = page
    }

    async goTo(url){
        await this.page.goto(url,{timeout:10000});
    }
    
    async closeBrowser(){
        this.browser.close()
    }
}

module.exports = Bot