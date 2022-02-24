const OnuHunter = require('../OnuHunter/OnuHunter');

const onuHunter = new OnuHunter

async function teste(){
    await onuHunter.newBrowser(true);
    await onuHunter.newPage();
    const scan =  await onuHunter.scanner('100.64..135')
    if(scan.status = 400){
        console.log(scan);
        return scan;
    }
    const log = await onuHunter.title();
    await onuHunter.closeBrowser();
    console.log(log)
}

teste()