const Bot = require("../Bot/Bot")


class OnuHunter extends Bot{

    async scanner(ip){
        try{
            try{
                try{
                    const scannerResult = await this.goTo(`https://${ip}/login.cgi`);
                    this.scannerResult = scannerResult;
                    
                    }catch(error){
                    const scannerResult = await this.goTo(`https://${ip}:80`);
                    this.scannerResult = scannerResult;        
                    }

                }catch(error){
                    const scannerResult = await this.goTo(`http://${ip}/login.cgi`);
                    this.scannerResult = scannerResult;
                }
        }catch(error){
            this.browser.close()
            const erro = {
                    title: 'Não foi possivel localizar o ip informado',
                    ip: ip,
                    status: 400
            }
            return erro
        }
        return this.scannerResult
    }

    async title(){
        const log = await this.page.evaluate(async() =>{
            return {
                
                title: document.querySelector('title').innerHTML, 
                
                }
            }
        );
        return log
    }



}
module.exports = OnuHunter