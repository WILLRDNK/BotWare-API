const OnuHunter = require('../OnuHunter/OnuHunter');
const onuHunter = new OnuHunter

async function teste(){
    await onuHunter.newBrowser(true);
    await onuHunter.newPage();
    const scan =  await onuHunter.scanner('100.64.14.108');
    if(scan === undefined ){
        console.log(scan);
        return scan;
    }
    const log = await onuHunter.title();
    await onuHunter.closeBrowser();
    console.log(log);
}

teste()