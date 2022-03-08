const OnuHunter = require('../../modules/OnuHunter/OnuHunter');
const onuHunter = new OnuHunter

async function scanerTesteAcessoRemoto(ip){
    await onuHunter.newBrowser(true);
    await onuHunter.newPage();
    await onuHunter.scanner(ip);
    const log = await onuHunter.title();
    await onuHunter.closeBrowser();
    return log
}

module.exports = scanerTesteAcessoRemoto
