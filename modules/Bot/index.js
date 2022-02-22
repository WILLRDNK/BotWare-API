import { launch } from 'puppeteer';

class Bot{


    async newBrowser(){
        const browser = await launch( {headless:true, ignoreHTTPSErrors: true}  );
        return browser
    }
    
    async newPage(){
        const browser = await this.newBrowser();
        const page = await browser.newPage();
        return page
    }

    async goTo(url){
        const page = await this.newPage()
        const sla = await page.goto(url,{timeout:10000});
        return sla
    }

    async exit(){
        const browser = await this.newBrowser()
        const exit = await browser.close()
        return exit
    }

}

export default Bot