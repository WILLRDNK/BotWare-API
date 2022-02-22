const { paperFormats } = require("puppeteer");
const Bot = require( "./index")

const onuHunter = new Bot;



async function pppa(){

    const opp = await onuHunter.newBrowser('100.64.226.191');

    console.log(opp)
    
    onuHunter.exitBrowser()
};


pppa()