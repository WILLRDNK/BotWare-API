const OnuHunter = require('../../modules/OnuHunter/OnuHunter');
const onuHunter = new OnuHunter

async function scanerTesteAcessoRemoto(ip){
    await onuHunter.newBrowser(true);
    await onuHunter.newPage();
    await onuHunter.scanner(ip);
    let log = {};
    const titulo = await onuHunter.title();
    log.title = titulo.title;
    if(log.title == undefined || null){
        log = console.error(`deu pau`);
    }else{
        log.status = 200;
        log.ip = ip
    }
    
    await onuHunter.closeBrowser();

    return log
}

module.exports = scanerTesteAcessoRemoto
