const { paperFormats } = require("puppeteer");
const Bot = require( "./index")

const onuHunter = new Bot;


async function teste(){
    await onuHunter.newBrowser(false);

    await onuHunter.newPage();
    await onuHunter.goTo(`https://100.64.14.108`);
    const log = await onuHunter.scraping();
    
    console.log(log)
}

teste()