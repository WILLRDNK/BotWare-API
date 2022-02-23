const { paperFormats } = require("puppeteer");
const Bot = require( "./Bot")
const OnuHunter = require('../passTeste/OnuHunter');

const onuHunter = new OnuHunter

async function teste(){
    await onuHunter.newBrowser(true);

    await onuHunter.newPage();
    await onuHunter.goTo(`https://100.64.14.108`);
    const log = await onuHunter.title();
    await onuHunter.closeBrowser();
    
    console.log(log)
}

teste()